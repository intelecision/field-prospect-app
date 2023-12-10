import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Link, Tabs } from 'expo-router'
import { Pressable, View, useColorScheme } from 'react-native'
import { AntDesign, Entypo, Feather, Ionicons } from '@expo/vector-icons'
import Colors from '../../constants/Colors'

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name']
    color: string
}) {
    return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />
}

function TabBarIonicons(props: {
    name: React.ComponentProps<typeof Ionicons>['name']
    color: string
}) {
    return <Ionicons size={28} style={{ marginBottom: -3 }} {...props} />
}

function TabBarAnteDesignIcon(props: {
    name: React.ComponentProps<typeof AntDesign>['name']
    color: string
}) {
    return <AntDesign size={28} style={{ marginBottom: -3 }} {...props} />
}

function TabBarEntypoIcon(props: {
    name: React.ComponentProps<typeof Entypo>['name']
    color: string
}) {
    return <Entypo size={28} style={{ marginBottom: -3 }} {...props} />
}

export default function TabLayout() {
    const colorScheme = useColorScheme()

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                headerBackground: () => (
                    <View
                        style={{
                            backgroundColor:
                                Colors[colorScheme ?? 'light'].tint,
                            flex: 1,
                        }}
                    />
                ),
                headerStyle: {
                    backgroundColor: 'crimson',
                },
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                tabBarInactiveTintColor:
                    Colors[colorScheme ?? 'light'].tabIconDefault,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="dashboard" color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="prospects"
                options={{
                    title: 'Prospects',
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Feather name="target" size={24} color={color} />
                        //<TabBarAnteDesignIcon name="carryout" color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="calendar"
                options={{
                    title: 'Calendar',
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <TabBarIonicons
                            name="ios-calendar-outline"
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="payments"
                options={{
                    title: 'Payments',
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <TabBarIonicons name="card-outline" color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="more"
                options={{
                    title: 'More',
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <TabBarEntypoIcon
                            name="dots-three-horizontal"
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    )
}
