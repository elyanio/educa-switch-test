import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import React from 'react'

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
            name="Links"
            component={LinksScreen}
            options={{
                headerShown: false
            }}
        />
    </StackNavigator.Navigator>
)
