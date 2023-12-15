import { StyleSheet, View } from 'react-native'
import React from 'react'
import Button from '../../components/Button'
import { Text } from '../../components/Themed'
import { Stack, router } from 'expo-router'
import { AntDesign, Ionicons } from '@expo/vector-icons'

type Props = {}

const CompletedApplication = (props: Props) => {
    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#00A3AD',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerTitleAlign: 'center',
                    headerBackVisible: true,
                    headerBackTitleVisible: false,
                    headerRight: () => (
                        <Ionicons
                            name="send"
                            size={24}
                            color="#fff"
                            style={{ marginRight: 20 }}
                        />
                    ),
                }}
            />
            <View style={styles.content}>
                <View style={styles.paragraph}>
                    <Text style={styles.text}>
                        You will receive a confirmation email shortly.
                    </Text>
                </View>
                <View style={styles.paragraph}>
                    <AntDesign name="message1" size={32} color="black" />
                    <Text style={styles.text}>
                        How was your experience with the agent today? You will
                        receive an SMS message to rate your experience.
                    </Text>
                </View>
                <Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: 24,
                        textAlign: 'center',
                    }}
                >
                    Thank you for completing the application
                </Text>
            </View>
            <View style={{ height: '40%' }}>
                <Button
                    title="Send to Office"
                    onPress={() => {
                        router.push('/(tabs)')
                    }}
                />
            </View>
        </View>
    )
}

export default CompletedApplication

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'justify',
    },
})
