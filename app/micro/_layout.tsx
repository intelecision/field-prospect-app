import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function MicroStackLayout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'crimson',
                },
                headerTintColor: '#fff',
                headerShown: false,
                //    headerBackVisible: true,
            }}
        >
            <Stack.Screen
                name="index"
                options={{
                    headerTitle: 'Sales Pitch',
                    //headerBackVisible: true,
                }}
            />
            <Stack.Screen
                name="microprospect"
                options={{
                    headerTitle: 'Micro Prospect',
                    //headerShown: false,
                }}
            />
        </Stack>
    )
}
