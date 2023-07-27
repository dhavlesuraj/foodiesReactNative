import React from "react";
import { View,StyleSheet,Text } from "react-native";
import Background from "./Backgroun";
import Btn from "./Btn";
import { darGreen, green } from "./Constant";
import Alert from "./Alert";


const Account=(props)=>{
    return (
      <Background>
        <View style={{ marginHorizontal:40,marginVertical:100}}>
          <Text style={styles.text}>Let's start</Text>
          <Text style={[styles.text,{marginBottom:40}]}>Order Food</Text>
          <Btn  bgColor={green} textColor="white" btnLabel="Login" Press={()=>props.navigation.navigate("Login")}/>
          <Btn  bgColor="white" textColor={darGreen} btnLabel="Signin" Press={()=>props.navigation.navigate("SignIn")}/>
        </View>
      </Background>
    );
}
export default Account;

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 64,
    fontWeight:"bold"
  },
});