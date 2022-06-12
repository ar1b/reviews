import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

export default function Home({navigation}) {

    const pressHandler = () => {
        //navigation.navigate('Reviews')
        navigation.push('Reviews')
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titletext}>Home Screen</Text>
            <Button title="Review Page" onPress={pressHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        alignItems: 'center',
    },
    titletext:  {
        fontFamily: 'onest-black',
        fontSize: 18,
    }
})