import { Ionicons } from '@expo/vector-icons'
import { Stack, Link, useNavigation } from 'expo-router'
import { FC } from 'react'
import {
    KeyboardAvoidingView,
    Platform,
    View,
    StyleSheet,
    Pressable,
    useColorScheme,
} from 'react-native'
import { Text } from '../../../components/Themed'
import { Colors } from 'react-native/Libraries/NewAppScreen'

type Props = {
    heading: string
    children: React.ReactNode
    handleCancel: () => void
}
const Screen: FC<Props> = (props: Props) => {
    const { heading, handleCancel, children } = props
    const colorScheme = useColorScheme()
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: '#ffffff',
                        //backgroundColor: '#00A3AD',
                    },
                    headerTintColor: 'black',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerTitleAlign: 'center',
                    headerBackVisible: false,
                    headerBackTitleVisible: false,

                    headerRight: () => (
                        <Pressable onPress={() => navigation.navigate('home')}>
                            {({ pressed }) => (
                                <Ionicons
                                    name="close-outline"
                                    size={30}
                                    color="#000"
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
                        backgroundColor: '#00A3AD',
                        alignItems: 'center',
                        minHeight: 60,
                    },
                ]}
            >
                <Text
                    style={{
                        fontSize: 20,
                        //fontWeight: '700',
                        justifyContent: 'center',
                        color: '#fff',
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
        </View>
    )
}

export default Screen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        //padding: 20,
    },
})
