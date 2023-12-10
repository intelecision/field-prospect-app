import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from '../../../components/Themed'
import { ScrollView } from 'react-native-gesture-handler'
import { Entypo, Ionicons } from '@expo/vector-icons'

const MoreScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.userInfo}>
                        <View style={styles.avatar}>
                            <Text style={styles.userInitials}>JA</Text>
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                                John Abrahamson
                            </Text>
                            <Text style={{ fontSize: 15 }}>
                                ABD Insurance Company Ltd.
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text
                            style={{
                                margin: 10,
                                fontSize: 15,
                            }}
                        >
                            HELP & SUPPORT
                        </Text>
                    </View>

                    <View style={styles.section}>
                        <View style={styles.sectionContent}>
                            <Ionicons
                                name="help-circle-outline"
                                size={30}
                                color="black"
                            />
                            <Text style={styles.sectionContentText}>
                                Frequently Asked Questions (FAQs)
                            </Text>
                        </View>
                        <View style={styles.sectionContent}>
                            <Ionicons
                                name="ios-library-outline"
                                size={30}
                                color="black"
                            />
                            <Text style={styles.sectionContentText}>
                                Knowledge base
                            </Text>
                        </View>
                        <View style={styles.sectionContent}>
                            <Entypo name="ticket" size={30} color="black" />
                            <Text style={styles.sectionContentText}>
                                Support Ticket
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default MoreScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 20,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    userInitials: {
        fontSize: 20,
        fontFamily: 'OpenSans_700Bold',
        fontWeight: 'bold',
        color: 'white',
    },
    section: {
        //marginTop: 10,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    sectionContent: {
        flexDirection: 'row',
        //justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    sectionContentText: {
        fontSize: 16,
        marginLeft: 10,
    },
})
