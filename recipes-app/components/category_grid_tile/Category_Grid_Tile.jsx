import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from "react-native";
import React from "react";

const Category_Grid_Tile = ({ onSelect, title, color }) => {
  let TouchComponent = TouchableOpacity;
  if (Platform.OS == "android" && Platform.Version >= 22) {
    TouchComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchComponent style={{ flex: 1 }} onPress={onSelect}>
        <View style={{ ...styles.container, ...{ backgroundColor: color } }}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchComponent>
    </View>
  );
};

export default Category_Grid_Tile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 8,
    height: 150,
  },
  container: {
    flex: 1,
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.6,
    shadowRadius: 12,
    elevation: 6,

    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  text: {
    color: "white",
    fontSize: 16,
    fontFamily: "mulish-medium",
  },
});
