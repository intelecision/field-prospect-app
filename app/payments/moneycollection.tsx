import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from "react-native-gesture-handler"


const collections = [
    {
        id: 1,
        name: 'Rita Mensah',
        amount: 300,
        dueDate: '16/12/2023',
    }, {
        id:2,
        name: "George Ofori",
        amount: 500,
        dueDate: '16/12/2023',
    }, {
        id: 3,
        name: "Akua Menu",
        amount: 200,
        dueDate: '16/11/2023',
    }, {
        id: 4,
        name: "Nama Ampofo",
        amount: 200,
        dueDate: '16/12/2023',
    }, {
        id: 5,
        name: "Kwame Agbodza",
        amount: 200,
        dueDate: '16/12/2023',
    }, {
        id: 6,
        name: "Margaret Amoah",
        amount: 200,
        dueDate: '16/12/2023',
    }, {
        id: 7,
        name: "Kofi Adu-Gyamfi",
        amount: 200,
        dueDate: '16/12/2023',
    }, {
        id: 8,
        name: "Kwame Adu",
        amount: 200,
        dueDate: '16/12/2023',
    }, {
        id: 9,
        name: "Abena Akoto",
        amount: 200,
        dueDate: '16/12/2023',
    }, {
        id: 10,
        name: "Yaa Asantewaa",
        amount: 200,
        dueDate: '16/12/2023',
    },

    ]
const MoneyCollection = () => {
    return (

      <View style={styles.container}>
            <View style={styles.content}>
                <FlatList
                    data={collections}
                    renderItem={({ item }) => (
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>}
                            <View>
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
                                <Text style={{ fontSize: 14, color: '#666' }}>{item.dueDate}</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>GHS {item.amount}</Text>
                            </View>
                        </View>
                    )}
                    keyExtractor={item => item.id.toString()}

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
})
