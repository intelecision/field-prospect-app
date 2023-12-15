import { StyleSheet, Touchable, View } from 'react-native'
import React from 'react'
import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { Text } from '../../components/Themed'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { router, useNavigation } from 'expo-router'

type Props = {}

const QuickActions = (props: Props) => {
    const navigation = useNavigation()
    return (
        <View style={{}}>
            <Text
                style={{
                    margin: 15,
                    fontSize: 18,
                    fontFamily: 'OpenSans_Medium',
                }}
            >
                Quick actions
            </Text>
            <View style={styles.content}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('prospects')}
                >
                    <View style={styles.iconContainer}>
                        <View style={styles.actionItem}>
                            <FontAwesome5
                                name="tasks"
                                size={24}
                                color="#00A3AD"
                            />
                        </View>
                        <Text style={{ margin: 10, textAlign: 'center' }}>
                            Prospects
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('payments')}
                >
                    <View style={styles.iconContainer}>
                        <View style={styles.actionItem}>
                            <MaterialIcons
                                name="payment"
                                size={24}
                                color="#00A3AD"
                            />
                        </View>
                        <Text style={{ margin: 10, textAlign: 'center' }}>
                            Payments
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.iconContainer}>
                    <TouchableOpacity
                        onPress={() => router.push('/(tabs)/calendar')}
                    >
                        <View style={styles.actionItem}>
                            <Ionicons
                                name="md-calendar-outline"
                                size={24}
                                color="#00A3AD"
                            />
                        </View>
                    </TouchableOpacity>
                    <Text style={{ margin: 10, textAlign: 'center' }}>
                        Calendar
                    </Text>
                </View>
                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={() => router.push('/help')}>
                        <View style={styles.actionItem}>
                            <Ionicons
                                name="md-library-outline"
                                size={24}
                                color="#00A3AD"
                            />
                        </View>
                    </TouchableOpacity>
                    <Text style={{ margin: 10, textAlign: 'center' }}>
                        Help Center
                    </Text>
                </View>
                {/*<View style={styles.iconContainer}>
                <View style={styles.actionItem}>
                    <Ionicons
                        name="md-star-outline"
                        size={24}
                        color="#00A3AD"
                    />
                </View>
                <Text style={{ margin: 10, textAlign: 'center' }}>
                    Help Center
                </Text>
            </View>*/}
            </View>
        </View>
    )
}

export default QuickActions

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    content: {
        //flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    actionItem: {
        width: 60,
        height: 60,
        borderRadius: 6,
        backgroundColor: '#fff',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#e0e0e0',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        //width: 100,
        height: 80,
        marginBottom: 10,
    },
})
