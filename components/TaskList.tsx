import { StyleSheet, View, FlatList, Text } from "react-native";
import ListItem from "./ListItem";

type Props = {
  taskList: string[];
};

const TaskList = ({ taskList }: Props) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={taskList}
        renderItem={(itemData) => {
          console.log(itemData);
          return <ListItem itemData={itemData} />;
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
