import {
    View,
    Text,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    useColorScheme,
    StyleSheet,
} from 'react-native'
import React, { FC } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation, Stack, router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

type Props = {
    heading: string
    children: React.ReactNode
    handleCancel: () => void
}

const GroupScreen: FC<Props> = (props: Props) => {
    const { heading, handleCancel, children } = props
    const colorScheme = useColorScheme()
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#00A3AD',
                    },

                    headerTitleStyle: {
                        fontFamily: 'OpenSans',
                    },
                    headerTitleAlign: 'center',
                    headerBackVisible: false,
                    headerBackTitleVisible: false,

                    headerRight: () => (
                        <Pressable onPress={() => router.push('/(tabs)')}>
                            {({ pressed }) => (
                                <Ionicons
                                    name="close-outline"
                                    size={30}
                                    color="#fff"
                                    style={{
                                        marginLeft: 15,
                                        opacity: pressed ? 0.5 : 1,
                                    }}
                                />
                            )}
                        </Pressable>
                    ),
                }}
            />

            <View
                style={[
                    {
                        justifyContent: 'center',
                        //backgroundColor: '#00A3AD',
                        alignItems: 'center',
                        minHeight: 60,
                        borderWidth: 1,
                        //borderRadius: 10,
                        borderColor: '#00A3AD',
                        padding: 10,
                        margin: 10,
                    },
                ]}
            >
                <Text
                    style={{
                        fontSize: 20,
                        //fontWeight: '700',
                        justifyContent: 'center',
                        color: '#00A3AD',
                    }}
                >
                    {heading}
                </Text>
            </View>

            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={styles.content}>{children}</View>
            </KeyboardAvoidingView>
            <StatusBar style="light" />
        </View>
    )
}

export default GroupScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    content: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContent: {
        flex: 1,
    },
    header: {
        //backgroundColor: '#00A3AD',
        //height: 120,
        justifyContent: 'center',
        //alignItems: 'center',
    },
    list: {
        flexDirection: 'row',
        padding: 10,

        marginTop: 10,
        backgroundColor: '#fff',
        fontSize: 20,
        borderRadius: 10,
    },
    footer: {
        //backgroundColor: '#00A3AD',
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
