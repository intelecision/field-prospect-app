import {
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
} from 'react-native'
import React from 'react'
import NavigationBar from '../../components/NavigationBar'
import { router } from 'expo-router'
import { globalStyles } from './../Styles/GlobalStyles'
import { TextInput, Text } from '../../components/Themed'
import { AntDesign } from '@expo/vector-icons'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { YesNoRadioGroup } from '../components/YesNoRadioGroup'
import DateInput from '../components/DateInput'
import {
    todayMinus18years,
    todayMinus75years,
} from '../../formulae/calculations'
import { useCustomerInfo } from '../../context/QuoteContext'
import { CustomerInfo } from '../../model/Quotes'
import Screen from './components/Screen'

const PersonalDetails = () => {
    const { customerInfo, setCustomerInfo } = useCustomerInfo()

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
            country: '',
            postalCodeOrDigitalAddress: '',
            occupation: '',
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
        onSubmit(values: CustomerInfo) {
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
                    <View
                        style={[
                            {
                                justifyContent: 'center',
                                backgroundColor: '#00A3AD',
                                alignItems: 'center',
                                height: 120,
                            },
                        ]}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <AntDesign name="contacts" size={30} color="#fff" />
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: '#fff',
                                    marginLeft: 10,
                                }}
                            >
                                Customer Information
                            </Text>
                        </View>
                        <Text style={{ fontSize: 16, color: '#fff' }}>
                            Ask the customer for the following information
                        </Text>
                        {/*<Progress currentStep={4} numberOfSteps={4} />*/}
                    </View>
                    <View style={styles.container}>
                        <ScrollView style={styles.contentContainer}>
                            <View style={styles.content}>
                                <View style={globalStyles.editGroup}>
                                    <Text style={globalStyles.label}>
                                        Title
                                    </Text>
                                    <TextInput
                                        style={
                                            formik.errors.title
                                                ? globalStyles.input_error
                                                : globalStyles.input
                                        }
                                        placeholder="Title"
                                        onChangeText={formik.handleChange(
                                            'title'
                                        )}
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
                                        Address
                                    </Text>
                                    <TextInput
                                        style={
                                            formik.errors.address
                                                ? globalStyles.input_error
                                                : {
                                                      ...globalStyles.input,
                                                      height: Math.max(
                                                          50,
                                                          inputHeight
                                                      ),
                                                  }
                                        }
                                        multiline
                                        placeholder="Address"
                                        onChangeText={formik.handleChange(
                                            'address'
                                        )}
                                        onBlur={formik.handleBlur('address')}
                                        value={formik.values.address}
                                        onContentSizeChange={(event) => {
                                            setInputHeight(
                                                event.nativeEvent.contentSize
                                                    .height
                                            )
                                            //console.log(
                                            //    event.nativeEvent.contentSize.height
                                            //)
                                        }}
                                    />
                                    {formik.errors.address && (
                                        <Text style={globalStyles.error}>
                                            {formik.values.address}
                                        </Text>
                                    )}
                                </View>
                                <View style={globalStyles.editGroup}>
                                    <Text style={globalStyles.label}>City</Text>
                                    <TextInput
                                        style={
                                            formik.errors.city
                                                ? globalStyles.input_error
                                                : {
                                                      ...globalStyles.input,
                                                  }
                                        }
                                        placeholder="City"
                                        onChangeText={formik.handleChange(
                                            'city'
                                        )}
                                        onBlur={formik.handleBlur('city')}
                                        value={formik.values.city}
                                    />
                                    {formik.errors.city && (
                                        <Text style={globalStyles.error}>
                                            {formik.values.city}
                                        </Text>
                                    )}
                                </View>
                                <View style={globalStyles.editGroup}>
                                    <Text style={globalStyles.label}>
                                        Region
                                    </Text>
                                    <TextInput
                                        style={
                                            formik.errors.region
                                                ? globalStyles.input_error
                                                : {
                                                      ...globalStyles.input,
                                                  }
                                        }
                                        placeholder="Region"
                                        onChangeText={formik.handleChange(
                                            'region'
                                        )}
                                        onBlur={formik.handleBlur('region')}
                                        value={formik.values.region}
                                    />
                                    {formik.errors.region && (
                                        <Text style={globalStyles.error}>
                                            {formik.values.region}
                                        </Text>
                                    )}
                                </View>
                                <View style={globalStyles.editGroup}>
                                    <Text style={globalStyles.label}>
                                        Postal Code
                                    </Text>
                                    <TextInput
                                        style={
                                            formik.errors
                                                .postalCodeOrDigitalAddress
                                                ? globalStyles.input_error
                                                : {
                                                      ...globalStyles.input,
                                                  }
                                        }
                                        placeholder="postal Code Or DigitalAddress"
                                        onChangeText={formik.handleChange(
                                            'postalCodeOrDigitalAddress'
                                        )}
                                        onBlur={formik.handleBlur(
                                            'postalCodeOrDigitalAddress'
                                        )}
                                        value={
                                            formik.values
                                                .postalCodeOrDigitalAddress
                                        }
                                    />
                                    {formik.errors
                                        .postalCodeOrDigitalAddress && (
                                        <Text style={globalStyles.error}>
                                            {
                                                formik.values
                                                    .postalCodeOrDigitalAddress
                                            }
                                        </Text>
                                    )}
                                </View>
                                <View style={globalStyles.editGroup}>
                                    <DateInput
                                        dateOfBirth={dateOfBirth}
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
                                    <View style={{ marginHorizontal: 20 }}>
                                        <YesNoRadioGroup
                                            labelYes="Male"
                                            labelNo="Female"
                                            state={true}
                                            isRow={false}
                                            onPressYes={() => {
                                                formik.setFieldValue(
                                                    'sex',
                                                    'Female'
                                                )
                                            }}
                                            onPressNo={function (): void {
                                                formik.setFieldValue(
                                                    'sex',
                                                    'Male'
                                                )
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
                                        Email
                                    </Text>
                                    <TextInput
                                        style={
                                            formik.errors.email
                                                ? globalStyles.input_error
                                                : globalStyles.input
                                        }
                                        placeholder="Email address"
                                        keyboardType="email-address"
                                        onChangeText={formik.handleChange(
                                            'email'
                                        )}
                                        onBlur={formik.handleBlur('email')}
                                        value={formik.values.email}
                                    />
                                    {formik.errors.email && (
                                        <Text style={globalStyles.error}>
                                            {formik.errors.email}
                                        </Text>
                                    )}
                                </View>
                                <View style={globalStyles.editGroup}>
                                    <Text style={globalStyles.label}>
                                        Contact phone
                                    </Text>
                                    <TextInput
                                        style={
                                            formik.errors.contactPhone
                                                ? globalStyles.input_error
                                                : globalStyles.input
                                        }
                                        placeholder="Contact phone"
                                        keyboardType="phone-pad"
                                        onChangeText={formik.handleChange(
                                            'contactPhone'
                                        )}
                                        onBlur={formik.handleBlur(
                                            'contactPhone'
                                        )}
                                        value={formik.values.contactPhone}
                                    />
                                    {formik.errors.contactPhone && (
                                        <Text style={globalStyles.error}>
                                            {formik.values.contactPhone}
                                        </Text>
                                    )}
                                </View>
                            </View>
                        </ScrollView>
                        <NavigationBar
                            enableBackButton
                            enableNextButton
                            onNextButtonPress={() => {
                                formik.handleSubmit()
                            }}
                            onBackButtonPress={() => router.back()}
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
        paddingHorizontal: 20,
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
})
