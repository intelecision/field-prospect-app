import {
    KeyboardAvoidingView,
    NativeSyntheticEvent,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native'
import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import { TextInput } from '../../components/Themed'
import { globalStyles } from '../Styles/GlobalStyles'
import NavigationBar from '../../components/NavigationBar'
import { router, useLocalSearchParams } from 'expo-router'
import { Formik, FormikHelpers, useFormik } from 'formik'
import * as Yup from 'yup'
import { useIncomeAndExpenses } from '../../context/QuoteContext'
import BottomSheet, {
    BottomSheetModal,
    BottomSheetTextInput,
} from '@gorhom/bottom-sheet'

interface FormValues {
    currentMonthlySalary: number
    otherIncome: number
    housing: number
    transportation: number
    food: number
    entertainment: number
    otherExpenses: number
    loans: number
    savingsOrInvestments: number
}

const IncomeAndExpenditure = () => {
    const bottomSheetRef = useRef<BottomSheetModal>(null)
    const { incomeAndExpenses, setIncomeAndExpenses } = useIncomeAndExpenses()
    const formik = useFormik({
        initialValues: {
            currentMonthlySalary: 22000,
            otherIncome: 1000,
            housing: 1900,
            transportation: 1300,
            food: 600,
            entertainment: 275,
            otherExpenses: 200,
            loans: 400,
            savingsOrInvestments: 600,
        },
        validationSchema: Yup.object({
            currentMonthlySalary: Yup.number()
                .required('Required')
                .min(500, 'Must be greater than 500'),
            otherIncome: Yup.number().required('Required'),
            housing: Yup.number()
                .required('Required')
                .min(100, 'Must be greater than 100'),
            transportation: Yup.number()
                .required('Required')
                .min(100, 'Must be greater than 100'),
            food: Yup.number()
                .required('Required')
                .min(100, 'Must be greater than 100'),
            entertainment: Yup.number()
                .required('Required')
                .min(100, 'Must be greater than 100'),
            otherExpenses: Yup.number()
                .required('Required')
                .min(100, 'Must be greater than 100'),
        }),
        onSubmit: (values: FormValues) => {
            setIncomeAndExpenses(values)
            //alert(JSON.stringify(values, null, 2))
            router.push('/life/personalAssets')
        },
    })
    const [formValues, setFormValues] = React.useState<FormValues>({
        currentMonthlySalary: 0,
        otherIncome: 0,
        housing: 0,
        transportation: 0,
        food: 0,
        entertainment: 0,
        otherExpenses: 0,
        loans: 0,
        savingsOrInvestments: 0,
    })
    const [balance, setBalance] = React.useState(0)

    const Schema = Yup.object().shape({
        currentMonthlySalary: Yup.number()
            .required('Required')
            .min(500, 'Must be greater than 500'),
        otherIncome: Yup.number().required('Required'),
        housing: Yup.number()
            .required('Required')
            .min(100, 'Must be greater than 100'),
        transportation: Yup.number()
            .required('Required')
            .min(100, 'Must be greater than 100'),
        food: Yup.number()
            .required('Required')
            .min(100, 'Must be greater than 100'),
        entertainment: Yup.number()
            .required('Required')
            .min(100, 'Must be greater than 100'),
        otherExpenses: Yup.number()
            .required('Required')
            .min(100, 'Must be greater than 100'),
    })
    console.log('setIncomeAndExpenses', incomeAndExpenses)
    useEffect(() => {
        calculateBalance()
        //handlePresentModalPress()
    }, [formik.values])

    const parseValues = (values: FormValues) => {
        let result = {
            currentMonthlySalary: parseInt(
                values.currentMonthlySalary.toString()
            ),
            otherIncome: Number.isNaN(parseInt(values.otherIncome.toString()))
                ? 0
                : parseInt(values.otherIncome.toString()),
            housing: Number.isNaN(parseInt(values.housing.toString()))
                ? 0
                : parseInt(values.housing.toString()),
            transportation: Number.isNaN(
                parseInt(values.transportation.toString())
                    ? 0
                    : parseInt(values.transportation.toString())
            ),
            food: Number.isNaN(
                parseInt(values.food.toString())
                    ? 0
                    : parseInt(values.food.toString())
            ),
            entertainment: Number.isNaN(
                parseInt(values.entertainment.toString())
                    ? 0
                    : parseInt(values.entertainment.toString())
            ),
            otherExpenses: Number.isNaN(
                parseInt(values.otherExpenses.toString())
                    ? 0
                    : parseInt(values.otherExpenses.toString())
            ),
            loans: Number.isNaN(
                parseInt(values.loans.toString())
                    ? 0
                    : parseInt(values.loans.toString())
            ),
            savingsOrInvestments: Number.isNaN(
                parseInt(values.savingsOrInvestments.toString())
                    ? 0
                    : parseInt(values.savingsOrInvestments.toString())
            ),
        }

        return result
    }

    const calculateBalance = () => {
        const values = formik.values

        let totalIncome =
            parseInt(values.currentMonthlySalary.toString()) +
            parseInt(values.otherIncome.toString())

        let totalExpenses =
            parseInt(values.housing.toString()) +
            parseInt(values.transportation.toString()) +
            parseInt(values.food.toString()) +
            parseInt(values.entertainment.toString()) +
            parseInt(values.otherExpenses.toString()) +
            parseInt(values.loans.toString()) +
            parseInt(values.savingsOrInvestments.toString())

        const result = totalIncome - totalExpenses

        if (Number.isNaN(result)) setBalance(0)

        setBalance(result)

        const annualIncome = balance * 12
        router.setParams({
            annualIncome: annualIncome.toString(),
        })
    }
    const snapPoints = useMemo(() => ['25%', '50%', '75%'], [])

    // callbacks
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index)
    }, [])

    const handlePresentModalPress = useCallback(() => {
        bottomSheetRef.current?.present()
    }, [])

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
                            height: 120,
                            marginBottom: 20,
                        },
                    ]}
                >
                    <Text style={{ fontSize: 30, color: '#fff' }}>
                        Personal Monthly Budget
                    </Text>
                    <Text style={{ fontSize: 16, color: '#fff' }}>
                        Income and Expenditure
                    </Text>
                </View>
                <View style={styles.container}>
                    <ScrollView
                        style={styles.contentContainer}
                        scrollEventThrottle={16}
                    >
                        <View style={globalStyles.header_group}>
                            <Text style={globalStyles.header_group_text}>
                                INCOME
                            </Text>
                        </View>
                        <View style={globalStyles.editGroup}>
                            <Text style={globalStyles.label}>
                                Monthly Salary
                            </Text>
                            <TextInput
                                placeholder="0"
                                style={
                                    formik.errors.currentMonthlySalary
                                        ? globalStyles.input_error
                                        : globalStyles.input
                                }
                                onChangeText={formik.handleChange(
                                    'currentMonthlySalary'
                                )}
                                onBlur={formik.handleBlur(
                                    'currentMonthlySalary'
                                )}
                                value={formik.values.currentMonthlySalary.toString()}
                                keyboardType="numbers-and-punctuation"
                            />
                            {formik.errors.currentMonthlySalary && (
                                <Text style={globalStyles.error}>
                                    {formik.errors.currentMonthlySalary}
                                </Text>
                            )}
                        </View>
                        <View style={globalStyles.editGroup}>
                            <Text style={globalStyles.label}>Other income</Text>
                            <TextInput
                                placeholder="0"
                                style={
                                    formik.errors.otherIncome
                                        ? globalStyles.input_error
                                        : globalStyles.input
                                }
                                onChangeText={formik.handleChange(
                                    'otherIncome'
                                )}
                                onBlur={formik.handleBlur('otherIncome')}
                                value={formik.values.otherIncome.toString()}
                                keyboardType="numbers-and-punctuation"
                            />
                            {formik.errors.otherIncome && (
                                <Text style={globalStyles.error}>
                                    {formik.errors.otherIncome}
                                </Text>
                            )}
                        </View>
                        <View style={globalStyles.header_group}>
                            <Text style={globalStyles.header_group_text}>
                                EXPENSES
                            </Text>
                        </View>

                        <View style={globalStyles.editGroup}>
                            <Text style={globalStyles.label}>
                                Housing and Utilities
                            </Text>
                            <TextInput
                                style={
                                    formik.errors.housing
                                        ? globalStyles.input_error
                                        : globalStyles.input
                                }
                                placeholder="0"
                                onChangeText={formik.handleChange('housing')}
                                onBlur={formik.handleBlur('housing')}
                                value={formik.values.housing.toString()}
                                keyboardType="numbers-and-punctuation"
                            />
                            {formik.errors.housing && (
                                <Text style={globalStyles.error}>
                                    {formik.errors.housing}
                                </Text>
                            )}
                        </View>
                        <View style={globalStyles.editGroup}>
                            <Text style={globalStyles.label}>
                                Transportation
                            </Text>
                            <TextInput
                                placeholder="0"
                                style={
                                    formik.errors.transportation
                                        ? globalStyles.input_error
                                        : globalStyles.input
                                }
                                onChangeText={formik.handleChange(
                                    'transportation'
                                )}
                                onBlur={formik.handleBlur('transportation')}
                                value={formik.values.transportation.toString()}
                                keyboardType="numbers-and-punctuation"
                            />
                            {formik.errors.transportation && (
                                <Text style={globalStyles.error}>
                                    {formik.errors.transportation}
                                </Text>
                            )}
                        </View>
                        <View style={globalStyles.editGroup}>
                            <Text style={globalStyles.label}>Food</Text>
                            <TextInput
                                style={
                                    formik.errors.food
                                        ? globalStyles.input_error
                                        : globalStyles.input
                                }
                                onChangeText={formik.handleChange('food')}
                                onBlur={formik.handleBlur('food')}
                                value={formik.values.food.toString()}
                                keyboardType="numbers-and-punctuation"
                            />
                            {formik.errors.food && (
                                <Text style={globalStyles.error}>
                                    {formik.errors.food}
                                </Text>
                            )}
                        </View>
                        <View style={globalStyles.editGroup}>
                            <Text style={globalStyles.label}>
                                Entertainment
                            </Text>
                            <TextInput
                                style={
                                    formik.errors.entertainment
                                        ? globalStyles.input_error
                                        : globalStyles.input
                                }
                                onChangeText={formik.handleChange(
                                    'entertainment'
                                )}
                                onBlur={formik.handleBlur('entertainment')}
                                value={formik.values.entertainment.toString()}
                                keyboardType="numbers-and-punctuation"
                            />
                            {formik.errors.entertainment && (
                                <Text style={globalStyles.error}>
                                    {formik.errors.entertainment}
                                </Text>
                            )}
                        </View>

                        {/*<View style={globalStyles.header_group}>
                            <Text style={globalStyles.header_group_text}>
                                LOANS
                            </Text>
                        </View>*/}
                        <View style={globalStyles.editGroup}>
                            <Text style={globalStyles.label}>Loans</Text>
                            <TextInput
                                style={globalStyles.input}
                                placeholder="0"
                                onChangeText={formik.handleChange('loans')}
                                value={formik.values.loans.toString()}
                                keyboardType="numbers-and-punctuation"
                            />
                            {formik.errors.loans && (
                                <Text style={globalStyles.error}>
                                    {formik.errors.loans}
                                </Text>
                            )}
                        </View>
                        {/*<View style={globalStyles.header_group}>
                            <Text style={globalStyles.header_group_text}>
                                SAVINGS OR INVESTMENTS
                            </Text>
                        </View>*/}
                        <View
                            style={[
                                globalStyles.editGroup,
                                { marginBottom: 30 },
                            ]}
                        >
                            <Text style={globalStyles.label}>
                                Savings & Investments
                            </Text>
                            <TextInput
                                style={globalStyles.input}
                                placeholder="0"
                                onChangeText={formik.handleChange(
                                    'savingsOrInvestments'
                                )}
                                value={formik.values.savingsOrInvestments.toString()}
                                keyboardType="numbers-and-punctuation"
                            />
                            {formik.errors.savingsOrInvestments && (
                                <Text style={globalStyles.error}>
                                    {formik.errors.savingsOrInvestments}
                                </Text>
                            )}
                        </View>
                        <View style={globalStyles.editGroup}>
                            <Text style={globalStyles.label}>
                                Other Expenses
                            </Text>
                            <TextInput
                                style={globalStyles.input}
                                placeholder="0"
                                onChangeText={formik.handleChange(
                                    'otherExpenses'
                                )}
                                value={formik.values.otherExpenses.toString()}
                                keyboardType="numbers-and-punctuation"
                            />
                            {formik.errors.otherExpenses && (
                                <Text style={globalStyles.error}>
                                    {formik.errors.otherExpenses}
                                </Text>
                            )}
                        </View>
                    </ScrollView>
                </View>
                <View style={globalStyles.subtotal}>
                    <Text style={globalStyles.subtotalText}>BALANCE</Text>
                    <Text style={globalStyles.subtotalText}>
                        {new Intl.NumberFormat('Ghs', {
                            style: 'currency',
                            currency: 'GHC',
                        }).format(balance)}
                    </Text>
                </View>
                {/*<BottomSheet
                    ref={bottomSheetRef}
                    index={1}
                    snapPoints={snapPoints}
                    keyboardBehavior="fillParent"
                    onChange={handleSheetChanges}
                >
                    <BottomSheetTextInput style={styles.input} />
                    <View style={styles.contentContainer}>
                        <Text>Awesome 🎉</Text>
                    </View>
                </BottomSheet>*/}

                <NavigationBar
                    enableBackButton
                    enableNextButton
                    onNextButtonPress={() => {
                        //console.log('next')
                        formik.handleSubmit()
                    }}
                    onBackButtonPress={() => {
                        router.back()
                    }}
                />
                <View>
                    <BottomSheetModal
                        ref={bottomSheetRef}
                        index={1}
                        snapPoints={snapPoints}
                        onChange={handleSheetChanges}
                    >
                        <View style={globalStyles.editGroup}>
                            <Text style={globalStyles.label}>Other income</Text>
                            <TextInput
                                placeholder="0"
                                style={
                                    formik.errors.otherIncome
                                        ? globalStyles.input_error
                                        : globalStyles.input
                                }
                                onChangeText={formik.handleChange(
                                    'otherIncome'
                                )}
                                onBlur={formik.handleBlur('otherIncome')}
                                value={formik.values.otherIncome.toString()}
                                keyboardType="numbers-and-punctuation"
                            />
                            {formik.errors.otherIncome && (
                                <Text style={globalStyles.error}>
                                    {formik.errors.otherIncome}
                                </Text>
                            )}
                        </View>
                    </BottomSheetModal>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default IncomeAndExpenditure

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        flex: 1,
        paddingTop: 20,
    },
    input: {
        marginTop: 8,
        marginBottom: 10,
        borderRadius: 10,
        fontSize: 16,
        lineHeight: 20,
        padding: 8,
        backgroundColor: 'rgba(151, 151, 151, 0.25)',
    },
})
