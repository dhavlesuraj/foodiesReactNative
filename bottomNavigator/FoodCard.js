import React from 'react'
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FlatList } from 'react-native-gesture-handler';
import Btn from '../components/Btn';



const FoodCard = ({menuData}) => {
  return (
    <View>
      <FlatList
        data={menuData}        
        renderItem={({item})=>{
          const { image, name, price } = item; //destucturing
          return (
            <View style={styles.box}>
              <View style={styles.imagebox}>
                <TouchableOpacity
                  onPress={() =>navigation.navigate("Detail")}
                >
                  <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={image}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.cartBody}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.price}>{price}</Text>
              </View>
              <View style={styles.btn}>
                <Btn
                  bgColor={"green"}
                  textColor="white"
                  btnLabel="Add To Cart"
                  onPress={() => alert("Add to cart successful")}
                />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

export default FoodCard;

const styles = StyleSheet.create({
  box: {
    height: "auto",
    width: "auto",

    backgroundColor: "white",
    margin: 10,
    padding:10,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
   
  },
  imagebox:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 350,
    height: 250,
  },
  cartBody: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  name: {
    fontWeight: "bold",
    fontSize: 25,
  },
  price: {
    fontWeight: "bold",
    fontSize: 20,
  },
  btn:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  }
});
