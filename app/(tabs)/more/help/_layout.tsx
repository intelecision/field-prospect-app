import { Stack } from 'expo-router'

export default function HelpCenterStackLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="helpcenter"
                options={{
                    headerTitle: 'Help Center',
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="helpcenterdetails"
                options={{
                    headerTitle: 'Help Center Details',
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name="knowledgeBase"
                options={{
                    headerTitle: 'Knowledge Base',
                    headerShown: false,
                }}
            />
        </Stack>
    )
}
