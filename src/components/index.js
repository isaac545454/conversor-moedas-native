import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import React, {useState, useEffect} from 'react'
import api from '../services/api'
//convert?q=USD_BRL&compact=ultra&apiKey=7c5ef455b88d735bc6ad


export default function index({moedaA, moedaB}) {
    const [moedaA2, setmoedaA2] = useState(moedaA)
    const [moedaB2, setmoedaB2] = useState(moedaB)
    const [moedaB_valor, setmoedaB_valor] = useState(0)
    const [valor, setValor] = useState(0)

    const converter =async ()=>{
      let de_para = moedaA + "_" + moedaB
      const response = await api.get(`convert?q=${de_para}&compact=ultra&apiKey=`)
      let  cotacao = response.data[de_para]
      let resultado = (cotacao * moedaB_valor)
      setValor(resultado)
      Keyboard.dismiss()
    }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{moedaA} para {moedaB}</Text>
      <TextInput 
      placeholder='valor a ser convertido'
      style={styles.areaInput}
      onChangeText={(moedaB_valor)=>setmoedaB_valor(moedaB_valor)}
      keyboardType="numeric"
      />
      <TouchableOpacity style={styles.btnArea} onPress={()=>converter()}>
        <Text style={styles.btnText}>Converter</Text>
      </TouchableOpacity>
      <Text style={styles.valorConvertido}>
        {valor === 0 ? <></> : valor.toFixed(2)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo:{
       fontSize: 30,
       fontWeight: 'bold',
       color: 'white'
    },
    areaInput: {
        width: 280,
        height: 45,
        backgroundColor: '#ccc',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 20,
        color: "#",
        borderRadius: 6

    },
    btnArea: {
      width: 150,
      height: 45,
      backgroundColor: '#ff0000',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20
    },
    btnText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    },
    valorConvertido: {
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 20
    }
})