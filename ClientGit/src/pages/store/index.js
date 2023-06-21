import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Axios from "axios";
import { FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import Tranzacoes from "../../components/Tranzacoes";
import AddItens from "../../components/AddItens";

export default function App() {

const[lista, setLista] = useState([
    {texto: "Investimento em ações", key: '1'},
    {texto: "Fundos de investimento", key: '2'},
    {texto: "Investimento em ações", key: '3'},
]);


//useEffect(() =>{
  //  Axios.get("http://192.168.1.108:3001/itens").then(
    //    (response) => {
      //      setLista(response.data)
        //}
   // )
//}, [lista])

const submeterInformacaodb = (texto) => {
    //Código de teste Create DB
}

const apertarItem = (key) => {
    setLista(
        (prevLista) =>{
            return prevLista.filter(texto => texto.key != key);
        }
    )
}

const submeterInformacao = (texto) => {
    Axios.post ("http://192.168.1.108:3001/item", {item: texto})
    setLista((prevLista) => {
        return [
            {texto: texto, key: Math.random().toString()},
            ...prevLista
        ];
    })
}


return (
    <View style={styles.container}>
        <View style={styles.conteudo}>

        <Text style={styles.title}>
            Lista de Ações
        </Text>
        <Text style={styles.subtitle}>
            Solicite suas Ações Aqui!
        </Text>

            <AddItens funcao={submeterInformacao} />

            <View>
                <FlatList
                    data={lista}
                    renderItem={({ item })=> (
                        <Tranzacoes props={item} funcao={apertarItem}/>
                    )}
                />
            </View>
        </View>
    <StatusBar style="auto" />
    </View>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#000', // Background escuro
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
},
conteudo:{
    padding: 40,
    alignItems:'center',
},
title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 100,
    color: '#ffd700', // Tom dourado
},
subtitle: {
    fontSize: 10,
    color: '#ffd700', // Tom dourado
    marginBottom: 25,
},
});