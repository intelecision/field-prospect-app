import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from './components/Screen'
import { router } from 'expo-router'
import Button from '../../components/Button'

const SalePitch = () => {
    return (
        <Screen
            heading={'Sales Pitch'}
            handleCancel={() => {
                router.push('/(drawer)')
            }}
        >
            <ScrollView style={styles.container}>
                <View style={styles.container}>
                    <View style={styles.content}>
                        <Text style={styles.text}>
                            Hello, my name is xxxx and I am a financial advisor
                            with xxxxx Company Ltd.
                        </Text>
                        <Text style={styles.text}>
                            I am here to help you to understand the importance
                            of life insurance and how it can help you to achieve
                            your financial goals.
                        </Text>
                        <Text style={styles.text}>
                            My mission here is to share with you what we do as a
                            company and to also help you to provide financial
                            security and peace of mind for your loved ones on
                            your demise.
                        </Text>
                        <Text style={styles.text}>
                            We have a range of products to fit most needs and I
                            believe at the end of our journey through this app,
                            we would be able to provide you with the absolute
                            protection needed for your loved ones.
                        </Text>
                        <Text style={styles.text}>
                            I will be asking you a few questions to help me
                            understand your needs and to help me to provide you
                            with the best advice.
                        </Text>

                        {/*<Text style={styles.text}>
                            I will also help you to determine the amount of
                            cover you need and the type of cover that is best
                            suited for you.
                        </Text>*/}
                        <View style={styles.box}>
                            <Text style={styles.text}>
                                I assure you that all information provided will
                                be kept confidential and will not be shared with
                                any third parties.
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <Button
                    title="Next"
                    onPress={() => {
                        router.push('/life/personaldetails')
                    }}
                />
            </View>
        </Screen>
    )
}

export default SalePitch

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        padding: 20,
    },
    text: {
        fontSize: 18,
        justifyContent: 'center',
        fontFamily: 'OpenSans_Medium',
        textAlign: 'justify',
        marginBottom: 20,
    },
    footer: {
        height: 150,
        padding: 20,
    },
    box: {
        //backgroundColor: '#08E8DE',
        borderRadius: 10,
        padding: 20,
        borderColor: '#08E8DE',
        borderWidth: 1,
    },
})
