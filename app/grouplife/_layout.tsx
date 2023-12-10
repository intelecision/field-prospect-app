import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function GroupLifeLayout() {
    return (
        <Stack screenOptions={{ headerShown: true }}>
            <Stack.Screen
                name="index"
                options={{
                    headerTitle: 'My Insurance Company',
                    title: 'My Insurance Company',
                    headerBackTitle: 'Back',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontFamily: 'OpenSans',
                    },
                }}
            />
        </Stack>
    )
}
