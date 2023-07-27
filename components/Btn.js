import React from "react";
import { View,Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


export default function Btn({Press,bgColor,btnLabel,textColor}){
    return(
        <TouchableOpacity 
        onPress={Press}
        style={{backgroundColor:bgColor,
        borderRadius:10,
        alignItems:"center",
        width:300,
        paddingVertical:5,
        marginVertical:10,
        }}>
            <Text style={{color:textColor,fontSize:22,fontWeight:"bold"}}>{btnLabel}</Text>
        </TouchableOpacity>
    );
}
