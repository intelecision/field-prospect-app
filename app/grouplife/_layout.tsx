import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function GroupLifeLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: true,
                headerBackTitle: 'white',
                headerTitleStyle: {
                    fontFamily: 'OpenSans',
                    color: 'white',
                },
                headerTintColor: '#fff',
            }}
        >
            <Stack.Screen
                name="index"
                options={{
                    headerTitle: 'My Insurance Company',
                    title: 'My Insurance Company',
                }}
            />
            <Stack.Screen
                name="groupwizardscreen"
                options={{
                    headerTitle: 'Group Life',
                    title: 'Group Life',
                }}
            />
        </Stack>
    )
}
