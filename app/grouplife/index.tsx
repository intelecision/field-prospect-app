import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import GroupStepOne from './components/GroupStepOne'
import GroupDetails from './components/GroupDetails'
import { Stack } from 'expo-router'
import PolicyRequirements from './components/PolicyRequirements'

const GroupLifeScreen = () => {
    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontFamily: 'OpenSans',
                    },

                    headerTitle: 'Group Life',
                    title: 'Group Life',
                    headerStyle: {
                        backgroundColor: '#00A3AD',
                    },
                }}
            />
            <ScrollView style={styles.content}>
                <View style={styles.content}>
                    <GroupStepOne />

                    <GroupDetails />
                    <PolicyRequirements />
                </View>
            </ScrollView>
        </View>
    )
}

export default GroupLifeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        //padding: 10,
        //    alignItems: 'center',
        //    justifyContent: 'center',
    },
})
