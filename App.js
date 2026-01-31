import React,{useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
  const [enteredvalue,setenteredvalue]=useState('');
  function goalipt(goal){
    console.log(goal);
    setenteredvalue(goal);
  }

  function setgoal(){
    console.log(enteredvalue);
  }
  return (
    <View style={styles.outercontainer}>
      <View style={styles.inputbox}>
        <TextInput style={styles.textbox} placeholder='Enter your goals'  value={enteredvalue} onChangeText={goalipt}/>
        <Button title='Add Goal' onPress={setgoal}/>
      </View>  
      <View style={styles.goallist}>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outercontainer:{
    flex:1,
    paddingTop:50,
    paddingHorizontal:16,
    
  },
  inputbox:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:24,
    paddingRight:10,
    borderBottomWidth:1,
    borderBottomColor:'black',
  },
  textbox:{
    borderWidth:1,
    borderColor:'black',
    padding:8,
    width:'75%',
    marginRight:8
  }
  ,
  goallist:{
    flex:3,
    paddingTop:10,
  }
});