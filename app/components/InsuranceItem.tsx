import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

type Props = {
    title: string
    image: any
    navigation: any
}

const InsuranceItem = (props: Props) => {
    const { title, image, navigation } = props
    return (
        <View style={styles.container}>
            <View style={StyleSheet.absoluteFill}>
                <Image
                    source={image}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="cover"
                    borderRadius={10}
                />
            </View>
            <View
                style={[
                    styles.card,
                    {
                        marginTop: 20,
                        //borderWidth: 1,
                        //shadowColor: '#000',
                        //shadowOffset: { width: 0, height: 1 },
                    },
                ]}
            >
                <Text style={styles.heading_1}>{title}</Text>
                <View style={{ flex: 1, padding: 10 }}>
                    <Text style={{ fontSize: 18, color: 'whitesmoke' }}>
                        Life insurance is a type of policy that offers financial
                        support to your loved ones upon your passing. It
                        provides a lump sum payout that can clear debts,
                        mortgages, and cover living expenses for your family.
                    </Text>
                </View>
                <View style={{ flex: 1, padding: 10 }}>
                    <View
                        style={[
                            styles.button,
                            {
                                marginBottom: 10,
                                //paddingHorizontal: 20,
                            },
                        ]}
                    >
                        <Text
                            style={{
                                color: '#fff',
                                fontSize: 18,
                                fontWeight: 'bold',
                            }}
                        >
                            Find out more...
                        </Text>
                    </View>
                    <View style={[styles.button]}>
                        <Text
                            style={{
                                color: '#fff',
                                fontSize: 18,
                                fontWeight: 'bold',
                            }}
                        >
                            Get a quote now...
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default InsuranceItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        //  alignItems: 'center',
        //    justifyContent: 'center',
        marginVertical: 10,
    },
    content: {
        flex: 1,
        //  alignItems: 'center',
        //  justifyContent: 'center',
        paddingHorizontal: 10,
    },
    card: {
        height: 350,
        width: 400,
        borderRadius: 10,
        //borderWidth: 1,
    },
    button: {
        //minWidth: 160,
        height: 50,
        alignItems: 'center',
        backgroundColor: '#31afb3',
        padding: 10,
        borderRadius: 30,
        justifyContent: 'center',
    },
    button_outline: {
        //minWidth: 160,
        height: 50,
        alignItems: 'center',
        //backgroundColor: '#6a1b9a',
        borderColor: '#6a1b9a',
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,
        justifyContent: 'center',
    },
    heading_1: {
        fontSize: 30,
        fontWeight: 'bold',
        padding: 10,
        fontFamily: 'OpenSans',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
})
