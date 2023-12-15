import { Pressable, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { Text } from '../../components/Themed'
import { Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const collections = [
    {
        id: 1,
        name: 'Rita Mensah',
        amount: 300,
        dueDate: '16/11/2023',
        status: 'paid',
    },
    {
        id: 2,
        name: 'George Ofori',
        amount: 500,
        dueDate: '16/11/2023',
        status: 'paid',
    },
    {
        id: 3,
        name: 'Akua Menu',
        amount: 300,
        dueDate: '16/11/2023',
        status: 'failed',
    },
    {
        id: 4,
        name: 'Nama Ampofo',
        amount: 250,
        dueDate: '16/11/2023',
        status: 'due',
    },
    {
        id: 5,
        name: 'Kwame Agbodza',
        amount: 100,
        dueDate: '16/11/2023',
        status: 'paid',
    },
    {
        id: 6,
        name: 'Margaret Amoah',
        amount: 200,
        dueDate: '16/11/2023',
        status: 'paid',
    },
    {
        id: 7,
        name: 'Kofi Adu-Gyamfi',
        amount: 40,
        dueDate: '16/11/2023',
        status: 'due',
    },
    {
        id: 8,
        name: 'Kwame Adu',
        amount: 60,
        dueDate: '16/11/2023',
        status: 'paid',
    },
    {
        id: 9,
        name: 'Abena Akoto',
        amount: 40,
        dueDate: '16/11/2023',
        status: 'due',
    },
    {
        id: 10,
        name: 'Yaa Asantewaa',
        amount: 50,
        dueDate: '16/11/2023',
        status: 'paid',
    },
]
const MoneyCollection = () => {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'paid':
                return '#00A3AD'
            case 'due':
                return '#FFC107'
            case 'failed':
                return '#F44336'
            default:
                return '#00A3AD'
        }
    }
    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: 'Money Collection',
                    headerBackTitle: 'Back',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontFamily: 'OpenSans',
                    },
                    headerTintColor: '#000',
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => {
                                console.log('Filter')
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginRight: 20,
                                }}
                            >
                                <Ionicons
                                    name="filter-outline"
                                    size={24}
                                    color="#000"
                                    style={{ marginLeft: 10 }}
                                />
                            </View>
                        </TouchableOpacity>
                    ),
                }}
            />
            <View style={styles.content}>
                <FlatList
                    data={collections}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: 10,
                                borderBottomWidth: 1,
                                borderBottomColor: '#ccc',
                            }}
                        >
                            <View>
                                <Text
                                    style={{ fontSize: 16, fontWeight: 'bold' }}
                                >
                                    {item.name}
                                </Text>
                                <Text style={{ fontSize: 14, color: '#666' }}>
                                    {item.dueDate}
                                </Text>
                                <View
                                    style={[
                                        styles.sphere,
                                        {
                                            backgroundColor: getStatusColor(
                                                item.status
                                            ),
                                        },
                                    ]}
                                >
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            color: '#fff',
                                        }}
                                    >
                                        {item.status?.toUpperCase()}
                                    </Text>
                                </View>
                            </View>
                            <View>
                                <Text
                                    style={{ fontSize: 16, fontWeight: 'bold' }}
                                >
                                    GHS {item.amount}
                                </Text>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </View>
    )
}

export default MoneyCollection

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 20,
    },
    sphere: {
        maxWidth: 50,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#00A3AD',
    },
})
