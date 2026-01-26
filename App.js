import { Button, StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View>

      <View style={styles.top}></View>
      <Text style={styles.container}>TVK</Text>
      <View style={styles.bottom}></View>
   
    
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#808004',
    textAlign:'center',
    fontSize:80,
    padding:50,
    height:200,
  },
  top:{
    margin:0,
    borderWidth:10,
    borderTopWidth:300,
    borderColor:'red',
    backgroundColor:'red',
  },
  bottom:{
    marginTop:0,
    marginBottom:0,
    borderWidth:10,
    borderTopWidth:300,
    borderColor:'red',
    backgroundColor:'red',
  },
});
