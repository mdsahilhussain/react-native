import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as font from "expo-font";
import AppLoader from "expo-app-loading";
import { useState } from "react";

//! navigation dependence =======================================
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  Catagories_Screen,
  Catagories_Meals_Screen,
  Measl_Detail_Screen,
} from "./screen";

import colorSet from "./constant/colorSet";

//! Loading custome fonts ================
const fetchFonts = () => {
  return Font.loadAsync({
    "mulish-regular": require("./assets/fonts/Mulish-Regular.ttf"),
    "mulish-medium": require("./assets/fonts/Mulish-Medium.ttf"),
    "mulish-bold": require("./assets/fonts/Mulish-Bold.ttf"),
  });
};
//! ======================================
const Stack = createNativeStackNavigator();
export default function App() {
  //! Loading custome fonts on app loading time

  const [fontLoading, setFontLoading] = useState(false);
  if (!fetchFonts) {
    return (
      <AppLoader
        startAsync={fetchFonts}
        onFinish={() => setFontLoading(true)}
      />
    );
  }
  //! ======================================

  return (
    <NavigationContainer styles={styles.container}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colorSet.primaryColor,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Catagories_Screen}
          options={{
            title: "Meals Catagories",
          }}
        />
        <Stack.Screen
          name="Meals"
          component={Catagories_Meals_Screen}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen name="Detail" component={Measl_Detail_Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
