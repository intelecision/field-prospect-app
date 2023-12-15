import {
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
} from 'react-native'
import React, { useState } from 'react'
import NavigationBar from '../../components/NavigationBar'
import { router } from 'expo-router'
import { globalStyles } from './../Styles/GlobalStyles'
import { TextInput, Text } from '../../components/Themed'
import { AntDesign } from '@expo/vector-icons'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
    YesNoRadioGroup,
    YesNoRadioGroupState,
} from '../components/YesNoRadioGroup'
import DateInput from '../components/DateInput'
import {
    todayMinus18years,
    todayMinus75years,
} from '../../formulae/calculations'
import { useCustomerInfo } from '../../context/QuoteContext'
import { CustomerInfo } from '../../model/Quotes'
import Screen from './components/Screen'
import { CustomerInformation } from '../../model/entities'
import AddressSection from '../components/AddressSection'

const PersonalDetails = () => {
    const { customerInfo, setCustomerInfo } = useCustomerInfo()
    const [isMale, setIsMale] = useState<YesNoRadioGroupState>(undefined)
    const [dateOfBirth, setDateOfBirth] = React.useState<Date | string>(
        new Date('1960-01-01')
    )
    const [inputHeight, setInputHeight] = React.useState(0)

    const formik = useFormik({
        initialValues: {
            title: 'Mr',
            firstName: 'Frank',
            lastName: 'Nyame',
            middleName: 'Kwame',
            sex: 'Male',
            email: 'nyame@yahoo.com',
            contactPhone: '022899997777',
            dateOfBirth: new Date(dateOfBirth),
            address: '',
            city: '',
            region: '',
            postalCodeOrDigitalAddress: '',
            occupation: '',
            ghanaCard: '0000000000',
            weight: 0,
            height: 0,
        },
        validationSchema: Yup.object().shape({
            title: Yup.string()
                .min(2, 'Title must be more than 2 characters')
                .max(5, 'Title must be less than 5 characters')
                .required('Required field'),
            firstName: Yup.string()
                .min(3, 'First name must be more than 3 characters')
                .required('Required field'),
            middleName: Yup.string()
                .min(3, 'Middle name must be at least 3 characters')
                .max(50),
            lastName: Yup.string()
                .min(3, 'Last name must be at least 3 characters')
                .required('Required field'),
            contactPhone: Yup.string()
                .min(10, 'number too short!')
                .required('Required field'),
            sex: Yup.string().required('Required field'),
            email: Yup.string()
                .email('Invalid email')
                .required('Required field'),
            dateOfBirth: Yup.date()
                .min(
                    new Date(todayMinus75years()),
                    'You must be between 18  and 75 years or younger'
                )
                .max(
                    new Date(todayMinus18years()),
                    'You must be 18 years or older'
                )
                .required('Required field'),
        }),
        onSubmit(values: CustomerInformation) {
            setCustomerInfo(values)
            router.push('/life/budgetwizardform')
        },
    })

    React.useEffect(() => {
        if (dateOfBirth) {
            formik.setFieldValue('dateOfBirth', dateOfBirth)
        }
    }, [dateOfBirth])

    return (
        <Screen heading={''} handleCancel={() => {}}>
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.container}
                >
                    <ScrollView style={styles.content}>
                        <View style={globalStyles.header_group}>
                            <Text style={globalStyles.header_group_text}>
                                PERSONAL INFORMATION
                            </Text>
                        </View>
                        <View style={styles.content}>
                            <View style={globalStyles.editGroup}>
                                <Text style={globalStyles.label}>Title</Text>
                                <TextInput
                                    style={
                                        formik.errors.title
                                            ? globalStyles.input_error
                                            : globalStyles.input
                                    }
                                    placeholder="Title"
                                    onChangeText={formik.handleChange('title')}
                                    onBlur={formik.handleBlur('title')}
                                    value={formik.values.title}
                                />
                                {formik.values.title && (
                                    <Text style={globalStyles.error}>
                                        {formik.errors.title}
                                    </Text>
                                )}
                            </View>
                            <View style={globalStyles.editGroup}>
                                <Text style={globalStyles.label}>
                                    First name
                                </Text>
                                <TextInput
                                    style={
                                        formik.errors.firstName
                                            ? globalStyles.input_error
                                            : globalStyles.input
                                    }
                                    placeholder="First name"
                                    onChangeText={formik.handleChange(
                                        'firstName'
                                    )}
                                    onBlur={formik.handleBlur('firstName')}
                                    value={formik.values.firstName}
                                />
                                {formik.errors.firstName && (
                                    <Text style={globalStyles.error}>
                                        {formik.errors.firstName}
                                    </Text>
                                )}
                            </View>
                            <View style={globalStyles.editGroup}>
                                <Text style={globalStyles.label}>
                                    Middle name
                                </Text>
                                <TextInput
                                    style={
                                        formik.errors.middleName
                                            ? globalStyles.input_error
                                            : globalStyles.input
                                    }
                                    placeholder="Middle name"
                                    onChangeText={formik.handleChange(
                                        'middleName'
                                    )}
                                    onBlur={formik.handleBlur('middleName')}
                                    value={formik.values.middleName}
                                />
                                {formik.errors.middleName && (
                                    <Text style={globalStyles.error}>
                                        {formik.errors.middleName}
                                    </Text>
                                )}
                            </View>
                            <View style={globalStyles.editGroup}>
                                <Text style={globalStyles.label}>
                                    Last name
                                </Text>
                                <TextInput
                                    style={
                                        formik.errors.lastName
                                            ? globalStyles.input_error
                                            : globalStyles.input
                                    }
                                    placeholder="Last name"
                                    onChangeText={formik.handleChange(
                                        'lastName'
                                    )}
                                    onBlur={formik.handleBlur('lastName')}
                                    value={formik.values.lastName}
                                />
                                {formik.errors.lastName && (
                                    <Text style={globalStyles.error}>
                                        {formik.errors.lastName}
                                    </Text>
                                )}
                            </View>
                            <View style={globalStyles.editGroup}>
                                <Text style={globalStyles.label}>
                                    Ghana Card No.
                                </Text>
                                <TextInput
                                    style={
                                        formik.errors.ghanaCard
                                            ? globalStyles.input_error
                                            : globalStyles.input
                                    }
                                    placeholder="Ghana Card Number"
                                    onChangeText={formik.handleChange(
                                        'ghanaCard'
                                    )}
                                    onBlur={formik.handleBlur('ghanaCard')}
                                    value={formik.values.ghanaCard}
                                />
                                {formik.errors.ghanaCard && (
                                    <Text style={globalStyles.error}>
                                        {formik.errors.ghanaCard}
                                    </Text>
                                )}
                            </View>
                            <View style={globalStyles.editGroup}>
                                <DateInput
                                    dateOfBirth={
                                        formik.values.dateOfBirth
                                        //new Date()
                                    }
                                    setDateOfBirth={setDateOfBirth}
                                    formik={formik}
                                />
                                {formik.errors.dateOfBirth && (
                                    <Text style={[globalStyles.error]}>
                                        {formik.errors.dateOfBirth}
                                    </Text>
                                )}
                            </View>
                            <View style={[globalStyles.editGroup]}>
                                <Text style={globalStyles.label}>
                                    Are you male or female?
                                </Text>
                                <View
                                    style={{
                                        marginHorizontal: 20,
                                        width: '50%',
                                    }}
                                >
                                    <YesNoRadioGroup
                                        labelYes="Male"
                                        labelNo="Female"
                                        state={isMale}
                                        isRow={true}
                                        onPressYes={() => {
                                            formik.setFieldValue('sex', 'Male')
                                            setIsMale(true)
                                        }}
                                        onPressNo={function (): void {
                                            formik.setFieldValue(
                                                'sex',
                                                'Female'
                                            )
                                            setIsMale(false)
                                        }}
                                    />
                                </View>
                                {formik.errors.sex && (
                                    <Text style={globalStyles.error}>
                                        {formik.errors.sex}
                                    </Text>
                                )}
                            </View>
                            <View style={globalStyles.editGroup}>
                                <Text style={globalStyles.label}>
                                    Weight (kg)
                                </Text>
                                <TextInput
                                    placeholder="0"
                                    style={
                                        formik.errors.weight // use formik object here
                                            ? globalStyles.input_error
                                            : globalStyles.input
                                    }
                                    keyboardType="numbers-and-punctuation"
                                    value={String(formik.values.weight)}
                                    onBlur={formik.handleBlur('weight')}
                                    onChangeText={formik.handleChange('weight')}
                                />
                                {formik.errors.weight && (
                                    <Text style={globalStyles.error}>
                                        {formik.errors.weight}
                                    </Text>
                                )}
                            </View>
                            <View style={globalStyles.editGroup}>
                                <Text style={globalStyles.label}>
                                    Height (cm)
                                </Text>
                                <TextInput
                                    placeholder="0"
                                    style={
                                        formik.errors.height // use formik object here
                                            ? globalStyles.input_error
                                            : globalStyles.input
                                    }
                                    keyboardType="numbers-and-punctuation"
                                    value={String(formik.values.height)}
                                    onBlur={formik.handleBlur('height')}
                                    onChangeText={formik.handleChange('height')}
                                />
                                {formik.errors.height && (
                                    <Text style={globalStyles.error}>
                                        {formik.errors.height}
                                    </Text>
                                )}
                            </View>
                            <View style={globalStyles.editGroup}>
                                <Text style={globalStyles.label}>
                                    What type do you do
                                </Text>
                                <TextInput
                                    placeholder=" Field Engineer"
                                    style={
                                        formik.errors.occupation // use formik object here
                                            ? globalStyles.input_error
                                            : globalStyles.input
                                    }
                                    value={formik.values.occupation}
                                    onBlur={formik.handleBlur('occupation')}
                                    onChangeText={formik.handleChange(
                                        'occupation'
                                    )}
                                />

                                {formik.errors.occupation && (
                                    <Text style={globalStyles.error}>
                                        {formik.errors.occupation}
                                    </Text>
                                )}
                            </View>
                            <AddressSection formik={formik} />
                        </View>
                    </ScrollView>
                    <View style={styles.footer}>
                        <NavigationBar
                            enableBackButton
                            enableNextButton={true}
                            onBackButtonPress={() => router.back()}
                            onNextButtonPress={() => {
                                router.push('/life/budgetwizardform')
                            }}
                        />
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </Screen>
    )
}

export default PersonalDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //    backgroundColor: '#f8f8f8',
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        //paddingHorizontal: 20,
    },
    contentContainer: {
        flex: 1,
        paddingTop: 20,
    },
    title: {
        fontFamily: 'OpenSans',
        marginBottom: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
    heading_1: {
        fontFamily: 'OpenSans',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    heading_2: {
        fontFamily: 'OpenSans',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    bullet: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    group: {
        //marginTop: 10,
    },
    section: {
        fontFamily: 'OpenSans',
        fontSize: 16,
        marginBottom: 10,
    },
    footer: {
        width: '100%',

        height: 110,
        paddingTop: 20,
        position: 'relative',
        bottom: 0,
    },
})
