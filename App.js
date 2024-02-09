import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/Screens/HomeScreen";
import MovieScreen from "./src/Screens/MovieScreen";
import ProfileScreen from "./src/Screens/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [fontLoaded] = useFonts({
    Regular: require("./assets/fonts/NunitoSans_10pt-Regular.ttf"),
    Bold: require("./assets/fonts/NunitoSans_10pt-Bold.ttf"),
    Black: require("./assets/fonts/NunitoSans_10pt-Black.ttf"),
    ExtraBold: require("./assets/fonts/NunitoSans_10pt-ExtraBold.ttf"),
    ExtraLight: require("./assets/fonts/NunitoSans_10pt-ExtraLight.ttf"),
    Light: require("./assets/fonts/NunitoSans_10pt-Light.ttf"),
    SemiBold: require("./assets/fonts/NunitoSans_10pt-SemiBold.ttf"),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "blue",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen
          name="HomeAndMovie"
          component={HomeAndMovieStack}
          options={{
            tabBarLabel: "Home & Movie",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function HomeAndMovieStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="homeScreen"
        component={HomeScreen}
        options={{ headerShown: false }} 
      />
      <Stack.Screen
        name="movie"
        component={MovieScreen}
        options={{ headerShown: true }} 
      />
    </Stack.Navigator>
  );
}
