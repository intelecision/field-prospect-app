import { StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { FormikProps, useFormik } from 'formik'
import { globalStyles } from '../../Styles/GlobalStyles'
import { Text, TextInput } from '../../../components/Themed'
import { SavingsAndInvestments } from '../../../model/entities'
import { strToNumber } from '../../../formulae/calculations'

type Props = {
    formik: FormikProps<SavingsAndInvestments>
    setTotal: (total: number) => void
}

const SavingsOrInvestments = ({ formik, setTotal }: Props) => {
    const { values } = formik
    const { pensionAccount, investmentsAccount, other } = values

    useEffect(() => {
        calculateTotal()
    }, [formik.values])

    const calculateTotal = () => {
        let total = 0
        total += strToNumber(pensionAccount)
        total += strToNumber(investmentsAccount)
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
                <Text style={globalStyles.header_group_text}>
                    SAVINGS OR INVESTMENTS{' '}
                </Text>
            </View>
            <View style={styles.indentations}>
                <View style={globalStyles.editGroup}>
                    <Text style={globalStyles.label}>Pension Account</Text>
                    <TextInput
                        placeholder="0"
                        style={
                            formik.errors.pensionAccount // use formik object here
                                ? globalStyles.input_error
                                : globalStyles.input
                        }
                        onChangeText={formik.handleChange('pensionAccount')}
                        onBlur={formik.handleBlur('pensionAccount')}
                        value={formik.values.pensionAccount.toString()}
                        keyboardType="numbers-and-punctuation"
                    />
                    {formik.errors.pensionAccount && (
                        <Text style={globalStyles.error}>
                            {formik.errors.pensionAccount}
                        </Text>
                    )}
                </View>
                <View style={globalStyles.editGroup}>
                    <Text style={globalStyles.label}>Investments Account</Text>
                    <TextInput
                        placeholder="0"
                        style={
                            formik.errors.investmentsAccount // use formik object here
                                ? globalStyles.input_error
                                : globalStyles.input
                        }
                        onChangeText={formik.handleChange('investmentsAccount')}
                        onBlur={formik.handleBlur('investmentsAccount')}
                        value={formik.values.investmentsAccount.toString()}
                        keyboardType="numbers-and-punctuation"
                    />
                    {formik.errors.investmentsAccount && (
                        <Text style={globalStyles.error}>
                            {formik.errors.investmentsAccount}
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

export default SavingsOrInvestments

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
