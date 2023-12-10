import {
    KeyboardAvoidingView,
    NativeSyntheticEvent,
    Platform,
    SafeAreaView,
    StyleSheet,
    TextInputChangeEventData,
    View,
} from 'react-native'
import React, { useEffect } from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { Text } from '../../components/Themed'

import NavigationBar from '../../components/NavigationBar'
import { router } from 'expo-router'
import { globalStyles } from '../Styles/GlobalStyles'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
    useQuoteContext,
    QuoteContext,
    useAssetAndLiabilities,
    useQuoteContextType,
} from '../../context/QuoteContext'
import { useUserContext } from '../../context/userContext'
import { set } from 'date-fns'
import { strToNumber } from '../../formulae/calculations'

interface Asset {
    currentAccount: number
    savingAccount: number
    otherLiquidAssets: number
    otherDebtObligations: number
    loansOutstanding: number
    mortgageOutstanding: number
}

const PersonalAssets = () => {
    const {
        assetAndLiabilities,
        setAssetAndLiabilities,
        personalMonthlyExpenses,
    } = useQuoteContextType()
    //useAssetAndLiabilities()

    const [subtotal, setSubtotal] = React.useState<number>(0)
    const [totalObligation, setTotalObligation] = React.useState<number>(0)
    const [assets, setAssets] = React.useState<Asset>({
        currentAccount: 0,
        savingAccount: 0,
        otherLiquidAssets: 0,
        otherDebtObligations: 0,
        loansOutstanding: 0,
        mortgageOutstanding: 0,
    })

    const formik = useFormik({
        initialValues: {
            currentAccount: 25000,
            savingAccount: 100000,

            otherLiquidAssets: 800000,
            otherDebtObligations: 2000,
            loansOutstanding: 5000,
            mortgageOutstanding: 25000,
        },
        validationSchema: Yup.object({
            currentAccount: Yup.number()
                .required('Required')
                .min(100, 'Must be greater than 100'),
            savingAccount: Yup.number().min(100, 'Must be greater than 100'),

            otherLiquidAssets: Yup.number().min(0, 'Must be greater than 0'),
        }),

        onSubmit: (values: Asset) => {
            parseAssetAndLiabilities(values)
            router.push('/life/financialsummary')
        },
    })

    const parseAssetAndLiabilities = (values: Asset) => {
        const assetAndLiabilities = {
            currentAccount: strToNumber(values.currentAccount),
            savingAccount: strToNumber(values.savingAccount),
            otherLiquidAssets: strToNumber(values.otherLiquidAssets),
            otherDebtObligations: strToNumber(values.otherDebtObligations),
            loansOutstanding: strToNumber(values.loansOutstanding),
            mortgageOutstanding: strToNumber(values.mortgageOutstanding),
        }
        setAssetAndLiabilities(assetAndLiabilities)
    }

    const compoundInterest = (value: number, years: number, rate: number) => {
        const interest = rate / 100
        return value * Math.pow(1 + interest, years)
    }

    const AccumulatedInterest = (
        value: number,
        years: number,
        rate: number
    ) => {
        const interest = rate / 100
        return value * Math.pow(1 + interest, years) - value
    }
    const totalCompoundInterest = (
        value: number,
        years: number,
        rate: number
    ) => {
        const interest = rate / 100
        let total = 0
        let initialValue = value
        for (let i = 0; i < years; i++) {
            initialValue = compoundInterest(value, i, interest)
            total += compoundInterest(46500, i, 19)
        }
        return total
    }

    const IsNumber = (value: string) => {
        if (value === undefined || value === null || value === '') return false
        return !isNaN(Number(value.toString()))
    }
    const ifNotNumber = (value: string) => {
        if (value === undefined || value === null || value === '') return 0
        if (isNaN(Number(value.toString()))) return 0
        else {
            return parseFloat(value.toString())
        }
    }

    const calculateSubtotal = (values: Asset) => {
        let total = 0
        total =
            ifNotNumber(values.currentAccount.toString()) +
            ifNotNumber(values.savingAccount.toString()) +
            ifNotNumber(values.otherLiquidAssets.toString())

        if (Number.isNaN(total)) total = 0
        setSubtotal(total)
        router.setParams({
            annualIncome: '10',
            totalAssets: subtotal.toString(),
        })
    }

    React.useEffect(() => {
        calculateSubtotal(formik.values)
        sumObligation()
    }, [formik.values])

    function handleValueChange(
        e: NativeSyntheticEvent<TextInputChangeEventData>
    ): void {
        const { text } = e.nativeEvent
        //const { testID } = e.target
        const value = parseFloat(text)
        setAssets({ ...assets, ['savingAccount']: value })
    }

    const sumObligation = () => {
        let total = 0
        total = personalMonthlyExpenses.houseAndUtilities.isMortgageOrRent
            ? ifNotNumber(formik.values.mortgageOutstanding.toString())
            : 0 +
              ifNotNumber(formik.values.loansOutstanding.toString()) +
              ifNotNumber(formik.values.otherDebtObligations.toString())

        if (Number.isNaN(total)) total = 0
        setTotalObligation(total)
        return total
    }
    useEffect(() => {
        if (
            personalMonthlyExpenses.houseAndUtilities.isMortgageOrRent == false
        ) {
            formik.setFieldValue('mortgageOutstanding', '0')
        }
    }, [personalMonthlyExpenses.houseAndUtilities.isMortgageOrRent])

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View
                    style={[
                        {
                            justifyContent: 'center',
                            backgroundColor: '#00A3AD',
                            alignItems: 'center',
                            height: 80,
                        },
                    ]}
                >
                    <Text style={{ fontSize: 30, color: '#fff' }}>
                        Assets & Financial Obligations
                    </Text>
                </View>
                <View style={styles.container}>
                    <ScrollView
                        style={styles.contentContainer}
                        scrollEventThrottle={16}
                    >
                        <View style={globalStyles.header_group}>
                            <Text style={globalStyles.header_group_text}>
                                ASSETS
                            </Text>
                        </View>
                        <View style={globalStyles.editGroup}>
                            <Text style={globalStyles.label}>
                                Current Account
                            </Text>
                            <TextInput
                                testID="currentAccount"
                                style={
                                    formik.errors.currentAccount
                                        ? globalStyles.input_error
                                        : globalStyles.input
                                }
                                placeholder="0"
                                keyboardType="number-pad"
                                onBlur={formik.handleBlur('currentAccount')}
                                value={formik.values.currentAccount.toString()}
                                onChangeText={formik.handleChange(
                                    'currentAccount'
                                )}
                            />
                            {formik.errors.currentAccount && (
                                <Text style={globalStyles.error}>
                                    {formik.errors.currentAccount}
                                </Text>
                            )}
                        </View>
                        <View style={globalStyles.editGroup}>
                            <Text style={globalStyles.label}>
                                Savings Account
                            </Text>
                            <TextInput
                                testID="savingAccount"
                                style={
                                    formik.errors.savingAccount
                                        ? globalStyles.input_error
                                        : globalStyles.input
                                }
                                onChange={handleValueChange}
                                keyboardType="number-pad"
                                placeholder="0"
                                onBlur={formik.handleBlur('savingAccount')}
                                value={formik.values.savingAccount.toString()}
                                onChangeText={formik.handleChange(
                                    'savingAccount'
                                )}
                            />
                            {formik.errors.savingAccount && (
                                <Text style={globalStyles.error}>
                                    {formik.errors.savingAccount}
                                </Text>
                            )}
                        </View>

                        <View style={globalStyles.editGroup}>
                            <Text style={globalStyles.label}>
                                {' '}
                                Other Liquid Assets
                            </Text>
                            <TextInput
                                style={
                                    formik.errors.otherLiquidAssets
                                        ? globalStyles.input_error
                                        : globalStyles.input
                                }
                                placeholder="0"
                                keyboardType="number-pad"
                                onBlur={formik.handleBlur('otherLiquidAssets')}
                                value={formik.values.otherLiquidAssets.toString()}
                                onChangeText={formik.handleChange(
                                    'otherLiquidAssets'
                                )}
                            />
                            {formik.errors.otherLiquidAssets && (
                                <Text style={globalStyles.error}>
                                    {formik.errors.otherLiquidAssets}
                                </Text>
                            )}
                        </View>
                        <View style={globalStyles.header_group}>
                            <Text style={globalStyles.header_group_text}>
                                FINANCIAL OBLIGATIONS
                            </Text>
                        </View>
                        {personalMonthlyExpenses.houseAndUtilities
                            .isMortgageOrRent && (
                            <>
                                <View style={styles.editGroup}>
                                    <Text style={styles.label}>
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
                        <View style={styles.editGroup}>
                            <Text style={styles.label}>Loans outstanding</Text>
                            <TextInput
                                style={
                                    formik.errors.loansOutstanding
                                        ? globalStyles.input_error
                                        : globalStyles.input
                                }
                                placeholder="0"
                                keyboardType="numeric"
                                value={formik.values.loansOutstanding.toString()}
                                onChangeText={formik.handleChange(
                                    'loansOutstanding'
                                )}
                                onBlur={formik.handleBlur('loansOutstanding')}
                            />
                            {formik.errors.loansOutstanding && (
                                <Text style={globalStyles.error}>
                                    {formik.errors.loansOutstanding}
                                </Text>
                            )}
                        </View>
                        <View style={styles.editGroup}>
                            <Text style={styles.label}>
                                Other debt/obligations
                            </Text>
                            <TextInput
                                style={
                                    formik.errors.otherDebtObligations
                                        ? globalStyles.input_error
                                        : globalStyles.input
                                }
                                placeholder="0"
                                keyboardType="numeric"
                                value={formik.values.otherDebtObligations.toString()}
                                onChangeText={formik.handleChange(
                                    'otherDebtObligations'
                                )}
                                onBlur={formik.handleBlur(
                                    'otherDebtObligations'
                                )}
                            />
                            {formik.errors.otherDebtObligations && (
                                <Text style={globalStyles.error}>
                                    {formik.errors.otherDebtObligations}
                                </Text>
                            )}
                        </View>
                    </ScrollView>

                    <View style={styles.subtotal}>
                        <Text style={globalStyles.subtotalText}>
                            TOTAL ASSETS
                        </Text>
                        <Text style={styles.subtotalText}>
                            {new Intl.NumberFormat('Ghs', {
                                style: 'currency',
                                currency: 'GHC',
                            }).format(subtotal)}
                        </Text>
                    </View>
                    <View style={styles.subtotal}>
                        <Text style={globalStyles.subtotalText}>
                            TOTAL OBLIGATIONS
                        </Text>
                        <Text style={styles.subtotalText}>
                            {new Intl.NumberFormat('Ghs', {
                                style: 'currency',
                                currency: 'GHC',
                            }).format(totalObligation)}
                        </Text>
                    </View>
                    <NavigationBar
                        enableBackButton
                        enableNextButton
                        onNextButtonPress={() => formik.handleSubmit()}
                        onBackButtonPress={() => router.back()}
                    />
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default PersonalAssets

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
    editGroup: {
        //marginHorizontal: 20,
        marginVertical: 10,
    },
    editGroupText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    label: {
        fontSize: 16,
        //fontWeight: 'bold',
        marginHorizontal: 20,
        //marginVertical: 10,
    },
    input: {
        marginHorizontal: 20,
        marginVertical: 4,
        padding: 10,
        borderColor: '#d3d3d3',
        //backgroundColor: '#eee',
        borderWidth: 1,
        borderRadius: 5,
    },
    subtotal: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        //borderTopWidth: 1,
        //borderTopColor: '#d3d3d3',
        //backgroundColor: '#31afb3',
    },
    subtotalText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
})
