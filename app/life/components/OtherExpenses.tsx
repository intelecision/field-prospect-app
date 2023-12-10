import { StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { FormikProps, useFormik } from 'formik'
import { globalStyles } from '../../Styles/GlobalStyles'
import { Text, TextInput } from '../../../components/Themed'
import { OtherExpenses } from '../../../model/entities'
import { strToNumber } from '../../../formulae/calculations'

type Props = {
    formik: FormikProps<OtherExpenses>
    setTotal(total: number): void
}

const OtherPersonalExpenses = ({ formik, setTotal }: Props) => {
    const { values } = formik
    const {
        childrenEducationFees,
        healthCare,
        otherEducationalExpenses,
        LifeInsurancePremiums,
    } = values

    useEffect(() => {
        calculateTotal()
    }, [formik.values])

    const calculateTotal = () => {
        let total = 0
        total += strToNumber(childrenEducationFees)
        total += strToNumber(healthCare)
        total += strToNumber(otherEducationalExpenses)
        total += strToNumber(LifeInsurancePremiums)
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
                    OTHER EXPENSES{' '}
                </Text>
            </View>
            <View style={styles.indentations}>
                <View style={globalStyles.editGroup}>
                    <Text style={globalStyles.label}>Health Care</Text>
                    <TextInput
                        placeholder="0"
                        style={
                            formik.errors.healthCare // use formik object here
                                ? globalStyles.input_error
                                : globalStyles.input
                        }
                        onChangeText={formik.handleChange('healthCare')}
                        onBlur={formik.handleBlur('healthCare')}
                        value={formik.values.healthCare.toString()}
                        keyboardType="numbers-and-punctuation"
                    />
                    {formik.errors.healthCare && (
                        <Text style={globalStyles.error}>
                            {formik.errors.healthCare}
                        </Text>
                    )}
                </View>
                <View style={globalStyles.editGroup}>
                    <Text style={globalStyles.label}>
                        Children Education Fees
                    </Text>
                    <TextInput
                        placeholder="0"
                        style={
                            formik.errors.childrenEducationFees // use formik object here
                                ? globalStyles.input_error
                                : globalStyles.input
                        }
                        onChangeText={formik.handleChange(
                            'childrenEducationFees'
                        )}
                        onBlur={formik.handleBlur('childrenEducationFees')}
                        value={formik.values.childrenEducationFees.toString()}
                        keyboardType="numbers-and-punctuation"
                    />
                    {formik.errors.childrenEducationFees && (
                        <Text style={globalStyles.error}>
                            {formik.errors.childrenEducationFees}
                        </Text>
                    )}
                </View>
                <View style={globalStyles.editGroup}>
                    <Text style={globalStyles.label}>
                        Other Educational Expenses
                    </Text>
                    <TextInput
                        placeholder="0"
                        style={
                            formik.errors.otherEducationalExpenses // use formik object here
                                ? globalStyles.input_error
                                : globalStyles.input
                        }
                        onChangeText={formik.handleChange(
                            'otherEducationalExpenses'
                        )}
                        onBlur={formik.handleBlur('otherEducationalExpenses')}
                        value={formik.values.otherEducationalExpenses.toString()}
                        keyboardType="numbers-and-punctuation"
                    />
                    {formik.errors.otherEducationalExpenses && (
                        <Text style={globalStyles.error}>
                            {formik.errors.otherEducationalExpenses}
                        </Text>
                    )}
                </View>
                <View style={globalStyles.editGroup}>
                    <Text style={globalStyles.label}>
                        Life Insurance Premiums
                    </Text>
                    <TextInput
                        placeholder="0"
                        style={
                            formik.errors.LifeInsurancePremiums // use formik object here
                                ? globalStyles.input_error
                                : globalStyles.input
                        }
                        onChangeText={formik.handleChange(
                            'LifeInsurancePremiums'
                        )}
                        onBlur={formik.handleBlur('LifeInsurancePremiums')}
                        value={formik.values.LifeInsurancePremiums.toString()}
                        keyboardType="numbers-and-punctuation"
                    />
                    {formik.errors.LifeInsurancePremiums && (
                        <Text style={globalStyles.error}>
                            {formik.errors.LifeInsurancePremiums}
                        </Text>
                    )}
                </View>
            </View>
        </View>
    )
}

export default OtherPersonalExpenses

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
