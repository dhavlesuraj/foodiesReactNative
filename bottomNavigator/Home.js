import React,{useState} from 'react'
import { View,Text,Image, Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Hotels from '../hotels/Hotels';

export default function Home() {
  // const [text,setText]=useState("food");
  // const [img,setImg]=useState(true);

   const [toggle, setToggle] = useState(true);
   
   const toggleFunction = () => {
     setToggle(!toggle);
   };
  return (
    <>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Hotels />
        </View>
        <View
          style={{
            flex: 2,
            alignItems: "center",
            backgroundColor: "lightgrey",
          }}
        >
          <TouchableOpacity onPress={() => toggleFunction()}>
          {toggle ? <Image style={{ height: 100, width: 100 }} source={require("../Assets/istockphoto-1217760999-612x612.jpg")}/>: <Text>Show Image</Text>}
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
