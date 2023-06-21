import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function App() {
const [saldo, setSaldo] = useState(0);
const [inputValue, setInputValue] = useState('');

const adicionarValor = () => {
    const valor = parseFloat(inputValue);
    if (!isNaN(valor)) {
    setSaldo(saldo + valor);
    setInputValue('');
    }
};

const removerValor = () => {
    const valor = parseFloat(inputValue);
    if (!isNaN(valor)) {
    setSaldo(saldo - valor);
    setInputValue('');
    }
};

const handleInputChange = (text) => {
    setInputValue(text.replace(/[^0-9.]/g, ''));
};

return (
    <View style={styles.container}>
    <Text style={styles.saldo}>Saldo: R$ {saldo.toFixed(2)}</Text>
    <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={handleInputChange}
        keyboardType="numeric"
        placeholder="Digite um valor"
    />
    <TouchableOpacity style={styles.button} onPress={adicionarValor}>
        <Text style={styles.buttonText}>Adicionar Valor</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={removerValor}>
        <Text style={styles.buttonText}>Remover Valor</Text>
    </TouchableOpacity>
    <StatusBar style="auto" />
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
saldo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffd700',
},
input: {
    backgroundColor: '#fff',
    padding: 10,
    width: 200,
    marginBottom: 10,
    borderRadius: 5,
    textAlign: 'center',
},
button: {
    backgroundColor: '#ffd700',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
},
buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
},
});
