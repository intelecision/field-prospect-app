import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { globalStyles } from '../Styles/GlobalStyles'
import { FormikProps, useFormik } from 'formik'
import * as Yup from 'yup'
import { isDate, isValid, toDate } from 'date-fns'
import { is } from 'date-fns/locale'

type Props = {
    dateOfBirth: Date
    setDateOfBirth: (date: Date) => void
    formik: FormikProps<any>
}
interface DateStructure {
    day: string | string
    month: string | string
    year: number | string
}

const DateInput = ({ dateOfBirth, setDateOfBirth }: Props) => {
    const [innerDateOFfBirth, setInnerDateOfBirth] = useState<Date>(dateOfBirth)

    const padWithLeadingZero = (value: string) => {
        if (value.toString().length === 1) {
            return `0${value}`
        }
        return value
    }

    const formik = useFormik({
        initialValues: {
            day:
                dateOfBirth instanceof Date
                    ? padWithLeadingZero(dateOfBirth.getDate().toString())
                    : '',

            month:
                dateOfBirth instanceof Date
                    ? padWithLeadingZero(
                          (dateOfBirth.getMonth() + 1).toString()
                      )
                    : '',

            year:
                dateOfBirth instanceof Date
                    ? dateOfBirth.getFullYear().toString()
                    : '',
        },
        validationSchema: Yup.object({
            day: Yup.string()
                .min(1, 'Invalid day')
                .max(31, 'Invalid day')
                .required('Required'),
            month: Yup.string()
                .min(1, 'Invalid month')
                .max(12, 'Invalid month')
                .required('Required'),
            year: Yup.number()
                .min(1900, 'Invalid year')
                .max(2021, 'Invalid year')
                .required('Required'),
        }),

        onSubmit: (values: DateStructure) => {
            //console.log('formik Date', values)
        },
    })

    useEffect(() => {
        setDateOfBirth(dateOfBirth)

        //if (dateOfBirth || dateOfBirth instanceof Date) {
        const dob =
            dateOfBirth instanceof Date ? dateOfBirth : new Date(dateOfBirth)
    }, [])

    useEffect(() => {
        if (formik.values.day && formik.values.month && formik.values.year) {
            setDateOfBirth(
                new Date(
                    `${formik.values.year}-${formik.values.month}-${formik.values.day}`
                )
            )
            formik.setFieldValue(
                'dateOfBirth',
                new Date(
                    `${formik.values.year}-${formik.values.month}-${formik.values.day}`
                )
            )
            formik.handleSubmit()
        }
    }, [formik.values.day, formik.values.month, formik.values.year])

    useEffect(() => {
        if (isValidDate()) {
            setDateOfBirth(
                new Date(
                    `${formik.values.year}-${formik.values.month}-${formik.values.day}`
                )
            )
            formik.setFieldValue(
                'dateOfBirth',
                new Date(
                    `${formik.values.year}-${formik.values.month}-${formik.values.day}`
                )
            )
        }
    }, [formik.values.day, formik.values.month, formik.values.year])

    const isValidDate = () => {
        if (formik.values.day && formik.values.month && formik.values.year) {
            return isDate(
                new Date(
                    `${formik.values.year}-${formik.values.month}-${formik.values.day}`
                )
            )
        }
    }

    return (
        <View style={styles.content}>
            <Text style={styles.text}>Date of Birth</Text>
            <View style={styles.row}>
                <TextInput
                    placeholder="DD"
                    style={
                        formik.errors.day ? styles.input_error : styles.input
                    }
                    keyboardType="number-pad"
                    maxLength={2}
                    onBlur={formik.handleBlur('day')}
                    onChangeText={formik.handleChange('day')}
                    value={formik.values.day.toString()}
                    onSubmitEditing={() => {
                        formik.validateField('day')
                    }}
                />

                <TextInput
                    placeholder="MM"
                    style={
                        formik.errors.month ? styles.input_error : styles.input
                    }
                    keyboardType="number-pad"
                    maxLength={2}
                    onChangeText={formik.handleChange('month')}
                    onBlur={formik.handleBlur('month')}
                    value={formik.values.month.toString()}
                />

                <TextInput
                    placeholder="YYYY"
                    style={
                        formik.errors.year ? styles.input_error : styles.input
                    }
                    keyboardType="number-pad"
                    maxLength={4}
                    onBlur={formik.handleBlur('year')}
                    onChangeText={formik.handleChange('year')}
                    value={formik.values.year.toString()}
                />
            </View>
            <View
                style={{
                    marginBottom: 10,
                }}
            >
                {
                    <Text style={globalStyles.error}>
                        {formik.errors.day ||
                            formik.errors.month ||
                            formik.errors.year}
                    </Text>
                }
            </View>
        </View>
    )
}

export default DateInput

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        maxHeight: 60,
        marginBottom: 24,
        paddingHorizontal: 10,
    },
    text: {
        fontSize: 16,
        //fontWeight: 'bold',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    input: {
        marginHorizontal: 10,
        width: 55,
        height: 40,
        //padding: 6,
        borderColor: '#d3d3d3',
        //backgroundColor: 'red',
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 16,
        textAlign: 'center',
    },
    input_error: {
        marginHorizontal: 10,
        width: 55,
        height: 40,

        //backgroundColor: 'red',
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 16,
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})
