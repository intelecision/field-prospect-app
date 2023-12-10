import {
    StyleSheet,
    View,
    FlatList,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native'
import React from 'react'

import { AntDesign, Ionicons } from '@expo/vector-icons'
import { Stack, router, useNavigation } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import NewProspect from '../components/NewProspect'
import { Text } from '../../components/Themed'
import DashboardItem from '../components/DashboardItem'
import theme from '../../themes/theme'
import FloatingButton from '../components/FloatingButton'
import { ScrollView } from 'react-native-gesture-handler'

const prospect = [
    { name: 'My Prospect', value: 2, id: 1, iconName: 'md-star-outline' },

    { name: 'Task', value: 2, id: 4, iconName: 'md-star-outline' },
    { name: 'Follow ups', value: 2, id: 2, iconName: 'md-star-outline' },
    { name: 'Collection', value: 2, id: 3, iconName: 'alert-circle-outline' },
    { name: 'Help Center', value: 2, id: 5, iconName: 'md-library-outline' },
]

const StartingView = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={[styles.container]}>
            <View style={styles.container}>
                <StatusBar style="light" />
                <Stack.Screen
                    options={{
                        headerShown: true,
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontFamily: 'OpenSans',
                        },

                        headerTitle: 'Field Prospect',
                        title: 'Fields',
                        headerStyle: {
                            backgroundColor: '#00A3AD',
                        },

                        headerRight: () => (
                            <TouchableOpacity
                                onPress={() => {
                                    router.push('/modal')
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginRight: 20,
                                    }}
                                >
                                    <AntDesign
                                        name="plus"
                                        size={30}
                                        color="#fff"
                                    />
                                </View>
                            </TouchableOpacity>
                        ),
                    }}
                />
                <ScrollView style={styles.scrollContent}>
                    <View style={styles.content}>
                        <DashboardItem title="Outstanding Premiums" value="2">
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 20,
                                        fontFamily: 'OpenSans_700Bold',
                                        color: '#00A3AD',
                                    }}
                                >
                                    9799.00 GHS
                                </Text>
                                <Text style={{ fontSize: 14 }}>
                                    Outstanding Premiums to pay
                                </Text>
                            </View>
                            <View style={{ height: 40, width: '100%' }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        router.push('/moneycollection')
                                    }}
                                >
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            //marginRight: 20,
                                            backgroundColor:
                                                theme.colors.transparentRed2,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                //color: '#fff',
                                                fontSize: 16,
                                                fontFamily: 'OpenSans',
                                                padding: 10,
                                            }}
                                        >
                                            12 overdue
                                        </Text>
                                        <Text
                                            style={{
                                                //color: '#fff',
                                                fontSize: 16,
                                                fontFamily: 'OpenSans',
                                                padding: 10,
                                            }}
                                        >
                                            34200.00 GHS
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </DashboardItem>
                        <DashboardItem title="My Prospect" value="2" />
                    </View>
                    {/*<View style={styles.footer}>
                    <NewProspect
                        onNewProspect={() => router.push('/life')}
                        onMicroProspect={() => router.push('/micro')}
                        onGroupLife={() => router.push('/grouplife')}
                    />
                </View>*/}
                </ScrollView>
                {/*<View style={{ flex: 1, backgroundColor: 'red', bottom: 0 }}>
                    <FloatingButton
                        onPress={() => {
                            console.log('pressed')
                        }}
                    />
                </View>*/}
                <FloatingButton
                    onGroupPress={() => {
                        router.push('/grouplife')
                    }}
                    onPress={() => {
                        console.log('pressed')
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

export default StartingView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    content: {
        flex: 1,
        padding: 20,
    },
    scrollContent: {
        flex: 1,
    },
    header: {
        //backgroundColor: '#00A3AD',
        //height: 120,
        justifyContent: 'center',
        //alignItems: 'center',
    },
    list: {
        flexDirection: 'row',
        padding: 10,

        marginTop: 10,
        backgroundColor: '#fff',
        fontSize: 20,
        borderRadius: 10,
    },
    footer: {
        //backgroundColor: '#00A3AD',
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
