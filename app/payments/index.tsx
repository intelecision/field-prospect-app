import {
    ScrollView,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
} from 'react-native'
import React from 'react'
import { Text } from '../../components/Themed'
import { Stack, router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const PAYMENT_METHODS = [
    {
        method: 'MTN Mobile Money',
        image: require('../../assets/images/mtn-logo.png'),
    },
    {
        method: 'Vodafone Cash',
        image: require('../../assets/images/vodafone-logo2.jpg'),
    },
    {
        method: 'AirtelTigo Cash',
        image: require('../../assets/images/airteltigo.png'),
    },
    { method: 'Bank Account', image: require('../../assets/images/bank.jpeg') },
]

type PaymentMethod = {
    method: string
    image: string
}
const PaymentMethods = () => {
    const [selectedPaymentMethod, setSelectedPaymentMethod] =
        React.useState<PaymentMethod>()

    const handlePaymentMethod = (paymentMethod: PaymentMethod) => {
        setSelectedPaymentMethod(paymentMethod)

        router.push({
            pathname: '/payments/takePayment',
            params: paymentMethod,
        })
    }
    const PaymentMethod = ({
        paymentMethod,
    }: {
        paymentMethod: PaymentMethod
    }) => {
        return (
            <TouchableOpacity
                onPress={() => handlePaymentMethod(paymentMethod)}
            >
                <View style={styles.paymentMethod}>
                    <Image
                        style={styles.image}
                        source={paymentMethod.image as any}
                    />
                    <Text style={styles.paymentMethodText}>
                        {paymentMethod.method}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerTitle: 'Payment Methods',
                    headerBackVisible: true,
                    headerTintColor: '#000',
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => router.back()}
                            style={{ marginLeft: 10 }}
                        >
                            <Ionicons
                                name="chevron-back"
                                size={24}
                                color="#000"
                            />
                        </TouchableOpacity>
                    ),
                }}
            />
            <ScrollView style={styles.containerContent}>
                <View style={styles.content}>
                    {PAYMENT_METHODS.map((paymentMethod, index) => {
                        return (
                            <PaymentMethod
                                key={index}
                                paymentMethod={paymentMethod}
                            />
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    )
}

export default PaymentMethods

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerContent: {
        flex: 1,
    },
    content: {
        flex: 1,
        //padding: 10,
    },
    paymentMethod: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    paymentMethodText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    image: {
        width: 50,
        height: 50,
    },
})
