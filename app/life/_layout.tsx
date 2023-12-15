import { Stack } from 'expo-router'

export default function StackLayout() {
    return (
        <Stack
            screenOptions={{
                //headerShown: false,
                headerTransparent: true,
                headerBackVisible: false,
                headerBackTitleVisible: false,
                headerTintColor: '#fff',
                headerStyle: {
                    //backgroundColor: '#00A3AD',
                    backgroundColor: '#2c2c2c',
                },

                headerTitleStyle: {
                    fontFamily: 'OpenSans',
                },
            }}
        >
            <Stack.Screen
                name="salePitch"
                options={{
                    headerTitle: 'Ready to get started?',
                    //headerShown: true,
                }}
            />
            <Stack.Screen
                name="lifeapplicationsteps"
                options={{
                    headerTitle: 'Welcome Life Insurance Application',
                    //headerShown: true,
                }}
            />
            <Stack.Screen
                name="readytostart"
                options={{
                    headerTitle: 'Application Steps',
                    //headerShown: true,
                }}
            />
            <Stack.Screen
                name="personaldetails"
                options={{
                    headerTitle: 'Personal Details',
                    //headerShown: true,
                }}
            />
            <Stack.Screen
                name="fieldunderwriting"
                options={{
                    headerTitle: 'Pre-Underwriting',
                }}
            />
            <Stack.Screen
                name="productsSelected"
                options={{
                    headerTitle: 'Insurance Products Selected',
                    //headerShown: true,
                }}
            />
            <Stack.Screen
                name="budgetwizardform"
                options={{
                    headerTitle: 'Life Insurance Application',
                    //headerShown: true,
                }}
            />
            <Stack.Screen
                name="quoteSummary"
                options={{
                    headerTitle: 'Quote Summary',
                    //headerShown: true,
                }}
            />
            <Stack.Screen
                name="personalAssets"
                options={{
                    headerTitle: 'Personal Assets',
                    //headerShown: false,
                }}
            />
            <Stack.Screen
                name="financialsummary"
                options={{
                    headerTitle: 'Financial Obligations',
                }}
            />
            <Stack.Screen
                name="applicationForm"
                options={{
                    headerTitle: 'Application Form',
                    headerBackVisible: true,
                }}
            />
            <Stack.Screen
                name="completedApplication"
                options={{
                    headerTitle: 'Application is now complete',
                    headerBackVisible: true,
                }}
            />
            <Stack.Screen
                name="paymentMandate"
                options={{
                    headerTitle: 'Payment Mandate',
                    headerBackVisible: true,
                }}
            />
        </Stack>
    )
}
