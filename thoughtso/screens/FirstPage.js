import * as React from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Task from '../components/Task';

const FirstPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeStyle}>
      <View style={styles.container}>

        {/*Today's tasks*/}
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>
            Today's tasks:
          </Text>

          <Viev style={styles.items}> 
            {/*The tasks will go here! -- 7:44: https://www.youtube.com/watch?v=0kL6nhutjQ8*/}
            <Task text={'Task 1'} />
            <Task text={'Task 2'} />
          </Viev>


          <Button onPress={() => navigation.navigate('SecondPage')}
            title="Go to Second Page" style={styles.buttons}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default FirstPage;

const styles = StyleSheet.create({
  safeStyle: {
    flex: 1,
    backgroundColor: '#435585',
    color: '#F5E8C7',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },  
  items: {
  }, 
  sectionTitle: { // "Today's tasks:"
    fontSize: 25,
    fontWeight: 'bold',
    // textAlign: 'center',
    // marginBottom: 16,
    color: '#F5E8C7', //363062
  },
  buttons: { // the buttons
    color: '#F5E8C7',
    backgroundColor: 'red',
    padding: 5,
  }
});
