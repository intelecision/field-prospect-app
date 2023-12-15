import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    title: string
    value: string
    children?: React.ReactNode
}

const DashboardItem = (props: Props) => {
    const { title, value, children } = props
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.content}>{children}</View>
        </View>
    )
}

export default DashboardItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        minHeight: 200,
        backgroundColor: '#fff',
        padding: 20,
        paddingTop: 10,
        marginBottom: 10,
        borderRadius: 10,
    },
    content: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        fontFamily: 'OpenSans_SemiBold',
    },
    value: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'OpenSans_700Bold',
        color: '#00A3AD',
    },
})
