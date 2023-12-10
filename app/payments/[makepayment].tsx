import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Route = () => {
    const paymentMethod = useLocalSearchParams<{
        method: string
        image: any
    }>()
    return (
        <View>
            <Text>payment {paymentMethod.method}</Text>
        </View>
    )
}

export default Route

const styles = StyleSheet.create({})
