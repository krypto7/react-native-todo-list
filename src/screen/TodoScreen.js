import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import React from "react";
import { IconButton } from "react-native-paper";

// const dummyData = [
//   {
//     id: 1,
//     task: "car washing",
//   },
//   {
//     id: 2,
//     task: "date with developer",
//   },
// ];

// console.log(Date.now().toString());

const TodoScreen = () => {
  const [todoText, setTodoText] = useState("");
  const [addTask, setTask] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  const renderItems = ({ item, index }) => (
    <View
      style={{
        backgroundColor: "#1e90ff",
        borderRadius: 5,
        padding: 10,
        marginVertical: 8,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Text style={{ flex: 1 }}>{item.task}</Text>
      <IconButton icon={"pencil"} onPress={() => handlechangeTodo(item)} />
      <IconButton
        icon={"trash-can"}
        onPress={() => handleRemoveTodo(item.id)}
      />
    </View>
  );

  const handlePress = () => {
    setTask([...addTask, { id: Date.now().toString(), task: todoText }]);
    setTodoText("");
  };

  const handleRemoveTodo = (id) => {
    const updatedTodo = addTask.filter((todo) => todo.id != id);
    // console.log("===>", updatedTodo);
    setTask(updatedTodo);
  };

  const handlechangeTodo = (todo) => {
    setEditTodo(todo);
    setTodoText(todo.task);
  };

  const handleEditedTodo = () => {
    const updatedTodos = addTask.map((item) => {
      if (item.id === editTodo.id) {
        return { ...item, task: todoText };
      }
      return item;
    });
    setTask(updatedTodos);
    setEditTodo(null);
    setTodoText("");
  };

  console.log("===>", todoText);
  return (
    <View style={{ marginHorizontal: 15 }}>
      <TextInput
        style={{ borderWidth: 2, paddingHorizontal: 10 }}
        placeholder="Add Task"
        value={todoText}
        onChangeText={(userValue) => {
          setTodoText(userValue);
        }}
      />
      {editTodo ? (
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            padding: 10,
            borderRadius: 15,
            marginTop: 10,
          }}
          onPress={handleEditedTodo}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Save</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            padding: 10,
            borderRadius: 15,
            marginTop: 10,
          }}
          disabled={todoText === ""}
          onPress={handlePress}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Add Task</Text>
        </TouchableOpacity>
      )}

      {/* Todo list rendering */}

      <FlatList data={addTask} renderItem={renderItems} />
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({});
