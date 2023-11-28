import React from "react";
import {NavigationContainer} from"@react-navigation/native";
import{createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./src/Screens/HomeScreen";
import MovieScreen from "./src/Screens/MovieScreen";

const Stack =createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
           name="homescreen"
           component={HomeScreen} 
           options={{headerShown: false}}
           />
          <Stack.Screen 
          name="movie" 
          component={MovieScreen}
          options={{headerShown: false}}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

