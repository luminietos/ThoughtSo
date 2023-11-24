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
            <View style={styles.itemLeft}>
            <Text style={[ styles.itemText, { color: isCompleted ? "#00FF00" : "#363062" },
        ]}
      >
               {props.text}
            </Text>
            </View>
            <View style={styles.circular}></View>
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
    itemLeft: { // the item square
        flexDirection: 'row', // puts txt next to square
        alignItems: 'center', // centers horizontally
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#F5E8C7',
        // opacity: 0.5,
        borderRadius: 5, // rounder
        marginRight: 15, // pushes txt a lil to the right
    },
    itemText: {
        maxWidth: '90%',
        color: '#363062', // text color
        fontSize: 16,
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#F5E8C7',
        borderWidth: 2,
        borderRadius: 10, // makes it a circle
    },
});

export default Task;
