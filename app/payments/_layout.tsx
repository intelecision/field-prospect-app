import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Link, Stack } from 'expo-router'
import { Pressable, useColorScheme } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function PaymentStack() {
    const colorScheme = useColorScheme()
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    //    backgroundColor: 'crimson',
                },
                headerBackTitle: 'Back',
                headerBackVisible: true,
                headerShown: true,
                headerTintColor: '#000',
            }}
        >
            <Stack.Screen
                name="index"
                options={{
                    headerLeft: () => (
                        <Link href="/(tabs)" asChild>
                            <Pressable>
                                {({ pressed }) => (
                                    <Ionicons
                                        name="chevron-back"
                                        size={25}
                                        color={
                                            colorScheme === 'light'
                                                ? Colors.lighter
                                                : Colors.darker
                                        }
                                        style={{
                                            marginLeft: 15,
                                            opacity: pressed ? 0.5 : 1,
                                        }}
                                    />
                                )}
                            </Pressable>
                        </Link>
                    ),
                    headerTitle: 'Payments',
                }}
            />
            <Stack.Screen
                options={{
                    headerTitle: 'Take Payment',
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name="moneycollection"
                options={{
                    headerTitle: 'Collection',
                    headerShown: true,
                }}
            />
        </Stack>
    )
}
