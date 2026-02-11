import React from "react";
import { useState } from "react";
import { StyleSheet,View,TextInput,Button, Modal, Image } from "react-native";

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
 <Modal visible={props.visible} animationType="slide">
   <View style={styles.inputbox}>
    <Image source={require('../assets/Images/Target.jpg')} style={styles.image}/>
   <TextInput style={styles.textbox} placeholder='Enter your goals'  value={enteredvalue} onChangeText={goalipt}/>
   
   <View style={styles.buttoncontainer}>
       <View  style={styles.button}>
            <Button title='Add Goal'  onPress={addhandler}/>
       </View>

      <View  style={styles.button} >
          <Button title='Close' onPress={props.close}/>
      </View>

   </View>
  
   
 </View>
 </Modal>   

           
    ); 
}

export default Goalinput;

const styles=StyleSheet.create({
    inputbox:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:24,
    padding:20,
    paddingRight:10,
    // borderBottomWidth:1,
    // borderBottomColor:'black',
  },
  textbox:{
    borderWidth:1,
    borderColor:'black',
    alignContent:'center',
    padding:8,
    width:'100%',
    marginRight:10,
    fontSize:20,
  },
  image:{
    width:'100%',
    height:'61%',
  }
  ,
  buttoncontainer:{
    marginTop:10,
    flexDirection:'row',
  }
  ,
  button:{
    color:'white',
    borderColor:'black',
    fontSize:20,
    width:100,
    marginHorizontal:8
  }
})