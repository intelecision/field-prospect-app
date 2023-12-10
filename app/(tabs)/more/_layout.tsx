import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const PaymentLayout = () => {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="index"
                options={{ headerShown: true, headerTitle: 'More' }}
            />
            <Stack.Screen
                name="notifications"
                options={{ headerShown: true, headerTitle: 'More' }}
            />
        </Stack>
    )
}

export default PaymentLayout

const styles = StyleSheet.create({})
