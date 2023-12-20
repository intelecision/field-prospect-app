import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { TabRouter } from '@react-navigation/native'

const PaymentLayout = () => {
    return (
        <Stack screenOptions={{ headerShown: false, headerBackTitle: 'Back' }}>
            <Stack.Screen
                name="index"
                options={{ headerShown: true, title: 'Payments' }}
            />
            <Stack.Screen
                name="[history]"
                options={{ headerShown: true, title: 'Payment History' }}
            />
            <Stack.Screen
                name="outstanding"
                options={{
                    headerTitle: 'Outstanding',
                    headerShown: true,
                    title: 'Payments',
                    headerBackVisible: true,
                }}
            />
            <Stack.Screen
                name="paymentMethods"
                options={{ headerShown: true, title: 'Payment Methods XX' }}
            />
            <Stack.Screen
                name="collections"
                options={{ headerShown: true, title: 'Payments' }}
            />
            <Stack.Screen
                name="takePayment"
                options={{ headerShown: true, title: 'Payments' }}
            />
        </Stack>
    )
}

export default PaymentLayout

const styles = StyleSheet.create({})
