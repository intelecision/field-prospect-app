import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Text } from '../../components/Themed'
import { Stack, router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const Notification = () => {
    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => {
                                router.push('/notification')
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginRight: 20,
                                }}
                            >
                                <Ionicons
                                    name="md-close-outline"
                                    size={24}
                                    color="#fff"
                                    style={{ marginLeft: 10 }}
                                />
                            </View>
                        </TouchableOpacity>
                    ),
                }}
            />
            <ScrollView
                style={styles.content}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.content}>
                    <View style={styles.notification}>
                        <View style={styles.dateLine}>
                            <View style={styles.redDot} />
                            <Text style={styles.date}>27 Aug</Text>
                        </View>
                        <Text
                            style={styles.message}
                            ellipsizeMode="tail"
                            numberOfLines={3}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam, voluptates? Lorem ipsum dolor sit
                            amet, consectetur adipisicing elit. Sapiente, ipsa
                            magnam? Dicta molestias tempora inventore quaerat
                            tempore rerum soluta totam sapiente laboriosam illo
                            omnis odit eos, maiores suscipit obcaecati sed.
                        </Text>
                    </View>
                    <View style={styles.notification}>
                        <View style={styles.dateLine}>
                            <View style={styles.redDot} />
                            <Text style={styles.date}>27 Aug</Text>
                        </View>
                        <Text
                            style={styles.message}
                            ellipsizeMode="tail"
                            numberOfLines={3}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam, voluptates? Lorem ipsum dolor sit
                            amet, consectetur adipisicing elit. Sapiente, ipsa
                            magnam? Dicta molestias tempora inventore quaerat
                            tempore rerum soluta totam sapiente laboriosam illo
                            omnis odit eos, maiores suscipit obcaecati sed.
                        </Text>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.notification}>
                        <Text style={styles.date}>26 Aug</Text>
                        <Text
                            style={styles.message}
                            ellipsizeMode="tail"
                            numberOfLines={3}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Vitae praesentium nesciunt rem aspernatur,
                            suscipit et numquam eius rerum laudantium modi quae
                            deleniti maiores. Molestias natus impedit
                            dignissimos nemo consequuntur? Adipisci?
                        </Text>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.notification}>
                        <Text style={styles.date}>21 Aug</Text>
                        <Text
                            style={styles.message}
                            ellipsizeMode="tail"
                            numberOfLines={3}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam, voluptates?
                        </Text>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.notification}>
                        <Text style={styles.date}>21 Aug</Text>
                        <Text
                            style={styles.message}
                            ellipsizeMode="tail"
                            numberOfLines={3}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam, voluptates?
                        </Text>
                    </View>
                    <View style={styles.line} />
                </View>
            </ScrollView>
        </View>
    )
}

export default Notification

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    content: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    notification: {
        backgroundColor: '#fff',
        marginBottom: 20,
    },
    date: {
        color: '#000',
        fontSize: 12,
        fontWeight: 'bold',
        //marginBottom: 10,
        fontFamily: 'OpenSans_700Bold',
    },
    message: { color: '#000', fontSize: 15, textAlign: 'justify' },
    line: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5,
        marginBottom: 20,
    },
    redDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'crimson',
        marginRight: 10,
        marginTop: 4,
    },
    dateLine: {
        flexDirection: 'row',

        //backgroundColor: '#ddd',
    },
})
