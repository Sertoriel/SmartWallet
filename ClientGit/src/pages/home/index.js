import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
return (
    <View style={styles.container}>
        <View>
        <Image source={require('../../../assets/banklogo.png')} style={styles.logo} />
        </View>
    <Text style={styles.title}>Bem-vindo ao SmartWallet</Text>
    <Text style={styles.subtitle}>Seu banco de confiança</Text>
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
logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
},
title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ffd700', // Tom dourado
},
subtitle: {
    fontSize: 16,
    color: '#ffd700', // Tom dourado
},
});