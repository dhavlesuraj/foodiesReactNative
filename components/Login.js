import React, { useState } from "react";
import { View,StyleSheet,Text, Button, Touchable, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Background from "./Backgroun";
import {darkGreen,green} from "./Constant";
import Field from "./Field";
import Btn from "./Btn";



const Login=(props)=>{
const[updatedName,setUpdatedName]=useState("");
const [updatedPassword,setUpdatedPassword]=useState("");

    const getLogin=()=>{
       if(updatedName=="abc" && updatedPassword=="123")
      {
        props.navigation.navigate("AppDrawerStack");
      } else alert("enter valid username and password");
    }
    const handleChange=(text)=>{
        setUpdatedName(text);  
    }
    const handleChangePassword=(text)=>{
        setUpdatedPassword(text)
    }

    return (
      <Background>
        <View style={{ alignItems: "center", width: 400 }}>
          <Text
            style={{
              color: "white",
              fontSize: 64,
              fontWeight: "bold",
              marginVertical: 20,
            }}
          >
            Login
          </Text>
          <View
            style={{
              backgroundColor: "white",
              height: 700,
              width: 460,
              borderTopLeftRadius: 250,
              
              paddingTop: 100,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 40, color: green, fontWeight: "bold" }}>
              WelCome Back
            </Text>
            <Text
              style={{
                color: "grey",
                fontWeight: "bold",
                fontSize: 19,
                marginBottom: 20,
              }}
            >
              Login to your account
            </Text>
            <Field
              placeholder="Email/Username"
              keyboardType={"email-address"}
              onChangeText={handleChange}
              
            />
            <Field
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={handleChangePassword}
              
            />
            <View
              style={{
                alignItems: "flex-end",
                width: "78%",
                padding: 16,
                marginBottom: 150,
              }}
            >
              <Text style={{ color: green, fontWeight: "bold", fontSize: 15 }}>
                Forgot Password ?
              </Text>
            </View>
            <Btn
              bgColor={green}
              textColor="white"
              btnLabel="Login"
              Press={getLogin}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text>Don't have an account ?</Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("SignIn")}
              >
                <Text
                  style={{ color: green, fontWeight: "bold", fontSize: 16 }}
                >
                  Signup
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Background>
    );
}
export default Login;