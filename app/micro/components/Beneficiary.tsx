import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { globalStyles } from '../../Styles/GlobalStyles'
import { TextInput } from '../../../components/Themed'
import AddressSection from './AddressSection'
import Button from '../../../components/Button'
import { ClientInformation } from '../../../model/entities'

type Props = {}

const Beneficiary = (props: Props) => {
    const formik = useFormik({
        initialValues: {
            title: 'Ms',
            firstName: 'Maame-Serwaa',
            middleName: 'Yaa',
            lastName: 'Appiah',
            address: ' Adenta housing down \n near the police station',
            city: 'Accra',
            region: 'Gt Accra',
            ghanaCard: 'GHA-729034927-4',
            postalCodeOrDigitalAddress: 'GT-029-0293',
            sex: 'Female',
            dateOfBirth: new Date(2003, 2, 1),
            weight: 78,
            height: 1.7,
            occupation: 'Tomato Trader',
            email: '',
            contactPhone: '',
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Title is required'),
            firstName: Yup.string().required('First name is required'),
            middleName: Yup.string().required('Middle name is required'),
            lastName: Yup.string().required('Last name is required'),
        }),
        onSubmit: (values: ClientInformation) => {
            console.log(values)
        },
    })
    return (
        <View style={styles.container}>
            <View style={globalStyles.header_group}>
                <Text style={globalStyles.header_group_text}>
                    BENEFICIARY INFORMATION
                </Text>
            </View>
            <View style={styles.containerContent}>
                <ScrollView style={styles.content}>
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
                        <Text style={globalStyles.label}>First name</Text>
                        <TextInput
                            style={
                                formik.errors.firstName
                                    ? globalStyles.input_error
                                    : globalStyles.input
                            }
                            placeholder="First name"
                            onChangeText={formik.handleChange('firstName')}
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
                        <Text style={globalStyles.label}>Middle name</Text>
                        <TextInput
                            style={
                                formik.errors.middleName
                                    ? globalStyles.input_error
                                    : globalStyles.input
                            }
                            placeholder="Middle name"
                            onChangeText={formik.handleChange('middleName')}
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
                        <Text style={globalStyles.label}>Last name</Text>
                        <TextInput
                            style={
                                formik.errors.lastName
                                    ? globalStyles.input_error
                                    : globalStyles.input
                            }
                            placeholder="Last name"
                            onChangeText={formik.handleChange('lastName')}
                            onBlur={formik.handleBlur('lastName')}
                            value={formik.values.lastName}
                        />
                        {formik.errors.lastName && (
                            <Text style={globalStyles.error}>
                                {formik.errors.lastName}
                            </Text>
                        )}
                    </View>
                    <AddressSection formik={formik} />
                </ScrollView>
            </View>
            <View style={styles.footer}>
                <Button
                    title="Add Beneficiary"
                    onPress={formik.handleSubmit}
                    //disabled={!formik.isValid}
                />
            </View>
        </View>
    )
}

export default Beneficiary

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerContent: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 20,
    },
    footer: {
        height: 100,
        padding: 10,
    },
})
