import React,{useState} from 'react';
import { StyleSheet,View,FlatList,Button} from 'react-native';
import Goalitem from './components/Goalitem';
import Goalinput from './components/Goalinput';
export default function App() {

  const [goals,setgoals]=useState([]);
  const [Modalvisible,setModalvisible]=useState(false);

  function setgoal(enteredvalue){
    setgoals(currentgoals=>[...currentgoals,{text:enteredvalue,key:Math.random().toString()}]);
        
  }

  function modalvisible(){
    setModalvisible(true);
  }

  function modalclose(){
    setModalvisible(false);
  }

  function onDelete(id){
   console.log("id"+id);
    setgoals((goals)=>{
      return goals.filter((goal)=>goal.key!==id);
    });
  }
  return (
    <View style={styles.outercontainer}>
      <View style={styles.modalbtn}><Button title='Click Me' color="red" onPress={modalvisible}/></View>
      <Goalinput visible={ Modalvisible} close={modalclose}  onhandler={setgoal}/>

       <View style={styles.goallist}>
               <FlatList data={goals} keyExtractor={(item,index)=>{return item.key}} renderItem={({item})=>{ 
                return <Goalitem text={item.text} id={item.key} delete={onDelete}/>;}}/>
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
  modalbtn:{
    borderWidth:2,
    borderColor:'black',
    borderRadius:2,
  }
 
});