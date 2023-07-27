import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Background from "./Backgroun";
import { darkGreen, green } from "./Constant";
import Field from "./Field";
import Btn from "./Btn";
import Login from "./Login";

const SignIn = (props) => {
  return (
    <Background>
      <View style={{ alignItems: "center", width: 400 }}>
        <Text
          style={{
            color: "white",
            fontSize: 64,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          Register
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 19,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          Create a new account
        </Text>
        <View
          style={{
            backgroundColor: "white",
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 50,
            alignItems: "center"
          }}
        >
          <Field placeholder="First name" />
          <Field placeholder="Last name" />
          <Field placeholder="Number" keyboardType={"number"} />
          <Field placeholder="Email/Username" keyboardType={"email-address"} />
          <Field placeholder="Password" secureTextEntry={true} />
          <Field placeholder="Confirm Password" secureTextEntry={true} />
          <Btn
            bgColor={green}
            textColor="white"
            btnLabel="Signup"
            Press={() => {
              alert("Account created");
              props.navigation.navigate("Login");
            }}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text>Already have an account? </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Login")}
            >
              <Text style={{ color: green, fontWeight: "bold", fontSize: 16 }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};
export default SignIn;
