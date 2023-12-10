import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { globalStyles } from '../../../Styles/GlobalStyles'

import { TextInput } from '../../../../components/Themed'
import Checkbox from 'expo-checkbox'
import DateInput from '../../../components/DateInput'
import { YesNoRadioGroup } from '../../../components/YesNoRadioGroup'
import * as yup from 'yup'
import { useCustomerQuestionnaireContext } from '../../../../context/QuestionnaireContext'
import { FormikProps, useFormik } from 'formik'
import {
    CustomerInfoQuestionnaire,
    CustomerInfoQuestionnaireExt,
} from '../../../../model/entities'
import { isToday } from 'date-fns'
import * as Yup from 'yup'
import { Stack } from 'expo-router'
import { strToNumber } from '../../../../formulae/calculations'
import YesNoQuestionnaire from '../../../components/YesNoQuestionare'

type Props = {
    formik: FormikProps<CustomerInfoQuestionnaire>
}

const PersonalInfo = ({ formik }: Props) => {
    const { customerInfoQuestionnaire, setCustomerInfoQuestionnaire } =
        useCustomerQuestionnaireContext()
    const [isMarried, setMarried] = useState(false)
    const [hasChildren, setHasChildren] = useState(false)
    //const [dateOfBirth, setDateOfBirth] = useState(new Date())

    useEffect(() => {
        if (formik.values.height) {
            formik.setFieldValue('height', strToNumber(formik.values.height))
        }
        if (formik.values.weight) {
            formik.setFieldValue('weight', strToNumber(formik.values.weight))
        }
    }, [formik.values.height, formik.values.weight])

    return (
        <View style={{ flex: 1 }}>
            <View style={globalStyles.header_group}>
                <Text style={globalStyles.header_group_text}>
                    PERSONAL INFORMATION
                </Text>
            </View>
            <View style={globalStyles.indentations}>
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
                    <Text style={globalStyles.label}>Occupation</Text>
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
                <View style={globalStyles.editGroup}>
                    <Text style={globalStyles.label}>Name of employer</Text>
                    <TextInput
                        placeholder="ABC Company Ltd"
                        style={
                            formik.errors.nameOfEmployer // use formik object here
                                ? globalStyles.input_error
                                : globalStyles.input
                        }
                        value={formik.values.nameOfEmployer}
                        onBlur={formik.handleBlur('nameOfEmployer')}
                        onChangeText={formik.handleChange('nameOfEmployer')}
                    />
                    {formik.errors.nameOfEmployer && (
                        <Text style={globalStyles.error}>
                            {formik.errors.nameOfEmployer}
                        </Text>
                    )}
                </View>
                <View style={globalStyles.editGroup}>
                    <Text style={globalStyles.label}>
                        What is your highest level of education
                    </Text>
                    <TextInput
                        placeholder="Bsc in Computer Science"
                        style={
                            formik.errors.highestLevelEducation // use formik object here
                                ? globalStyles.input_error
                                : globalStyles.input
                        }
                        value={formik.values.highestLevelEducation}
                        onBlur={formik.handleBlur('highestLevelEducation')}
                        onChangeText={formik.handleChange(
                            'highestLevelEducation'
                        )}
                    />
                    {formik.errors.highestLevelEducation && (
                        <Text style={globalStyles.error}>
                            {formik.errors.highestLevelEducation}
                        </Text>
                    )}
                </View>

                <View style={globalStyles.editGroup}>
                    <YesNoQuestionnaire
                        question="Are you married or single?"
                        state={isMarried}
                        isRow={false}
                        labelYes="Yes, I am married"
                        labelNo="No, I am single"
                        onPressYes={() => {
                            setMarried(true)
                            formik.setFieldValue('maritalStatus', 'Married')
                        }}
                        onPressNo={() => {
                            setMarried(false)
                            formik.setFieldValue('maritalStatus', 'Single')
                        }}
                    />
                </View>
                <View style={globalStyles.editGroup}>
                    <YesNoQuestionnaire
                        isRow={false}
                        question="Do you have any Children?"
                        state={hasChildren}
                        labelYes="Yes, I do"
                        labelNo="No, I don't"
                        onPressYes={() => {
                            setHasChildren(true)
                            formik.setFieldValue('hasChildren', true)
                        }}
                        onPressNo={() => {
                            setHasChildren(false)
                            formik.setFieldValue('hasChildren', false)
                        }}
                    />
                </View>
            </View>
        </View>
    )
}

export default PersonalInfo

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
})
