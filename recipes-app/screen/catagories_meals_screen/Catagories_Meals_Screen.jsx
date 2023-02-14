import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { CATEGORIES } from "../../data/dummy-data";
const Catagories_Meals_Screen = ({ route, navigation }) => {
  const { uniqeId } = route.params;
  const selectedCategorie = CATEGORIES.find((cate) => cate.id === uniqeId);
  navigation.setOptions({ title: selectedCategorie.title });
  return (
    <View style={styles.screen}>
      <Text>catagories_meals_screen</Text>
      <Text>{selectedCategorie.title}</Text>
      <Button
        title="Go to Detail"
        onPress={() => {
          navigation.navigate("Detail");
        }}
      />
    </View>
  );
};

export default Catagories_Meals_Screen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
