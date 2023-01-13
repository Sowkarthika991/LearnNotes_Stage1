import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import Notes from "../screens/Notes";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="stack"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="stack" component={TabNavigator} />
            <Stack.Screen name="Notes" component={Notes} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
