import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/Screens/HomeScreen";
import MovieScreen from "./src/Screens/MovieScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
 
const Stack = createStackNavigator();
 
export default () => {
  const [fontLoaded] = useFonts({
    Regular: require("./assets/fonts/NunitoSans_10pt-Regular.ttf"),
    Bold: require("./assets/fonts/NunitoSans_10pt-Bold.ttf"),
    Black: require("./assets/fonts/NunitoSans_10pt-Black.ttf"),
    ExtraBold: require("./assets/fonts/NunitoSans_10pt-ExtraBold.ttf"),
    ExtraLight: require("./assets/fonts/NunitoSans_10pt-ExtraLight.ttf"),
    Light: require("./assets/fonts/NunitoSans_10pt-Light.ttf"),
    SemiBold: require("./assets/fonts/NunitoSans_10pt-SemiBold.ttf"),
  });
 
  return fontLoaded ? (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="homeScreen"
          component={HomeScreen}
          options={{ headerShown: false }} // Hide header on HomeScreen
        />
        <Stack.Screen
          name="movie"
          component={MovieScreen}
          options={{ headerShown: true }} // Show header on MovieScreen
        />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <AppLoading />
  );
};

