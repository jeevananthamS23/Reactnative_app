import React,{useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View,ScrollView, FlatList} from 'react-native';

export default function App() {
  const [enteredvalue,setenteredvalue]=useState('');
  const [goals,setgoals]=useState([]);
  function goalipt(goal){
    setenteredvalue(goal);

  }

  function setgoal(){
    setgoals(currentgoals=>[...currentgoals,{text:enteredvalue,key:Math.random().toString()}]);
        setenteredvalue('');
  }
  return (
    <View style={styles.outercontainer}>
           <View style={styles.inputbox}>
                         <TextInput style={styles.textbox} placeholder='Enter your goals'  value={enteredvalue} onChangeText={goalipt}/>
                         <Button title='Add Goal' onPress={setgoal}/>
          </View>  

       <View style={styles.goallist}>
               <FlatList data={goals} keyExtractor={(item,index)=>{return item.key}} renderItem={({item})=><View style={styles.goalitem}><Text style={styles.goaltext}>{item.text}</Text></View>}/>
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
    borderBottomColor:'silver',
  },
  textbox:{
    borderWidth:1,
    borderColor:'silver',
    padding:8,
    width:'75%',
    marginRight:8
  }
  ,
  goallist:{
    flex:3,
    paddingTop:10,
  },
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
});