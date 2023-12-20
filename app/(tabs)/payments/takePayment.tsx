import { StyleSheet, View, Image, Alert } from 'react-native'
import React from 'react'
import {
    useLocalSearchParams,
    useGlobalSearchParams,
    router,
    useNavigation,
} from 'expo-router'
import { globalStyles } from '../../Styles/GlobalStyles'
import Button from '../../../components/Button'
import { TextInput, Text } from '../../../components/Themed'

type Props = {}

const TakePayment = (props: Props) => {
    const [mobileNumber, setMobileNumber] = React.useState('')
    const [payReference, setPayReference] = React.useState('')
    const [amount, setAmount] = React.useState<number>(300)
    const paymentMethod = useGlobalSearchParams<{
        method: string
        image: any
    }>()
    const navigation = useNavigation()
    const renderMobilePay = () => {
        return (
            <View style={styles.content}>
                <View
                    style={[
                        globalStyles.editGroup,
                        { marginTop: 40, marginBottom: 30 },
                    ]}
                >
                    <Text style={globalStyles.label}>Mobile Number</Text>
                    <TextInput
                        style={[globalStyles.input]}
                        onChangeText={setMobileNumber}
                        value={mobileNumber}
                        keyboardType="phone-pad"
                        placeholder="Enter mobile number"
                        placeholderTextColor="#aaa"
                        maxLength={10}
                    />
                </View>
                <Button
                    title={'Pay GHS ' + amount}
                    onPress={() => {
                        Alert.alert(
                            'Payment',
                            `You are about to pay Ghs${amount} with ${paymentMethod.method} to ${mobileNumber}`,
                            [
                                {
                                    text: 'Cancel',
                                    onPress: () =>
                                        console.log('Cancel Pressed'),
                                    style: 'cancel',
                                },
                                {
                                    text: 'OK',
                                    onPress: () => {
                                        Alert.alert(
                                            'Payment',
                                            `You have successfully paid Ghs${amount} with ${paymentMethod.method} to ${mobileNumber}`,
                                            [
                                                {
                                                    text: 'OK',
                                                    onPress: () =>
                                                        router.push('/(tabs)'),
                                                },
                                            ],
                                            { cancelable: false }
                                        )
                                        router.push('/(tabs)')
                                    },
                                },
                            ],
                            { cancelable: false }
                        )
                    }}
                />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.headerImage}
                    source={paymentMethod.image}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.content}>
                {renderMobilePay()}
                {/*{paymentMethod.method === 'Mobile Money' && renderMobilePay()}*/}
            </View>
        </View>
    )
}

export default TakePayment

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        //padding: 20,
        //height: 100,
        marginBottom: 30,
    },
    header: {
        width: '100%',

        height: 200,
    },

    headerImage: {
        width: '100%',
        height: 200,
        paddingTop: 20,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        padding: 10,
    },
    paymentMethod: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        justifyContent: 'space-around',
    },
})
