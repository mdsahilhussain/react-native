import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { CATEGORIES } from "../../data/dummy-data";
import { Category_Grid_Tile } from "../../components";

const Catagories_Screen = ({ navigation }) => {
  const renderGridItem = (itemData) => {
    return (
      <Category_Grid_Tile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          navigation.navigate("Meals", { uniqeId: itemData.item.id });
        }}
      />
    );
  };
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

export default Catagories_Screen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
