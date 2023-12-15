import { StyleSheet, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { router, useNavigation } from 'expo-router'
import Button from '../../components/Button'
import { globalStyles } from '../Styles/GlobalStyles'
import { Text } from '../../components/Themed'
import NavigationBar from '../../components/NavigationBar'
import { ScrollView } from 'react-native-gesture-handler'
import MicroScreen from './components/MicroScreen'

const IndexScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <MicroScreen
                heading="Introduction"
                onCancel={() => router.push('/(tabs)')}
            >
                <ScrollView style={styles.container}>
                    <View style={styles.content}>
                        <Text
                            style={[
                                globalStyles.label,
                                { fontSize: 18, textAlign: 'justify' },
                            ]}
                        >
                            Hello, my name is xxxx and I am a financial advisor
                            with xxxxx Company Ltd. Our mission as a company is
                            to help you to provide financial security and peace
                            of mind for your loved ones on your demise. I would
                            like to discuss solutions that would help you to
                            ensure financial security for your family. ...
                        </Text>

                        <View style={{ margin: 20 }}>
                            <Button
                                title="Video Introduction"
                                onPress={() => router.push('/audioplayer')}
                            />
                        </View>
                    </View>
                </ScrollView>
                <View style={{ height: 120, padding: 10 }}>
                    <NavigationBar
                        enableBackButton
                        enableNextButton={true}
                        onBackButtonPress={() => router.back()}
                        onNextButtonPress={() => {
                            router.push('/micro/microprospect')
                        }}
                    />
                </View>
                <StatusBar style="dark" />
            </MicroScreen>
        </View>
    )
}

export default IndexScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        padding: 20,
        //justifyContent: 'center',
        //alignItems: 'center',
    },
})
