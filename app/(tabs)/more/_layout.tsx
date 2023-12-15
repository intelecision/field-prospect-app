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

            <Stack.Screen
                name="helpcenter"
                options={{
                    headerTitle: 'Help Center',
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="faq"
                options={{
                    headerTitle: 'Help Center',
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="tickets"
                options={{ headerTitle: 'Tickets', headerShown: false }}
            />
            <Stack.Screen
                name="helpcenterdetails"
                options={{
                    headerTitle: 'Help Center Details',
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name="knowledgeBase"
                options={{
                    headerTitle: 'Knowledge Base',
                    headerShown: false,
                }}
            />
        </Stack>
    )
}

export default PaymentLayout

const styles = StyleSheet.create({})
