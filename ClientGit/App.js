import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';
import Cabecalho from './src/components/Cabecalho';
import { View, StyleSheet } from 'react-native';

export default function App() {
    return (
        <View style={styles.main}>
            <Cabecalho />
            <NavigationContainer>
                <Routes />
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
    }
})