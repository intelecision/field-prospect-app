import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from '../../components/Themed'

import { TouchableOpacity } from 'react-native-gesture-handler'
import { Link } from 'expo-router'

type Props = {
    title: string
    narrative: string
}
const PolicyDetail = ({ title, narrative }: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.heading}>
                    <View style={styles.bar} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <Text>{narrative}</Text>
                <View
                    style={{
                        //flexDirection: 'row',
                        width: '100%',
                        marginTop: 20,
                        //justifyContent: 'space-between',
                    }}
                >
                    <Link href="/(tabs)/lifeInsurance" asChild>
                        <Text style={styles.link}> Find out more</Text>
                    </Link>

                    <TouchableOpacity
                        style={{
                            backgroundColor: '#54b8ac',
                            borderRadius: 30,
                        }}
                    >
                        <View
                            style={{
                                //width: 150,
                                height: 40,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: 'OpenSans_700Bold',
                                    color: '#fff',
                                    fontWeight: '700',
                                    fontSize: 16,
                                }}
                            >
                                Get quote
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default PolicyDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
    },
    title: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 24,
        fontFamily: 'OpenSans_700Bold',
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 6,
        padding: 20,
        marginVertical: 10,

        borderWidth: 0.5,
        borderColor: '#e0e0e0',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },

    link: {
        color: '#54b8ac',
        fontSize: 18,
        fontFamily: 'OpenSans_700Bold',
        marginTop: 10,
        marginBottom: 10,
    },
    bar: {
        width: 5,
        height: 30,
        backgroundColor: '#54b8ac',
        marginRight: 10,
    },
    heading: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})
