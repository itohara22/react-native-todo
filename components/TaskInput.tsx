import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

type Props = {
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  handleAddATask: () => void;
};

const TaskInput = ({ setInputText, inputText, handleAddATask }: any) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        value={inputText}
        onChangeText={setInputText}
      />
      <Pressable style={styles.button} onPress={handleAddATask}>
        <Text style={styles.buttonText}>Add Task</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
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
    borderRadius: 8,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 4,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "yellowgreen",
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default TaskInput;
