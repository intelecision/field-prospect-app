import { SafeAreaView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { Text } from '../../../components/Themed'
import { Stack } from 'expo-router'

type Prospect = {
    id: number
    name: string
    value: number
    iconName: string
    product: string
    status: ProspectStatusType
}
type ProspectStatusType = 'Pending' | 'Completed' | 'Rejected' | 'Approved'

const IndexPage = () => {
    const [prospects, setProspects] = useState<Prospect[]>([
        {
            id: 1,
            name: 'Frank Kwame Nyame',
            value: 10000000,
            iconName: 'user',
            status: 'Pending',
            product: 'Term Life Insurance',
        },
        {
            id: 2,
            name: 'Jane Yeboah',
            value: 3000000,
            iconName: 'user',
            status: 'Rejected',
            product: 'Whole Life Insurance',
        },
        {
            id: 3,
            name: 'Peter Mensah',
            value: 500000,
            iconName: 'user',
            status: 'Approved',
            product: 'Endowment Policy',
        },
        {
            id: 4,
            name: 'Kweku Opong',
            value: 8000000,
            iconName: 'user',
            status: 'Completed',
            product: 'Group Life Policy',
        },
    ])
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Pending':
                return '#FFC107'
            case 'Completed':
                return '#4CAF50'
            case 'Rejected':
                return '#F44336'
            case 'Approved':
                return '#4CAF50'
            default:
                return '#FFC107'
        }
    }
    const renderHeader = () => {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>My Prospects</Text>
            </View>
        )
    }
    const renderItem = ({ item }: { item: Prospect }) => {
        return (
            <View style={styles.item}>
                <Text style={styles.name}>{item.name}</Text>
                <Text>
                    {item.product}
                    <Text>
                        {' '}
                        {item.value.toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'GHS',
                        })}
                    </Text>
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: 10,
                    }}
                >
                    <Text style={{ fontSize: 12 }}>Status: </Text>
                    <View
                        style={[
                            styles.pendingStatus,
                            { backgroundColor: getStatusColor(item.status) },
                        ]}
                    >
                        <Text style={{ fontSize: 12, color: '#fff' }}>
                            {item.status}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={[styles.container]}>
            <Stack.Screen
                options={{
                    headerTitle: 'Prospects',
                    headerTransparent: true,
                    title: 'My Prospects',
                    headerShown: true,
                }}
            />
            <View style={styles.content}>
                <FlatList
                    data={prospects}
                    renderItem={renderItem}
                    ListHeaderComponent={renderHeader}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </SafeAreaView>
    )
}

export default IndexPage

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f8f8fa' },
    content: {
        flex: 1,
        //backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    item: {
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 4,
        borderRadius: 6,
        borderWidth: 0.5,
        borderColor: '#e0e0e0',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    name: {
        fontSize: 16,
    },
    statusColor: {
        color: '#00A3AD',
    },
    pendingStatus: {
        borderRadius: 6,
        height: 20,
        width: 70,
        backgroundColor: '#FFC107',
        justifyContent: 'center',
        alignItems: 'center',
    },
    completedStatus: {
        height: 20,
        color: '#4CAF50',
    },
    rejectedStatus: {
        color: '#F44336',
    },
    approvedStatus: {
        color: '#4CAF50',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})
