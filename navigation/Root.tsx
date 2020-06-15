import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import React from 'react'
import { UserList } from "../components/UserList";

const StackNavigator = createStackNavigator();

export const navigator = (
    <StackNavigator.Navigator initialRouteName='Home'>
        <StackNavigator.Screen
            name="Home"
            component={HomeScreen}
            options={{
                headerShown: false
            }}
        />
        <StackNavigator.Screen
            name="Collaborators"
            component={UserList}
            options={{
                headerShown: false
            }}
        />
    </StackNavigator.Navigator>
)
