import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { UserList } from "../components/UserList";
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
      component={UserList}
      options={{
        headerShown: false,
      }}
    />
  </StackNavigator.Navigator>
);
