import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from './components/Screen'

import { router } from 'expo-router'
import NavigationBar from '../../components/NavigationBar'
import Button from '../../components/Button'

const PaymentMandate = () => {
    return (
        <>
            <Screen
                heading="Payment Mandate"
                handleCancel={() => router.push('/(tabs)')}
            >
                <View style={styles.content}>
                    <View style={styles.paragraph}>
                        <Text>
                            How would you like to make your monthly premium
                            payments?
                        </Text>
                    </View>
                    <View style={styles.paragraph}>
                        <Text>
                            Direct Debit (Please complete the Direct Debit form
                            on the next screen)
                        </Text>
                    </View>
                    <View style={styles.paragraph}>
                        <Text>
                            Mobile Money (Please complete the form on the next
                            screen)
                        </Text>
                    </View>
                    <View style={styles.paragraph}>
                        <Text>
                            Standing Order (Please complete the form on the next
                            screen)
                        </Text>
                    </View>
                </View>
            </Screen>
            <View
                style={{
                    height: 150,
                    backgroundColor: '#fff',
                    //width: '80%',
                    //justifyContent: 'center',
                    //alignItems: 'center',
                }}
            >
                <Button
                    title="Next"
                    onPress={() => {
                        router.push('/life/completedApplication')
                    }}
                />
            </View>
        </>
    )
}

export default PaymentMandate

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})
