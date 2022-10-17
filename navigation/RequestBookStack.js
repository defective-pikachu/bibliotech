import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import BookCard from './components/BookCard';
import Home from './components/HomeScreen';
const bookCard = 'Book Card'
const home = 'Home';
const Stack = createNativeStackNavigator();
export const RequestBookstack = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen
                options={{ headerShown: false }}
                name={home} component={Home}

            />

            <Stack.Screen
                options={{ headerShown: false }}
                name={bookCard} component={BookCard}
            />

        </Stack.Navigator>

    )
}

export default RequestBookstack