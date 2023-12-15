import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import NavigationBar from '../../components/NavigationBar'
import { router } from 'expo-router'
import Screen from './components/Screen'
import ContentIndex from '../micro/components/ContentIndex'
import CustomerPersonalInformation from './components/CustomerPersonalInformation'
import {
    todayMinus18years,
    todayMinus75years,
} from '../../formulae/calculations'
import { CustomerInformation } from '../../model/entities'
import { YesNoRadioGroupState } from '../components/YesNoRadioGroup'
import { useFormik } from 'formik'
import { useCustomerInfo } from '../../context/QuoteContext'
import * as Yup from 'yup'

type Props = {}
const contentSteps = [
    {
        step: "Customer's Personal Information",
        narrative:
            'Asking personal information about the client.\nClient should have, Ghana Card, Drivers License, Passport, Voters ID, etc. for verification',
    },
    {
        step: 'Customers Income and Expenses',
        narrative:
            'Asking personal information about the client.\nClient should have, Ghana Card, Drivers License, Passport, Voters ID, etc. for verification',
    },
    {
        step: 'Customers Assets and Liabilities',
        narrative:
            'Asking personal information about the client.\nClient should have, Ghana Card, Drivers License, Passport, Voters ID, etc. for verification',
    },
    {
        step: 'Customers Cover Amount',
        narrative:
            'Asking personal information about the client.\nClient should have, Ghana Card, Drivers License, Passport, Voters ID, etc. for verification',
    },
    {
        step: 'Quote Summary',
        narrative:
            'Asking personal information about the client.\nClient should have, Ghana Card, Drivers License, Passport, Voters ID, etc. for verification',
    },
]
const NUMBER_OF_STEPS = 2
const ReadyToStartScreen = (props: Props) => {
    return (
        <View style={styles.container}>
            <Screen
                heading={'Life Application'}
                handleCancel={() => console.log('cancelled')}
            >
                <View style={styles.content}>
                    <ScrollView style={styles.content}>
                        <ContentIndex content={contentSteps} />
                    </ScrollView>
                </View>
                <View style={styles.footer}>
                    <NavigationBar
                        enableBackButton
                        enableNextButton={true}
                        onBackButtonPress={() => router.back()}
                        onNextButtonPress={() => {
                            router.push('/life/personaldetails')
                        }}
                    />
                </View>
            </Screen>
        </View>
    )
}

export default ReadyToStartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
    footer: {
        width: '100%',
        height: 150,
        padding: 20,
        position: 'relative',
        bottom: 0,
    },
})
