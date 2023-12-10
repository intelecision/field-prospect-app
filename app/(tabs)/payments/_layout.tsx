import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const PaymentLayout = () => {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="index"
                options={{ headerShown: true, title: 'Payments' }}
            />
        </Stack>
    )
}

export default PaymentLayout

const styles = StyleSheet.create({})
