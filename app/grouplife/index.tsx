import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import GroupStepOne from './components/GroupStepOne'
import GroupDetails from './components/GroupDetails'
import { Stack, router } from 'expo-router'
import PolicyRequirements from './components/PolicyRequirements'
import NavigationBar from '../../components/NavigationBar'

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
            {/*<ScrollView style={styles.scrollView}>*/}
            <View style={styles.content}>
                <Text style={{ fontSize: 30 }}>
                    Introduction Text goes here
                </Text>
            </View>
            {/*</ScrollView>*/}
            <View style={{ height: 120, padding: 10 }}>
                <NavigationBar
                    enableBackButton
                    enableNextButton={true}
                    onBackButtonPress={() => router.back()}
                    onNextButtonPress={() => {
                        router.push('/grouplife/groupwizardscreen')
                    }}
                />
            </View>
        </View>
    )
}

export default GroupLifeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollView: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
