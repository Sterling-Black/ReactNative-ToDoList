import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';

const ToDoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    setTasks([...tasks, task]);
    setTask('');
  };

  const removeTask = index => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add task"
        onChangeText={text => setTask(text)}
        value={task}
      />
      <Button title="Add" onPress={addTask} />
      <View style={styles.taskContainer}>
        {tasks.map((task, index) => (
          <View key={index} style={styles.task}>
            <Text style={styles.taskText}>{task}</Text>
            <TouchableOpacity
              style={styles.removeBtn}
              onPress={() => removeTask(index)}
            >
              <Text style={styles.removeText}>Remove</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBF5FB',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    width: '80%',
    height: 40,
    padding: 10,
    marginBottom: 10,
    borderColor: '#5B7FFF',
    borderWidth: 1,
    borderRadius: 10
  },
  taskContainer: {
    width: '80%',
    marginTop: 20
  },
  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#DCEEFB',
    borderRadius: 10
  },
  taskText: {
    fontSize: 20,
    color: '#5B7FFF'
  },
  removeBtn: {
    backgroundColor: '#5B7FFF',
    padding: 10,
    borderRadius: 10
  },
  removeText: {
    color: 'white',
    fontSize: 16
  }
});

export default ToDoList;
