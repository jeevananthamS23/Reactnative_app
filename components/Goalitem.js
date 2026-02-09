import React from "react";
import { StyleSheet,View ,Text,Pressable} from "react-native";

function Goalitem(props){
function dlt(){
  props.delete(props.id);
}
     return (
        <Pressable android_ripple={{color:'orange',borderless:false}} onPress={dlt}>

             <View style={styles.goalitem}>
               <Text style={styles.goaltext}>{props.text}</Text>
             </View>

        </Pressable>
     
     );
}
export default Goalitem;

const styles=StyleSheet.create({
    goalitem:{
    margin:8,
    padding:10,
    borderWidth:2,
    borderColor:'black',
    borderRadius:10,
    backgroundColor:'blue',
    shadowColor:'white',
  },
  goaltext:{
    fontSize:20,
    color:'white',
  }
})