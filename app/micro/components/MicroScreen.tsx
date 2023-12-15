import {
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'

type Props = {
    heading: string
    children: React.ReactNode
    onCancel?: () => void
}

const MicroScreen = ({ heading, children, onCancel: handleCancel }: Props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Stack.Screen
                    options={{
                        title: 'Micro Insurance',

                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        headerTitleAlign: 'center',
                        headerShown: true,
                        headerBackVisible: false,

                        headerRight: () => (
                            <Ionicons
                                name="close-outline"
                                size={32}
                                color="white"
                                style={{ marginRight: 20 }}
                                onPress={handleCancel}
                            />
                        ),
                    }}
                />

                <View
                    style={[
                        {
                            justifyContent: 'center',
                            backgroundColor: '#00A3AD',
                            alignItems: 'center',
                            minHeight: 60,
                        },
                    ]}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            //fontWeight: '700',
                            justifyContent: 'center',
                            color: '#fff',
                        }}
                    >
                        {heading}
                    </Text>
                </View>

                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >
                    <View style={styles.content}>{children}</View>
                </KeyboardAvoidingView>
            </View>
            <StatusBar style="light" />
        </SafeAreaView>
    )
}

export default MicroScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        //padding: 20,
    },
})
