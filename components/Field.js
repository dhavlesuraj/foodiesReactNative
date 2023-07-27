import React, { useState } from "react";
import { TextInput,Text } from "react-native";
import {darkGreen,green} from "./Constant";


const Field=(props)=>{
    return (
      <TextInput
        {...props}
        autoCapitalize="none"
        style={{
          borderRadius: 10,
          fontSize:16,
          color: darkGreen,
          paddingHorizontal: 10,
          width: "80%",
          height:50,
          backgroundColor: "rgb(220,220,220)",
          marginBottom:20
        }}
        placeholderTextColor={green}
      ></TextInput>
    );
}
export default Field;