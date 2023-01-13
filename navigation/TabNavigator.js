import React from 'react';
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from "react-native-responsive-fontsize";

import Notes from "../screens/Notes";
import CreateNotes from "../screens/CreateNotes";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
        labeled={false}
            barStyle={styles.bottomTabStyle}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === "Notes") {
                        iconName = focused ? "home" : "home-outline";
                    } else if (route.name === "CreateNotes") {
                        iconName = focused ? "add-circle" : "add-circle-outline";
                    }
                    return (
                        <Ionicons
                            name={iconName}
                            size={RFValue(25)}
                            color={color}
                            style={styles.icons}
                        />
                    );
                }
            })}
            activeColor={"#49eee6"}
            inactiveColor={"gray"}
        >
            <Tab.Screen name="Notes" component={Notes}/>
            <Tab.Screen name="CreateNotes" component={CreateNotes}/>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    bottomTabStyle: {
        backgroundColor: "#2a2a2a",
        height: "10%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        overflow: "hidden",
        position: "absolute"
    },
    icons: {
        width: RFValue(30),
        height: RFValue(30)
    }
});

export default BottomTabNavigator
