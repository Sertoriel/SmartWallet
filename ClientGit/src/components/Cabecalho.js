import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Cabecalho() {
    return (
        <View style={styles.cabecalho}>
            <Text style={styles.titulo}>SmartWallet</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cabecalho: {
        justifyContent: 'center',
        alignContent: 'center',
        height: 80,
        padding: 5,
        backgroundColor: '#2b273c',
    },

    titulo: {
        textAlign: 'center',
        color: '#ffd700',
        fontSize: 25,
        fontWeight: 'bold',
    },
});