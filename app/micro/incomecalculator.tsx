import { StyleSheet, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { Text, TextInput } from '../../components/Themed'
import { globalStyles } from '../Styles/GlobalStyles'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const IncomeCalculator = () => {
    const formik = useFormik({
        initialValues: {
            income: 0,
        },
        validationSchema: Yup.object().shape({
            income: Yup.number(),
        }),
        onSubmit(values) {
            console.log(values)
        },
    })
    return (
        <View style={styles.container}>
            <ScrollView style={styles.contentContainer}>
                <View style={styles.content}>
                    <View style={globalStyles.editGroup}>
                        <Text style={globalStyles.label}>
                            How much do you earn
                        </Text>
                        <TextInput
                            style={
                                formik.errors.income
                                    ? globalStyles.input_error
                                    : globalStyles.input
                            }
                            placeholder="Title"
                            onChangeText={formik.handleChange('income')}
                            onBlur={formik.handleBlur('income')}
                            value={formik.values.income.toString()}
                        />
                        {formik.values.income && (
                            <Text style={globalStyles.error}>
                                {formik.errors.income}
                            </Text>
                        )}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default IncomeCalculator

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 20,
    },
})
