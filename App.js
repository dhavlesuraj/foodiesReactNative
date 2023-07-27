import { View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AppDrawerStack from './navigator/DrawerNavigator';
import Splash from "./splash/Solash";
import Account from "./components/Account";
import Login from "./components/Login";
import SignIn from "./components/Signin";


const Stack = createStackNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Account"
            component={Account}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AppDrawerStack"
            component={AppDrawerStack}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}