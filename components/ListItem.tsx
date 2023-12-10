import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from './Themed'

type Props = {
    text: string
}

const ListItem = ({ text }: Props) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                paddingHorizontal: 20,
                alignItems: 'center',
            }}
        >
            <Text style={styles.bullet}>{'\u2022' + ' '} </Text>
            <Text> {text} </Text>
        </View>
    )
}

export default ListItem

const styles = StyleSheet.create({
    bullet: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})
