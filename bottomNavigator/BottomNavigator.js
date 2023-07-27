import React from "react";
import { View ,Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Food from "./Food";
import Delivery from "./Delivery";
import{Ionicons} from "@expo/vector-icons"


const BottomStack = createBottomTabNavigator();
export default function AppBottomStack() {
  return (
    <BottomStack.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#e32f45",
        tabBarStyle: {
          height: 60,
        },
        headerRight: () => (
          <Switch
            value={mode}
            onChange={() => {
              setMode((value) => !value);
            }}
          />
        ),
      }}
      tabBarOptions={{
        labelStyle: {
          fontSize: 15,
        },
      }}
    >
      <BottomStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={40} color={color} />
          ),
        }}
      />
      <BottomStack.Screen
        name="Food"
        component={Food}
        options={{
          headerShown: false,
          title: "Food",
          tabBarIcon: ({ color }) => (
            <Ionicons name="fast-food" size={40} color={color} />
          ),
        }}
      />
      <BottomStack.Screen
        name="Delivery"
        component={Delivery}
        options={{
          headerShown: false,
          title: "Delivery",
          tabBarIcon: ({ color }) => (
            <Ionicons name="bicycle" size={40} color={color} />
          ),
        }}
      />
    </BottomStack.Navigator>
  );
}
//  function BottomScreenOne() {
//   return (
//     <View>
//       <Text>BottomScreenOne</Text>
//     </View>
//   );
// }

// function BottomScreenTwo() {
//   return (
//     <View>
//       <Text>BottomScreenTwo</Text>
//     </View>
//   );
// }
