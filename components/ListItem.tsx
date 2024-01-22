import { View, Text, StyleSheet } from "react-native";

type ItemData = {
  index: number;
  item: string;
  separators: any;
};

type Props = {
  itemData: ItemData;
};

const ListItem = ({ itemData }: Props) => {
  console.log(itemData);
  return (
    <View key={itemData.index} style={styles.listItems}>
      <Text style={styles.listText}>{itemData.item}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default ListItem;
