import { StyleSheet, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../../Styles/GlobalStyles'
import { TextInput, Text } from '../../../components/Themed'
import { useQuoteContextType } from '../../../context/QuoteContext'
import { FormikProps } from 'formik'
import { set } from 'date-fns'
import { strToNumber } from '../../../formulae/calculations'
import { Obligations } from '../../../model/entities'

type Props = {
    formik: FormikProps<Obligations>
    setTotal(total: number): void
}

const PersonalObligations = ({ formik, setTotal }: Props) => {
    const {
        setAssetAndLiabilities,
        assetAndLiabilities,
        personalMonthlyExpenses,
    } = useQuoteContextType()

    React.useEffect(() => {
        setAssetAndLiabilities({
            ...assetAndLiabilities,
            otherDebtObligations: strToNumber(
                formik.values.otherDebtObligations
            ),
            loansOutstanding: strToNumber(formik.values.loansOutstanding),
            mortgageOutstanding: strToNumber(formik.values.mortgageOutstanding),
        })
        setTotal(
            strToNumber(formik.values.otherDebtObligations) +
                strToNumber(formik.values.loansOutstanding) +
                strToNumber(formik.values.mortgageOutstanding)
        )
    }, [formik.values])

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
                    FINANCIAL OBLIGATIONS
                </Text>
            </View>
            {personalMonthlyExpenses.houseAndUtilities.isMortgageOrRent && (
                <>
                    <View style={globalStyles.editGroup}>
                        <Text style={globalStyles.label}>
                            Mortgage outstanding
                        </Text>
                        <TextInput
                            style={
                                formik.errors.mortgageOutstanding
                                    ? globalStyles.input_error
                                    : globalStyles.input
                            }
                            placeholder="0"
                            keyboardType="numeric"
                            onChangeText={formik.handleChange(
                                'mortgageOutstanding'
                            )}
                            value={formik.values.mortgageOutstanding.toString()}
                        />
                        {formik.errors.mortgageOutstanding && (
                            <Text style={globalStyles.error}>
                                {formik.errors.mortgageOutstanding}
                            </Text>
                        )}
                    </View>
                </>
            )}
            <View style={globalStyles.editGroup}>
                <Text style={globalStyles.label}>Loans outstanding</Text>
                <TextInput
                    style={
                        formik.errors.loansOutstanding
                            ? globalStyles.input_error
                            : globalStyles.input
                    }
                    placeholder="0"
                    keyboardType="numeric"
                    value={formik.values.loansOutstanding.toString()}
                    onChangeText={formik.handleChange('loansOutstanding')}
                    onBlur={formik.handleBlur('loansOutstanding')}
                />
                {formik.errors.loansOutstanding && (
                    <Text style={globalStyles.error}>
                        {formik.errors.loansOutstanding}
                    </Text>
                )}
            </View>
            <View style={globalStyles.editGroup}>
                <Text style={globalStyles.label}>Other debt/obligations</Text>
                <TextInput
                    style={
                        formik.errors.otherDebtObligations
                            ? globalStyles.input_error
                            : globalStyles.input
                    }
                    placeholder="0"
                    keyboardType="numeric"
                    value={formik.values.otherDebtObligations.toString()}
                    onChangeText={formik.handleChange('otherDebtObligations')}
                    onBlur={formik.handleBlur('otherDebtObligations')}
                />
                {formik.errors.otherDebtObligations && (
                    <Text style={globalStyles.error}>
                        {formik.errors.otherDebtObligations}
                    </Text>
                )}
            </View>
        </View>
    )
}

export default PersonalObligations

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        flex: 1,
        paddingTop: 20,
        marginVertical: 20,
        paddingBottom: 40,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
})
