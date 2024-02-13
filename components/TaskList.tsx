import { StyleSheet, View, FlatList } from "react-native";
import ListItem from "./ListItem";

type TaskListType = { text: string; id: number; isCompleted: boolean };
type Props = {
  taskList: TaskListType[];
  toggleComplete: (arg: number) => void;
};

const TaskList = ({ taskList, toggleComplete }: Props) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={taskList}
        keyExtractor={(item: any, index: any) => {
          return item.id;
        }}
        renderItem={(itemData) => {
          console.log(itemData);
          return (
            <ListItem
              toggleComplete={toggleComplete}
              itemText={itemData.item.text}
              itemId={itemData.item.id}
              isCompleted={itemData.item.isCompleted}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 4,
  },
});
export default TaskList;
