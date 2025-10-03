import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '../components/button';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Home Screen</Text>
            <Button title="Click Me" onPress={() => alert('Button Pressed!')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: '#333',
        fontWeight: 'bold',
    },
});