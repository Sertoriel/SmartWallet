import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function ItensListados({props, funcao}) {
    return(
        <TouchableOpacity onPress={()=> funcao(props.key)}>
            <View style={styles.postagem}>
                <MaterialIcons name='delete' size={15} color={'gray'}/>
                <Text style={styles.itemTexto}>{props.texto}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    postagem: {
        padding: 15,
        marginTop: 10,
        borderColor: '#ffd700',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection:'row',
    },

    itemTexto: {
        marginLeft: 30,
        fontWeight: 'bold',
        color: '#ffd700'
    },
})