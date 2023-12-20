import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from './../../../components/Themed'
import { AntDesign } from '@expo/vector-icons'
import { useLocalSearchParams } from 'expo-router'

const history = [
    {
        id: 1,
        date: '2021-01-01',
        amount: 100,
        forPeriod: '2021-01-01 - 2021-01-31',
    },
    {
        id: 2,
        date: '2021-01-02',
        amount: 200,
        forPeriod: '2021-01-01 - 2021-01-31',
    },
    {
        id: 3,
        date: '2021-01-03',
        amount: 300,
        forPeriod: '2021-01-01 - 2021-01-31',
    },
    {
        id: 4,
        date: '2021-01-04',
        amount: 400,
        forPeriod: '2021-01-01 - 2021-01-31',
    },
    {
        id: 5,
        date: '2021-01-05',
        amount: 500,
        forPeriod: '2021-01-01 - 2021-01-31',
    },
    {
        id: 6,
        date: '2021-01-06',
        amount: 600,
        forPeriod: '2021-01-01 - 2021-01-31',
    },
    {
        id: 7,
        date: '2021-01-07',
        amount: 700,
        forPeriod: '2021-01-01 - 2021-01-31',
    },
    {
        id: 8,
        date: '2021-01-08',
        amount: 800,
        forPeriod: '2021-01-01 - 2021-01-31',
    },
    {
        id: 9,
        date: '2021-01-09',
        amount: 900,
        forPeriod: '2021-01-01 - 2021-01-31',
    },
    {
        id: 10,
        date: '2021-01-10',
        amount: 1000,
        forPeriod: '2021-01-01 - 2021-01-31',
    },
    {
        id: 11,
        date: '2021-01-11',
        amount: 1100,
        forPeriod: '2021-01-01 - 2021-01-31',
    },
    {
        id: 12,
        date: '2021-01-12',
        amount: 1200,
        forPeriod: '2021-01-01 - 2021-01-31',
    },
    {
        id: 13,
        date: '2021-01-13',
        amount: 1300,
        forPeriod: '2021-01-01 - 2021-01-31',
    },
    {
        id: 14,
        date: '2021-01-14',
        amount: 1400,
        forPeriod: '2021-01-01 - 2021-01-31',
    },
    {
        id: 15,
        date: '2021-01-15',
        amount: 1500,
        forPeriod: '2021-01-01 - 2021-01-31',
    },
    {
        id: 16,
        date: '2021-01-16',
        amount: 1600,
        forPeriod: '2021-01-01 - 2021-01-31',
    },
    {
        id: 17,
        date: '2021-01-17',
        amount: 1700,
        forPeriod: '2021-01-01 - 2021-01-31',
    },
    {
        id: 18,
        date: '2021-01-18',
        amount: 1800,
        forPeriod: '2021-01-01 - 2021-01-31',
    },
    {
        id: 19,
        date: '2021-01-19',
        amount: 1900,
        forPeriod: '2021-01-01 - 2021-01-31',
    },
    {
        id: 20,
        date: '2021-01-20',
        amount: 2000,
        forPeriod: '2021-01-01 - 2021-01-31',
    },
    {
        id: 21,
        date: '2021-01-21',
        amount: 2100,
        forPeriod: '2021-01-01 - 2021-01-31',
    },
    {
        id: 22,
        date: '2021-01-22',
        amount: 2200,
        forPeriod: '2021-01-01 - 2021-01-31',
    },
    {
        id: 23,
        date: '2021-01-23',
        amount: 2300,
        forPeriod: '2021-01-01 - 2021-01-31',
    },
    {
        id: 24,
        date: '2021-01-24',
        amount: 2400,
        forPeriod: '2021-01-01 - 2021-01-31',
    },
    {
        id: 25,
        date: '2021-01-25',
        amount: 2500,
        forPeriod: '2021-01-01 - 2021-01-31',
    },
    {
        id: 26,
        date: '2021-01-26',
        amount: 2600,
        forPeriod: '2021-01-01 - 2021-01-31',
    },
    {
        id: 27,
        date: '2021-01-27',
        amount: 2700,
        forPeriod: '2021-01-01 - 2021-01-31',
    },
]
const PaymentHistory = () => {
    const params = useLocalSearchParams()
    const getMonth = (date: Date) => {
        const month = date.getMonth()
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ]
        return months[month]
    }
    console.log(params?.history)
    const renderItems = ({ item }: { item: any }) => (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                borderBottomColor: '#d3d3e3',
                paddingVertical: 10,
            }}
        >
            <View>
                <Text>{getMonth(new Date(item.date + 1))}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text>GHS {item.amount}</Text>
                </View>
            </View>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <AntDesign name="plus" size={16} color="green" />
                    <Text>GHS {item.amount}</Text>
                </View>
                <Text style={{ fontFamily: 'OpenSans_SemiBold' }}>
                    Mobile Money
                </Text>
            </View>
        </View>
    )
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <FlatList
                    data={history}
                    showsVerticalScrollIndicator={false}
                    renderItem={renderItems}
                    keyExtractor={(item) => item.id.toString()}
                    ListHeaderComponent={() =>
                        params?.history ? (
                            <Text
                                style={{
                                    fontFamily: 'OpenSans_SemiBold',
                                    fontSize: 30,
                                    marginBottom: 10,
                                }}
                            >
                                {params?.history}
                            </Text>
                        ) : null
                    }
                />
            </View>
        </View>
    )
}

export default PaymentHistory

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 20,
    },
})
