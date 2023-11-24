import React, { Component, useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Task = (props) => {
    const [isCompleted, setIsCompleted] = useState(props.isCompleted); // declares a state variable initialized to false

    useEffect(() => {
        setIsCompleted(props.isCompleted);
      }, [props.isCompleted]);

    // sets the completion status of a function to true when it's called & false otherwise
    const toggleCompletion = () => {
        props.onToggleCompletion && props.onToggleCompletion(!props.isCompleted);
      };

      const handleDelete = () => {
        props.onDelete && props.onDelete();
      };

    return (
        <View style={styles.item}> 
        <TouchableOpacity
        style={[
          styles.square,
          { backgroundColor: isCompleted ? "#00FF00" : "#F5E8C7" },
          { opacity: isCompleted ? 1 : 0.4 },
        ]}
        onPress={toggleCompletion}
        activeOpacity={1} // ensures TouchableOpacity doesn't change opacity on press
      ></TouchableOpacity>
            <View style={styles.itemContent}>
            <Text style={[ styles.itemText, { color: isCompleted ? "#00FF00" : "#363062" },
        ]}
      >
               {props.text}
            </Text>
            </View>
            <View style={styles.deleteButtonContainer}>
                <TouchableOpacity style={styles.deleteButtonContainer} onPress={handleDelete}>
                    <Text style={styles.deleteButton}>x</Text>
                </TouchableOpacity>
            </View>
        </View>
    )    
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#818FB4',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20, // separates items
    },
    itemContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10, // add margin to separate from the square
      },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#F5E8C7',
        borderRadius: 5, // rounder
        marginRight: 15, // pushes txt a lil to the right
    },
    itemText: {
        // maxWidth: '90%', // adjusts the width to leave space for delete button
        color: '#363062', // text color
        flex: 1,
        fontSize: 16,
        marginRight: 5, // adjusts the margin between text and delete button
    },
    deleteButtonContainer: {
        width: 24,
        height: 24,
        borderRadius: 24, 
        backgroundColor: '#F5E8C7',
        alignItems: 'center',
        justifyContent: 'center',
        // position: 'absolute', // positions the delete button
        // right: 0, // aligns it to the right side of the item
      },
      deleteButton: {
        width: 20,
        height: 20,
        fontSize: 15,
        color: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center', // centers the text horizontally
        lineHeight: 20, // centers the text vertically
        fontWeight: 'bold',
      },
      deleteButtonText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
      },
});

export default Task;
