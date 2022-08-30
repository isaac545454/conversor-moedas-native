import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity } from 'react-native';
import Conversor from './src/components'
import {useState } from 'react'
 
export default function App() {
  const [moedaA, setmoedaA] = useState('')
  const [moedaB, setmoedaB] = useState('')
  const [escolha, setEscolha] = useState(false)
  return (
    <View style={styles.container}>
     {escolha === false? (
      <View>
        <TouchableOpacity style={styles.areaBTN} onPress={()=>{setmoedaA('USD'), setmoedaB('BRL'), setEscolha(true)}}>
          <Text style={styles.textBTN}>dolar -> real</Text></TouchableOpacity>
        <TouchableOpacity style={styles.areaBTN} onPress={()=>{setmoedaA('BRL'), setmoedaB('USD'), setEscolha(true)}}>
          <Text style={styles.textBTN}>real -> dolar</Text></TouchableOpacity>
        <TouchableOpacity style={styles.areaBTN} onPress={()=>{setmoedaA('EUR'), setmoedaB('BRL'), setEscolha(true)}}>
          <Text style={styles.textBTN}>Euro -> real</Text></TouchableOpacity>
      </View>
     ) :
      ( <Conversor moedaA={moedaA} moedaB={moedaB} />)}
    
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  areaBTN: {
    margin: 20 ,
    backgroundColor: '#ff0000',
    borderRadius: 6

  },
  textBTN: {
    color: 'white',
    fontSize: 20,
    padding: 10,
   
  
  }
});
