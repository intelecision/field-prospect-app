import {
    StyleSheet,
    View,
    TouchableOpacity,
    SafeAreaView,
    Dimensions,
} from 'react-native'
import React from 'react'

import { Stack, router, useNavigation } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Text } from '../../components/Themed'
import DashboardItem from '../components/DashboardItem'
import theme from '../../themes/theme'
import FloatingButton from '../components/FloatingButton'
import { ScrollView } from 'react-native-gesture-handler'
import PieChartComponent from '../components/charts/PieChart'
import { BarChart, LineChart } from 'react-native-chart-kit'

const prospect = [
    { name: 'My Prospect', value: 2, id: 1, iconName: 'md-star-outline' },

    { name: 'Task', value: 2, id: 4, iconName: 'md-star-outline' },
    { name: 'Follow ups', value: 2, id: 2, iconName: 'md-star-outline' },
    { name: 'Collection', value: 2, id: 3, iconName: 'alert-circle-outline' },
    { name: 'Help Center', value: 2, id: 5, iconName: 'md-library-outline' },
]
const myData = [
    {
        title: 'One',
        value: 10,
        color: '#E38627',
    },
    {
        title: 'Two',
        value: 15,
        color: '#C13C37',
    },
    {
        title: 'Three',
        value: 20,
        color: '#6A2135',
    },
]
const StartingView = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(255, 65, 224, ${opacity})`, // optional
                strokeWidth: 2, // optional
            },
        ],
        legend: ['Rainy Days'], // optional
    }
    const screenWidth = Dimensions.get('window').width
    const graphStyle = {
        marginVertical: 8,
        borderRadius: 16,
    }
    const chartConfig = {
        backgroundColor: '#e26a00',
        backgroundGradientFrom: '#fff',
        backgroundGradientTo: '#fff',
        backgroundGradientFromOpacity: 0,

        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional
        avoidFalseZero: true,
    }
    return (
        <SafeAreaView style={[styles.container]}>
            <View style={styles.container}>
                <StatusBar style="light" />
                <Stack.Screen
                    options={{
                        headerShown: true,
                        headerTintColor: '#000',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontFamily: 'OpenSans_700Bold',
                        },

                        headerTitle: 'Field Prospect',
                        title: 'Dashboard',
                        headerStyle: {
                            //backgroundColor: '#fff',
                            //backgroundColor: '#00A3AD',
                            height: 120,
                        },

                        headerLeft: () => (
                            <TouchableOpacity
                                onPress={() => {
                                    router.push('/modal')
                                }}
                            >
                                <View
                                    style={{
                                        height: 40,
                                        width: 40,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginLeft: 20,
                                        borderColor: '#00A3AD',
                                        borderWidth: 1,
                                        borderRadius: 20,
                                        backgroundColor: '#00A3AD',
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontFamily: 'OpenSans_700Bold',
                                            fontSize: 20,
                                            color: '#fff',
                                        }}
                                    >
                                        JA
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ),
                    }}
                />
                <ScrollView style={styles.scrollContent}>
                    <View style={styles.content}>
                        <DashboardItem title="Outstanding Premiums" value="12">
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
                                    1979.00 GHS
                                </Text>
                                <Text style={{ fontSize: 14 }}>
                                    Outstanding Premiums to pay
                                </Text>
                            </View>
                            <View style={{ height: 40, width: '100%' }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        router.push(
                                            '/(tabs)/payments/outstanding'
                                        )
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
                                            732.00 GHS
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </DashboardItem>
                        <DashboardItem title="My Prospect" value="12">
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 30,
                                        fontFamily: 'OpenSans_700Bold',
                                        color: '#00A3AD',
                                    }}
                                >
                                    12
                                </Text>
                                <Text style={{ fontSize: 14 }}>
                                    Prospects to follow up
                                </Text>
                            </View>
                        </DashboardItem>
                        <DashboardItem title="Performance matrix" value="12">
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <PieChartComponent />
                            </View>
                        </DashboardItem>
                        <DashboardItem title="Performance" value="12">
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            ></View>
                        </DashboardItem>
                    </View>
                </ScrollView>

                <FloatingButton
                    onGroupProspectPress={() => {
                        router.push('/grouplife')
                    }}
                    onNewProspect={() => {
                        router.push('/life')
                    }}
                    onMicroProspectPress={() => {
                        router.push('/micro')
                    }}
                />
            </View>
            <StatusBar style="dark" />
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
