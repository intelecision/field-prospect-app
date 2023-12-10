import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'

type Prospect = {
    id: number
    name: string
    value: number
    iconName: string
    status: ProspectStatusType
}
type ProspectStatusType = 'Pending' | 'Completed' | 'Rejected' | 'Approved'

const ProspectList = () => {
    const [prospects, setProspects] = useState<Prospect[]>([])
    return (
        <SafeAreaView style={[styles.container]}>
            <View style={styles.content}>
                <FlatList
                    data={prospects}
                    renderItem={({ item }) => (
                        <View>
                            <Text>{item.name}</Text>
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    )
}

export default ProspectList

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    content: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
})
