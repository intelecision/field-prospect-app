import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { globalStyles } from '../Styles/GlobalStyles'

const Affordability = () => {
    return (
        <View>
            <View
                style={[
                    {
                        justifyContent: 'center',
                        backgroundColor: '#00A3AD',
                        alignItems: 'center',
                        height: 120,
                    },
                ]}
            >
                <Text style={{ fontSize: 30, color: '#fff' }}>
                    Cover Amount
                </Text>
                <Text style={{ fontSize: 20, color: '#fff' }}>
                    Affordability
                </Text>
            </View>
            <ScrollView>
                <View style={globalStyles.header_group}>
                    <Text style={globalStyles.header_group_text}>ASSETS</Text>
                    <View>
                        <Text>Net Assets</Text>
                        <Text>Net Assets</Text>
                        <Text>Net Assets</Text>
                    </View>
                </View>

                <View style={globalStyles.header_group}>
                    <Text style={globalStyles.header_group_text}>
                        FINANCIAL OBLIGATION
                    </Text>
                    <View>
                        <Text>Net Assets</Text>
                        <Text>Net Assets</Text>
                        <Text>Net Assets</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Affordability

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        padding: 20,
    },
})
