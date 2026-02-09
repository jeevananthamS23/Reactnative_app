import React from "react";
import { StyleSheet,View ,Text,} from "react-native";

function Goalitem({text}){
   console.log(text);
     return (
       <View style={styles.goalitem}>
     
        <Text style={styles.goaltext}>{text}</Text>
        </View>
     );
}
export default Goalitem;

const styles=StyleSheet.create({
    goalitem:{
    margin:8,
    padding:10,
    borderWidth:2,
    borderColor:'silver',
    borderRadius:10,
    backgroundColor:'skyblue',
    shadowColor:'white',
  },
  goaltext:{
    color:'black',
  }
})