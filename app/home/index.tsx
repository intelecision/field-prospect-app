import {
    StyleSheet,
    View,
    FlatList,
    TouchableOpacity,
    Image,
    SafeAreaView,
} from 'react-native'
import React from 'react'

import { AntDesign, Ionicons } from '@expo/vector-icons'
import { Stack, router, useNavigation } from 'expo-router'
import QuickActions from '../components/QuickActions'
import { StatusBar } from 'expo-status-bar'
import NewProspect from '../components/NewProspect'
import { Text } from '../../components/Themed'
import FloatingButton from '../components/FloatingButton'

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
                        title: 'Field Prospect',
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

                <View style={styles.content}>
                    <FlatList
                        data={prospect}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => {
                                    router.push('/moneycollection')
                                }}
                            >
                                <View style={styles.list}>
                                    <Ionicons
                                        name={item.iconName}
                                        size={24}
                                        color="#00A3AD"
                                    />
                                    <Text style={{ marginLeft: 10 }}>
                                        {item.name}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        //ListHeaderComponent={() => {
                        //    return (
                        //        <View style={{ marginBottom: 20 }}>
                        //            <QuickActions />
                        //        </View>
                        //    )
                        //}}
                    />
                </View>
                <FloatingButton
                    onPress={() => {
                        navigation.navigate('Modal')
                    }}
                />
                {/*<View style={styles.footer}>
                    <NewProspect
                        onNewProspect={() => router.push('/life')}
                        onMicroProspect={() => router.push('/micro')}
                        onGroupLife={() => router.push('/grouplife')}
                    />
                </View>*/}
            </View>
        </SafeAreaView>
    )
}

export default StartingView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        //backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        padding: 20,
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
