import React from "react";
import { useState } from "react";
import { StyleSheet,View,TextInput,Button } from "react-native";

function Goalinput(props){

    const [enteredvalue,setenteredvalue]=useState('');

    function goalipt(goal){
           setenteredvalue(goal);
    }

    function addhandler(){
        props.onhandler(enteredvalue);
        setenteredvalue('');
    }

    return(      
    
 <View style={styles.inputbox}>
   <TextInput style={styles.textbox} placeholder='Enter your goals'  value={enteredvalue} onChangeText={goalipt}/>
   <Button title='Add Goal' onPress={addhandler}/>
 </View>
           
    ); 
}

export default Goalinput;

const styles=StyleSheet.create({
    inputbox:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:24,
    paddingRight:10,
    borderBottomWidth:1,
    borderBottomColor:'silver',
  },
  textbox:{
    borderWidth:1,
    borderColor:'silver',
    padding:8,
    width:'75%',
    marginRight:8
  }
})