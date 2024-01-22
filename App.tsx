import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import TaskList from "./components/TaskList";

export default function App() {
  const [inputText, setInputText] = useState<string>("");
  const [taskList, setTaskList] = useState<string[]>([]);

  const handleAddATask = () => {
    setTaskList((prev) => [inputText, ...prev]);
    setInputText("");
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={inputText}
          onChangeText={setInputText}
        />
        <Button title="Add Task" onPress={handleAddATask} />
      </View>
      <TaskList taskList={taskList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  inputContainer: {
    flex: 1,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    width: "70%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#cccccc",
  },
});
