import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator, createAppContainer } from "@react-navigation/native-stack";
import {
  catagories_screen,
  catagories_meal_screen,
  measl_detail_screen,
} from "../screen";

const meals_navigation = createNativeStackNavigator({
  catagories: catagories_screen,
  catagoriesMeal: {
    screen: catagories_meal_screen,
  },
  measlDetail: measl_detail_screen,
});

export default createAppContainer(meals_navigation);
