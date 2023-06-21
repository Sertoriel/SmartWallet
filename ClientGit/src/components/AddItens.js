import React, {forwardRef, useState} from "react";
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function AdicionarItem({ funcao }) {
    const [texto, setTexto] = useState('');

    const pegarMudanca = (val) => {
        setTexto(val);
    }

    return(
        <View>
            <TextInput
                style={styles.input}
                placeholder= "Nova Solicitação de Ação..."
                placeholderTextColor= '#ffd700'
                onChangeText={pegarMudanca}
                />
    
            <Button
                onPress={()=> funcao(texto)}
                title="Adicionar"
                color="#ffd700"
                />
                
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 5,
        paddingVertical: 6,
        borderBottomWidth:1,
        borderBottomColor: '#ddd',
        color: '#ffd700',
    },
})

