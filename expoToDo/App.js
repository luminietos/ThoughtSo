import React, { useState, useEffect } from "react";
import {
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Keyboard,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState("");
  const [taskItems, setTaskItems] = useState([]);
  const [filter, setFilter] = useState("all");

  // loads tasks from AsyncStorage on app start
  useEffect(() => {
    const loadTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem("@tasks");
        if (storedTasks) {
          setTaskItems(JSON.parse(storedTasks));
        }
      } catch (error) {
        console.error("Error loading tasks from AsyncStorage:", error);
      }
    };

    loadTasks();
  }, []);

  // saves tasks to AsyncStorage whenever taskItems change
  useEffect(() => {
    const saveTasks = async () => {
      try {
        await AsyncStorage.setItem("@tasks", JSON.stringify(taskItems));
      } catch (error) {
        console.error("Error saving tasks to AsyncStorage:", error);
      }
    };

    saveTasks();
  }, [taskItems]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, { text: task, isCompleted: false }]);
    setTask("");
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy[index].isCompleted = !itemsCopy[index].isCompleted;
    setTaskItems(itemsCopy);
  };

  const filteredTasks = taskItems.filter((item) => {
    if (filter === "all") {
      return true;
    } else if (filter === "active") {
      return !item.isCompleted;
    } else if (filter === "completed") {
      return item.isCompleted;
    }
    return true;
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.taskWrapper}>
          <View style={styles.filterWrapper}>
            <TouchableOpacity onPress={() => setFilter("all")}>
              <Text
                style={[
                  styles.filterText,
                  filter === "all" && styles.activeFilter,
                ]}
              >
                All
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setFilter("active")}>
              <Text
                style={[
                  styles.filterText,
                  filter === "active" && styles.activeFilter,
                ]}
              >
                Active
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setFilter("completed")}>
              <Text
                style={[
                  styles.filterText,
                  filter === "completed" && styles.activeFilter,
                ]}
              >
                Completed
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.sectionTitle}>Today's tasks</Text>

          <View style={styles.items}>
            {filteredTasks.map((item, index) => (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task
                  text={item.text}
                  isCompleted={item.isCompleted}
                  onToggleCompletion={(status) => {
                    let itemsCopy = [...taskItems];
                    itemsCopy[index].isCompleted = status;
                    setTaskItems(itemsCopy);
                  }}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/*write a task*/}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a task here."}
          value={task}
          onChangeText={(text) => setTask(text)}
          placeholderTextColor="#363062"
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%", // takes up full width of screen
    height: "100%", // takes up full height of screen
    backgroundColor: "#363062",
  },
  scrollView: {
    backgroundColor: "#363062", // dark mode background color
  },
  filterText: {
    color: "#818FB4",
    fontSize: 16,
  },
  filterWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  activeFilter: {
    color: "#F5E8C7",
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  // "TODAY'S TASKS"
  sectionTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#F5E8C7",
  },
  items: {
    // where the tasks go
    marginTop: 30, // space under "Today's tasks"
  },
  writeTaskWrapper: {
    position: "absolute", // can be placed where-ever
    bottom: 60,
    width: "100%",
    flexDirection: "row", // places btn next to input
    justifyContent: "space-around",
    alignItems: "center",
  },
  // THE INPUT FIELD
  input: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 15,
    maxWidth: 250,
    backgroundColor: "#F5E8C7",
    borderRadius: 30,
    borderColor: "#435585",
    borderWidth: 1,
    color: "#363062", // text color
    fontSize: 16,
  },
  // THE '+' BUTTON
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#F5E8C7",
    borderRadius: 30, // makes btn circular
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#435585",
    borderWidth: 1,
  },
  addText: {
    fontSize: 24,
    color: "#363062",
    fontWeight: "bold", // makes the "+" thicker
  },
});
