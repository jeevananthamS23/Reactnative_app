import React,{useState} from 'react';
import { StyleSheet,View,FlatList} from 'react-native';
import Goalitem from './components/Goalitem';
import Goalinput from './components/Goalinput';
export default function App() {

  const [goals,setgoals]=useState([]);


  function setgoal(enteredvalue){
    setgoals(currentgoals=>[...currentgoals,{text:enteredvalue,key:Math.random().toString()}]);
        
  }
  return (
    <View style={styles.outercontainer}>
           
       <Goalinput onhandler={setgoal}/>

       <View style={styles.goallist}>
               <FlatList data={goals} keyExtractor={(item,index)=>{return item.key}} renderItem={({item})=>{ 
                return <Goalitem text={item.text}/>;}}/>
        </View>
 
    </View>
   );
}

const styles = StyleSheet.create({
  outercontainer:{
    flex:1,
    paddingTop:50,
    paddingHorizontal:16,
    
  }
  ,
  goallist:{
    flex:3,
    paddingTop:10,
  },
 
});