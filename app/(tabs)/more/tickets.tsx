import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HelpScreen from './components/helpScreen'
import { Stack } from 'expo-router'

const TicketsScreen = () => {
    return (
        <HelpScreen canGoBack={true} handleSubmit={() => {}}>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text>TicketsScreen</Text>
            </View>
        </HelpScreen>
    )
}

export default TicketsScreen

const styles = StyleSheet.create({})
