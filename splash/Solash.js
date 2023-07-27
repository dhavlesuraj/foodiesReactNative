import React, { useEffect } from "react";
import { View,Text,Image,StyleSheet } from "react-native";
import Account from "../components/Account";
import AppDrawerStack from "../navigator/DrawerNavigator"

const Splash=(props)=>{
    useEffect(()=>{
      setTimeout(()=>{
        props.navigation.navigate("Login");
      },2000)
    },[]);
    return (
      <View
        style={{
          flex: 1,
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "red",
        }}
      >
        {/* <Image
        style={{width:'100%', height:'100%'}}
          source={require("../Assets/foodpanda-delivery.gif")}
        /> */}
        <Text style={styles.text}>Foodies</Text>
      </View>
    );
}
export default Splash;

const styles=StyleSheet.create({
  text:{
    color:"white",
    fontSize:60,
  }
})