import { StatusBar } from 'expo-status-bar'
import { Platform, StyleSheet } from 'react-native'

import EditScreenInfo from '../components/EditScreenInfo'
import { Text, View } from '../components/Themed'
import NewProspect from './components/NewProspect'
import { router } from 'expo-router'

export default function ModalScreen() {
    return (
        <View style={styles.container}>
            <View style={{ height: 60 }}>
                <Text>Form Sector</Text>
            </View>
            <View style={{ height: 60 }}>
                <Text>Micro Sector</Text>
            </View>
            <View style={{ height: 60 }}>
                <Text>Group Insurance</Text>
            </View>

            <NewProspect
                onNewProspect={() => router.push('/life')}
                onMicroProspect={() => router.push('/micro')}
            />

            {/* Use a light status bar on iOS to account for the black space above the modal */}
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        //  justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
})
