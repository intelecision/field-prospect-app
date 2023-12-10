import { StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { FormikProps, useFormik } from 'formik'
import { globalStyles } from '../../Styles/GlobalStyles'
import { Text, TextInput } from '../../../components/Themed'
import { LoansAndDebts } from '../../../model/entities'
import { strToNumber } from '../../../formulae/calculations'

type Props = {
    formik: FormikProps<LoansAndDebts>
    setTotal: (total: number) => void
}
//creditCard: number
//studentLoan: number
//personalLoan: number
//other: number
const LoanRepayments = ({ formik, setTotal }: Props) => {
    const { values } = formik
    const { creditCard, studentLoan, personalLoan, other } = values

    useEffect(() => {
        calculateTotal()
    }, [formik.values])
    const calculateTotal = () => {
        let total = 0
        total += strToNumber(creditCard)
        total += strToNumber(studentLoan)
        total += strToNumber(personalLoan)
        total += strToNumber(other)
        setTotal(total)
    }
    return (
        <View>
            <View style={{ padding: 20 }}>
                <Text style={globalStyles.header_group_text}>
                    Where there are no actual figures, please ask customer to
                    provide a best estimates
                </Text>
            </View>
            <View style={globalStyles.header_group}>
                <Text style={globalStyles.header_group_text}>LOANS </Text>
            </View>
            <View style={styles.indentations}>
                <View style={globalStyles.editGroup}>
                    <Text style={globalStyles.label}>Person</Text>
                    <TextInput
                        placeholder="0"
                        style={
                            formik.errors.personalLoan // use formik object here
                                ? globalStyles.input_error
                                : globalStyles.input
                        }
                        onChangeText={formik.handleChange('personalLoan')}
                        onBlur={formik.handleBlur('personalLoan')}
                        value={formik.values.personalLoan.toString()}
                        keyboardType="numbers-and-punctuation"
                    />
                    {formik.errors.personalLoan && (
                        <Text style={globalStyles.error}>
                            {formik.errors.personalLoan}
                        </Text>
                    )}
                </View>
                <View style={globalStyles.editGroup}>
                    <Text style={globalStyles.label}>Student</Text>
                    <TextInput
                        placeholder="0"
                        style={
                            formik.errors.studentLoan // use formik object here
                                ? globalStyles.input_error
                                : globalStyles.input
                        }
                        onChangeText={formik.handleChange('studentLoan')}
                        onBlur={formik.handleBlur('studentLoan')}
                        value={formik.values.studentLoan.toString()}
                        keyboardType="numbers-and-punctuation"
                    />
                    {formik.errors.studentLoan && (
                        <Text style={globalStyles.error}>
                            {formik.errors.studentLoan}
                        </Text>
                    )}
                </View>
                <View style={globalStyles.editGroup}>
                    <Text style={globalStyles.label}>Credit Card</Text>
                    <TextInput
                        placeholder="0"
                        style={
                            formik.errors.creditCard // use formik object here
                                ? globalStyles.input_error
                                : globalStyles.input
                        }
                        onChangeText={formik.handleChange('creditCard')}
                        onBlur={formik.handleBlur('creditCard')}
                        value={formik.values.creditCard.toString()}
                        keyboardType="numbers-and-punctuation"
                    />
                    {formik.errors.creditCard && (
                        <Text style={globalStyles.error}>
                            {formik.errors.creditCard}
                        </Text>
                    )}
                </View>
                <View style={globalStyles.editGroup}>
                    <Text style={globalStyles.label}>Other</Text>
                    <TextInput
                        placeholder="0"
                        style={
                            formik.errors.other // use formik object here
                                ? globalStyles.input_error
                                : globalStyles.input
                        }
                        onChangeText={formik.handleChange('other')}
                        onBlur={formik.handleBlur('other')}
                        value={formik.values.other.toString()}
                        keyboardType="numbers-and-punctuation"
                    />
                    {formik.errors.other && (
                        <Text style={globalStyles.error}>
                            {formik.errors.other}
                        </Text>
                    )}
                </View>
            </View>
        </View>
    )
}

export default LoanRepayments

const styles = StyleSheet.create({
    container: {},
    indentations: {
        //  marginVertical: 20,
        marginHorizontal: 20,
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
})
