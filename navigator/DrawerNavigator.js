import React from "react";
import { View,Text,Image } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppBottomStack from "../bottomNavigator/BottomNavigator"; 
import Profile from "./bottomComponents/Profile";
import Details from "../bottomNavigator/Details";


const DrawerStack = createDrawerNavigator();
export default function AppDrawerStack() {
  return (
    <DrawerStack.Navigator>
      <DrawerStack.Screen name="Home" component={AppBottomStack} />
      <DrawerStack.Screen name="Profile" component={Profile} />
      <DrawerStack.Screen name="DrawerView" component={DrawerView} />
      <DrawerStack.Screen name="Details" component={Details}/>
    </DrawerStack.Navigator>
  );
}

function DrawerView() {
  return (
    <View>
      <Text>Drawer View</Text>
    </View>
  );
}