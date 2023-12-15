import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    View,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput, Text } from '../../components/Themed'
import { globalStyles } from '../Styles/GlobalStyles'
import * as Yup from 'yup'

import { useFormik } from 'formik'
import MicroScreen from './components/MicroScreen'
import { router, useNavigation } from 'expo-router'

import CameraControl from '../../components/CameraControl'
import DateInput from '../components/DateInput'
import {
    YesNoRadioGroup,
    YesNoRadioGroupState,
} from '../components/YesNoRadioGroup'
import AddressSection from '../components/AddressSection'
import ContentIndex from './components/ContentIndex'
import NavigationBar from '../../components/NavigationBar'

const contentSteps = [
    //{
    //    step: 'Introduction',
    //    narrative: 'Sales pitch to the client\n Video Introduction',
    //},
    {
        step: 'Personal Information',
        narrative:
            'Asking personal information about the client.\nClient should have, Ghana Card, Drivers License, Passport, Voters ID, etc. for verification',
    },
    {
        step: 'Beneficiary',
        narrative:
            'Asking the client the beneficiary details,\n client should have, the beneficiary details, etc',
    },
    {
        step: 'Financial Information',
        narrative:
            'Asking financial information about the client.\nClient should have, Income Bank or Mobile Money Account Number, Bank Name, Bank Branch, etc. for verification',
    },
    {
        step: 'Cover Amount',
        narrative:
            'Asking the client the amount of cover he/she wants.\nClient should have, the amount of cover he/she wants, etc',
    },

    {
        step: 'Underwriting',
        narrative: 'Asking the client of His/Her health current status.\n ',
    },
    {
        step: 'Summary',
        narrative: 'A summary of the product sold to the client.\n ',
    },
    {
        step: 'Declaration',
        narrative:
            'Asking the client to accept the the information details.\n ',
    },

    {
        step: 'Payment',
        narrative:
            'Asking the client to make payment.\nClient can use any of the payment methods, Mobile Money, Bank Account, etc',
    },
]

const MicroProspectPage = () => {
    return (
        <>
            <MicroScreen
                heading="Application content"
                onCancel={() => router.push('/(tabs)')}
            >
                <ScrollView style={styles.content}>
                    <ContentIndex content={contentSteps} />
                </ScrollView>
            </MicroScreen>
            <View style={{ height: 120, padding: 10 }}>
                <NavigationBar
                    enableBackButton
                    enableNextButton={true}
                    onBackButtonPress={() => router.back()}
                    onNextButtonPress={() => {
                        router.push('/micro/microwizard')
                    }}
                />
            </View>
        </>
    )
}

export default MicroProspectPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        //padding: 10,
    },
})
