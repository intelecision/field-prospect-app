import { KeyboardAvoidingView, StyleSheet, View, Platform } from 'react-native'
import React, { useEffect } from 'react'
import { globalStyles } from '../../Styles/GlobalStyles'
import { ScrollView } from 'react-native-gesture-handler'
import { Text, TextInput } from '../../../components/Themed'
import { FormikProps } from 'formik'
import Button from '../../../components/Button'

type Props = {
    formik: FormikProps<IncomeAndExpenses>
}

type IncomeAndExpenses = {
    monthlyIncome: number
    otherIncome: number
    monthlyExpenses: number
}

const FinancialInformation = ({ formik }: Props) => {
    const [incomeRange, setIncomeRange] = React.useState<number>(500)

    useEffect(() => {
        if (formik.values.monthlyIncome > 0) {
            setIncomeRange(formik.values.monthlyIncome)
        }
    }, [formik.values.monthlyIncome])

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
            >
                <ScrollView style={styles.content}>
                    <View
                        style={[
                            globalStyles.editGroup,
                            { paddingVertical: 20, paddingHorizontal: 10 },
                        ]}
                    >
                        <Text style={globalStyles.header_group_text}>
                            Where there are no actual figures, please ask
                            customer to provide a best estimates
                        </Text>
                    </View>

                    <View style={globalStyles.editGroup}>
                        <Text style={globalStyles.label}>Monthly Income</Text>
                        <TextInput
                            style={
                                formik.errors.monthlyIncome
                                    ? globalStyles.input_error
                                    : globalStyles.input
                            }
                            placeholder="Income"
                            onChangeText={formik.handleChange('monthlyIncome')}
                            onBlur={formik.handleBlur('monthlyIncome')}
                            value={formik.values.monthlyIncome.toString()}
                        />
                        {formik.values.monthlyIncome && (
                            <Text style={globalStyles.error}>
                                {formik.errors.monthlyIncome}
                            </Text>
                        )}
                    </View>
                    {/*<View style={globalStyles.editGroup}>
                        <Text style={globalStyles.label}>Other Income</Text>
                        <TextInput
                            style={
                                formik.errors.otherIncome
                                    ? globalStyles.input_error
                                    : globalStyles.input
                            }
                            keyboardType="numeric"
                            placeholder="Income"
                            onChangeText={formik.handleChange('otherIncome')}
                            onBlur={formik.handleBlur('otherIncome')}
                            value={formik.values.otherIncome.toString()}
                        />
                    </View>*/}
                    <View style={globalStyles.editGroup}>
                        {incomeRange < 500 && (
                            <Text
                                style={[
                                    globalStyles.label,
                                    { fontFamily: 'OpenSans_700Bold' },
                                ]}
                            >
                                Unfortunately we are unable to offer you a micro
                                insurance policy at this time.
                            </Text>
                        )}
                        {incomeRange > 1500 && (
                            <View style={{ paddingVertical: 40 }}>
                                <Text
                                    style={[
                                        globalStyles.label,
                                        { fontFamily: 'OpenSans_700Bold' },
                                    ]}
                                >
                                    Base on your income level, you qualify for a
                                    formal life insurance policy.
                                </Text>
                                <Button
                                    onPress={() => {}}
                                    title="Switch to Formal Life Insurance"
                                />
                            </View>
                        )}
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
}

export default FinancialInformation

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        paddingHorizontal: 10,
    },
})
