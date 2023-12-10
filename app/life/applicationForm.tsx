import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../../components/Button'
import { router } from 'expo-router'
import Screen from './components/Screen'

const ApplicationForm = () => {
    return (
        <Screen
            heading="Application Form"
            handleCancel={() => router.push('/(start)')}
        >
            <View style={styles.container}>
                <View style={styles.container}>
                    <Text>Digital Application </Text>
                </View>
                <View style={{ height: 150, width: '80%' }}>
                    <Button
                        title="Next"
                        onPress={() => {
                            router.push('/life/paymentMandate')
                        }}
                    />
                </View>
            </View>
        </Screen>
    )
}

export default ApplicationForm

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 1,
    },
})
