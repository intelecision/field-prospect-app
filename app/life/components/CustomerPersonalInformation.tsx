import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    View,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { FormikProps } from 'formik'
import { CustomerInformation } from '../../../model/entities'
import { globalStyles } from '../../Styles/GlobalStyles'
import AddressSection from '../../components/AddressSection'
import DateInput from '../../components/DateInput'
import {
    YesNoRadioGroupState,
    YesNoRadioGroup,
} from '../../components/YesNoRadioGroup'
import { Text, TextInput } from '../../components/Themed'

type Props = {
    formik: FormikProps<CustomerInformation>
}

const CustomerPersonalInformation = (props: Props) => {
    const { formik } = props
    const [dateOfBirth, setDateOfBirth] = useState<Date | string>('')
    const [isMale, setIsMale] = useState<YesNoRadioGroupState>(undefined)

    useEffect(() => {
        formik.setFieldValue('dateOfBirth', dateOfBirth)
        setIsMale(checkIfMale(formik.values.sex))
    }, [dateOfBirth])

    const checkIfMale = (sex: 'Male' | 'Female' | '') => {
        return formik.values.sex === 'Male' ? true : false
    }
    return (
        <View style={styles.container}>
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
                                onChangeText={formik.handleChange('ghanaCard')}
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
                                    new Date(formik.values.dateOfBirth)
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
                                style={{ marginHorizontal: 20, width: '50%' }}
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
                                        formik.setFieldValue('sex', 'Female')
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
                            <Text style={globalStyles.label}>Weight (kg)</Text>
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
                            <Text style={globalStyles.label}>Height (cm)</Text>
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
                                onChangeText={formik.handleChange('occupation')}
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
            </KeyboardAvoidingView>
        </View>
    )
}

export default CustomerPersonalInformation

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        //padding: 10,
    },
})
