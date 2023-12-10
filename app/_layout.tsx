import FontAwesome from '@expo/vector-icons/FontAwesome'
import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { useEffect } from 'react'
import { useColorScheme } from 'react-native'

import { QuoteContextProvider } from '../context/QuoteContext'
import { initializeUser } from '../model/User'
import { userContext } from '../context/userContext'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { QuestionnaireProvider } from '../context/QuestionnaireContext'

export {
    // Catch any errors thrown by the Layout component.
    ErrorBoundary,
} from 'expo-router'

export const unstable_settings = {
    // Ensure that reloading on `/modal` keeps a back button present.
    initialRouteName: '(tabs)',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
    const [loaded, error] = useFonts({
        OpenSans: require('../assets/fonts/OpenSans-Regular.ttf'),
        OpenSans_700Bold: require('../assets/fonts/OpenSans-Bold.ttf'),
        OpenSans_Medium: require('../assets/fonts/OpenSans-Medium.ttf'),
        OpenSans_SemiBold: require('../assets/fonts/OpenSans-SemiBold.ttf'),
        OpenSans_SemiBoldItalic: require('../assets/fonts/OpenSans-SemiBoldItalic.ttf'),

        ...FontAwesome.font,
    })

    // Expo Router uses Error Boundaries to catch errors in the navigation tree.
    useEffect(() => {
        if (error) throw error
    }, [error])

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync()
        }
    }, [loaded])

    if (!loaded) {
        return null
    }

    return <RootLayoutNav />
}

function RootLayoutNav() {
    const colorScheme = useColorScheme()

    return (
        <ThemeProvider
            value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
            <BottomSheetModalProvider>
                <userContext.Provider value={initializeUser}>
                    <QuoteContextProvider>
                        <QuestionnaireProvider>
                            <Stack
                                screenOptions={{
                                    headerShown: false,
                                    headerTitleStyle: {
                                        fontWeight: 'bold',
                                        fontFamily: 'OpenSans_700Bold',
                                    },
                                }}
                            >
                                <Stack.Screen
                                    name="(tabs)"
                                    options={{ headerShown: false }}
                                />

                                <Stack.Screen
                                    name="modal"
                                    options={{ presentation: 'modal' }}
                                />
                                <Stack.Screen name="grouplife" options={{}} />
                            </Stack>
                        </QuestionnaireProvider>
                    </QuoteContextProvider>
                </userContext.Provider>
            </BottomSheetModalProvider>
        </ThemeProvider>
    )

    //return (
    //  <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    //    <Stack>
    //      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    //      <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
    //    </Stack>
    //  </ThemeProvider>
    //);
}
