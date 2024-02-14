import { useState } from "react";
import { Button, StyleSheet, TextInput, View, Image } from "react-native";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";

type TaskListType = { text: string; id: number; isCompleted: boolean };

export default function App() {
  const [inputText, setInputText] = useState<string>("");
  const [taskList, setTaskList] = useState<TaskListType[]>([]);

  function handleAddATask() {
    setTaskList((prev) => [
      { text: inputText, id: Math.random(), isCompleted: false },
      ...prev,
    ]);
    setInputText("");
  }

  function toggleComplete(id: number) {
    setTaskList((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      });
    });
  }

  function deleteTask(id: number) {
    setTaskList((prevTasks) => {
      return prevTasks.filter((task) => task.id !== id);
    });
  }

  return (
    <View style={styles.container}>
      <TaskInput
        inputText={inputText}
        setInputText={setInputText}
        handleAddATask={handleAddATask}
      />
      <TaskList
        taskList={taskList}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
  },
});
