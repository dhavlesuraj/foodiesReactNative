import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Hotels from "../hotels/Hotels";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Icon from "react-native-vector-icons/FontAwesome";
import Menu from "../services/DummyApi";
import FoodCard from "./FoodCard";

export default function Food() {
  const [menuData, setMenuData] = useState(Menu);
  return (
    <>
      {/* <View style={styles.textInput}>
        <Icon name="search" size={30} color="#900" />
        <View style={{ flex: 1 }}>
          <TextInput placeholder="Search here" style={styles.search} />
        </View>
      </View> */}
      <View
        style={{ flex: 2, alignItems: "center", backgroundColor: "lightgrey" }}
      >
        <FoodCard menuData={menuData} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  hotels: {
    marginBottom: 10,
  },
  textInput: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    borderColor: "black",
    padding: 10,
    borderRadius: 10,
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "white",
    height: 50,
    elevation: 12.0,
    alignItems: "center",
  },
  search: {
    fontSize: 20,
    color: "grey",
  },
  imageView: {
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 10,
  },
  pressed: {
    opacity: 0.75,
  },
});
