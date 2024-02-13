import { View, Text, StyleSheet, Pressable } from "react-native";

type Props = {
  itemId: number;
  itemText: string;
  isCompleted: boolean;
  toggleComplete: (arg: number) => void;
};

const ListItem = ({ itemText, isCompleted, itemId, toggleComplete }: Props) => {
  console.log(itemText);

  function handleTouch() {
    toggleComplete(itemId);
  }
  return (
    <View style={styles.listItems}>
      <Text style={isCompleted ? styles.strikeThrough : styles.listText}>
        {itemText}
      </Text>
      <Pressable style={styles.button} onPress={handleTouch}>
        <Text>Cross out</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  listItems: {
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "yellowgreen",
    borderRadius: 6,
    //border radius on <Text> is not supported on ios as nativehcomponent
    //in which <Text> will convert does not support boreder raduis
    //therefore wel will wrap the <Text> in View
    padding: 5,
  },
  listText: {
    color: "white",
    fontSize: 18,
  },
  strikeThrough: {
    color: "white",
    fontSize: 18,
    textDecorationLine: "line-through",
    textDecorationColor: "black",
  },
  button: {
    backgroundColor: "white",
    padding: 6,
    borderRadius: 4,
  },
});

export default ListItem;
