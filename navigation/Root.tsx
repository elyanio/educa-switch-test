import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CollaboratorScreen from "../screens/CollaboratorScreen";
import HomeScreen from "../screens/HomeScreen";

const StackNavigator = createStackNavigator();

export const navigator = (
  <StackNavigator.Navigator initialRouteName="Home">
    <StackNavigator.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <StackNavigator.Screen
      name="Collaborators"
      component={CollaboratorScreen}
      options={{
        headerShown: false,
      }}
    />
  </StackNavigator.Navigator>
);
