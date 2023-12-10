import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../../Styles/GlobalStyles'

type Props = {}

const Address = (props: Props) => {
    return (
        <View>
            <View style={globalStyles.editGroup}>
                <Text style={styles.addressText}>Address</Text>
                <Text style={styles.addressText}>City</Text>
                <Text style={styles.addressText}>Region</Text>
                <Text style={styles.addressText}>Country</Text>
                <Text style={styles.addressText}>Postal Code</Text>
                <Text style={styles.addressText}>Digital Address</Text>
            </View>
        </View>
    )
}

export default Address

const styles = StyleSheet.create({
    addressText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        padding: 5,
        width: 200,
    },
})
