import { Stack } from 'expo-router'
import { useColorScheme } from 'react-native'

export default function ProspectStackLayout() {
    const colorScheme = useColorScheme()
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'crimson',
                },
                headerTintColor: '#fff',
            }}
        >
            <Stack.Screen
                name="index"
                options={{
                    headerTitle: 'My Prospects',
                    headerTransparent: true,
                    title: 'My Prospects',
                }}
            />
            <Stack.Screen
                name="prospectlist"
                options={{
                    headerTitle: 'Prospects',
                    headerTransparent: true,
                    title: 'Prospects',
                }}
            />
        </Stack>
    )
}
