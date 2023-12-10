import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Text } from '../../../components/Themed'
import { Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import Button from '../../../components/Button'

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
const PaymentHome = () => {
    const [selectedItem, setSelectedItem] = React.useState<any>(null)
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
    const handleSelectedItem = (item: any) => {
        console.log('Item', item)
        if (item.id === selectedItem?.id) {
            setSelectedItem(null)
        } else {
            setSelectedItem(item)
        }
        console.log('After', selectedItem)
    }
    const getStatusText = (status: string) => {
        switch (status) {
            case 'paid':
                return 'Paid'
            case 'due':
                return 'Send Reminder'
            case 'failed':
                return 'Failed'
            default:
                return 'Paid'
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
                        fontFamily: 'OpenSans_700Bold',
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
            <View style={styles.container}>
                <View style={styles.content}>
                    <FlatList
                        data={collections}
                        extraData={selectedItem}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View
                                style={{
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#ccc',
                                }}
                            >
                                <TouchableOpacity
                                    onPress={() => handleSelectedItem(item)}
                                >
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            padding: 10,
                                            //borderBottomWidth: 1,
                                            //borderBottomColor: '#ccc',
                                        }}
                                    >
                                        <View>
                                            <Text
                                                style={{
                                                    fontSize: 16,
                                                    fontWeight: 'bold',
                                                }}
                                            >
                                                {item.name}
                                            </Text>
                                            <Text
                                                style={{
                                                    fontSize: 14,
                                                    color: '#666',
                                                }}
                                            >
                                                {item.dueDate}
                                            </Text>
                                            <View style={styles.row}>
                                                <Text style={{ margin: 4 }}>
                                                    Status
                                                </Text>
                                                <View
                                                    style={[
                                                        styles.sphere,
                                                        {
                                                            backgroundColor:
                                                                getStatusColor(
                                                                    item.status
                                                                ),
                                                        },
                                                    ]}
                                                >
                                                    <Text
                                                        style={{
                                                            fontSize: 9,
                                                            color: '#fff',
                                                        }}
                                                    >
                                                        {item.status?.toUpperCase()}
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>

                                        <View>
                                            <Text
                                                style={{
                                                    fontSize: 16,
                                                    fontWeight: 'bold',
                                                }}
                                            >
                                                GHS {item.amount}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                {selectedItem?.id === item.id &&
                                    item.status !== 'paid' && (
                                        <View
                                            style={{
                                                //flexDirection: 'row',
                                                //width: '80%',
                                                justifyContent: 'space-between',
                                                //alignItems: 'center',
                                            }}
                                        >
                                            <Button
                                                title="Request Payment"
                                                onPress={() => {
                                                    console.log('Pay')
                                                }}
                                            />
                                            {/*<Button
                                                title="send remider"
                                                onPress={() => {
                                                    console.log('Pay')
                                                }}
                                            />*/}
                                        </View>
                                    )}
                            </View>
                        )}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
            </View>
        </View>
    )
}

export default PaymentHome

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 20,
    },
    sphere: {
        minWidth: 50,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#00A3AD',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
})
