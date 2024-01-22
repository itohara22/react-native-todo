import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

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
      <View style={styles.listContainer}>
        <ScrollView>
          {taskList?.map((task, i) => {
            return (
              <View key={i} style={styles.listItems}>
                <Text style={styles.listText}>{task}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
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
  listContainer: {
    flex: 4,
  },
  listItems: {
    margin: 5,
    backgroundColor: "yellowgreen",
    borderRadius: 6,
    //border radius on <Text> is not supported on ios as native component in which <Text> will convert does not support boreder raduis
    //therefore wel will wrap the <Text> in View
    padding: 8,
  },
  listText: {
    color: "white",
    fontSize: 15,
  },
});
