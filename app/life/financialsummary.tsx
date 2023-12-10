import {
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Text } from '../../components/Themed'

import NavigationBar from '../../components/NavigationBar'
import { router } from 'expo-router'
import { globalStyles } from '../Styles/GlobalStyles'
import { useQuoteContextType } from '../../context/QuoteContext'
import { strToNumber } from '../../formulae/calculations'

const FinancialObligations = () => {
    const {
        assetAndLiabilities,
        personalMonthlyExpenses,
        setCoverAmount,
        coverAmount,
    } = useQuoteContextType()
    const [totalAssets, setTotalAssets] = React.useState<number>(0)
    const [totalIncome, setTotalIncome] = React.useState(0)
    const [totalObligation, setTotalObligation] = React.useState(0)
    const [projectedAnnualExp, setProjectedAnnualExp] = React.useState(0)
    const [totalExpenditure, setTotalExpenditure] = React.useState(0)
    const [shortfall, setShortfall] = React.useState(0)
    const [netAsset, setNetAsset] = React.useState(0)
    const [, setTotalHouseholdAndUtilities] = useState(0)

    const [totalFinancialObligations, setTotalFinancialObligations] =
        useState(0)
    const ifNotNumber = (value: string) => {
        if (value === undefined || value === null || value === '') return 0
        if (isNaN(Number(value.toString()))) return 0
        else {
            return parseFloat(value.toString())
        }
    }

    const calcTotalHouseholdAndUtilities = () => {
        const {
            electricity,
            gas,
            maintenanceOrRepair,
            waterAndSewer,
            wasteRemoval,
            other,
            isMortgageOrRent,
            mortgageOrRent,
            satelliteTv,
            supplies,
            phone,
        } = personalMonthlyExpenses.houseAndUtilities
        let total =
            electricity +
            gas +
            maintenanceOrRepair +
            waterAndSewer +
            wasteRemoval +
            other +
            satelliteTv +
            supplies +
            phone +
            mortgageOrRent

        //setTotalHouseholdAndUtilities(total)
        console.log('totalHouseholdAndUtilities', total)
        return total
    }

    const totalHouseCost = () => {
        const {
            electricity,
            gas,
            maintenanceOrRepair,
            waterAndSewer,
            wasteRemoval,
            other,
            isMortgageOrRent,
            mortgageOrRent,
            satelliteTv,
            supplies,
            phone,
        } = personalMonthlyExpenses.houseAndUtilities
        let total =
            electricity +
            gas +
            maintenanceOrRepair +
            waterAndSewer +
            wasteRemoval +
            other +
            satelliteTv +
            supplies +
            phone
        if (!isMortgageOrRent) {
            total += mortgageOrRent
        }

        return total
    }

    const calcTotalAssets = () => {
        let total =
            assetAndLiabilities.currentAccount +
            assetAndLiabilities.savingAccount +
            assetAndLiabilities.otherLiquidAssets

        return total
    }

    const calcTotalIncome = () => {
        const { monthlySalary } = personalMonthlyExpenses
        let total =
            strToNumber(monthlySalary.currentMonthlySalary) +
            strToNumber(monthlySalary.otherIncome)
        setTotalIncome(total * 12)
    }

    const calcTotalObligation = () => {
        let total =
            assetAndLiabilities.mortgageOutstanding +
            assetAndLiabilities.loansOutstanding +
            assetAndLiabilities.otherDebtObligations
        setTotalObligation(total)
    }
    const calcTotalExpenditure = () => {
        const {
            otherExpenses,
            transportation,
            foodAndClothing,
            entertainment,
        } = personalMonthlyExpenses
        let total: number =
            strToNumber(otherExpenses.healthCare) +
            strToNumber(otherExpenses.childrenEducationFees) +
            strToNumber(otherExpenses.otherEducationalExpenses) +
            strToNumber(otherExpenses.LifeInsurancePremiums)

        const totalTransportation =
            strToNumber(transportation.busTaxiFare) +
            strToNumber(transportation.fuel) +
            strToNumber(transportation.licensing) +
            strToNumber(transportation.maintenance) +
            strToNumber(transportation.other) +
            strToNumber(transportation.vehicleInsurance) +
            strToNumber(transportation.vehiclePayment)
        const totalFoodAndClothing =
            strToNumber(foodAndClothing.groceries) +
            strToNumber(foodAndClothing.other) +
            strToNumber(foodAndClothing.restaurant)

        const totalEntertainment =
            strToNumber(entertainment.concerts) +
            strToNumber(entertainment.theaters) +
            strToNumber(entertainment.other) +
            strToNumber(entertainment.sportingEvents) +
            strToNumber(entertainment.movies)

        total +=
            totalTransportation +
            totalFoodAndClothing +
            totalEntertainment +
            totalHouseCost()

        setTotalExpenditure(total * 12)
        let totalExp = total * 12
        calculateNext20Years(totalExp)
    }
    const calcTotalMonthlyExpenses = () => {
        const {
            houseAndUtilities,
            otherExpenses,
            transportation,
            foodAndClothing,
            entertainment,
        } = personalMonthlyExpenses
        let total: number =
            strToNumber(otherExpenses.healthCare) +
            strToNumber(otherExpenses.childrenEducationFees) +
            strToNumber(otherExpenses.otherEducationalExpenses) +
            strToNumber(otherExpenses.LifeInsurancePremiums)
        console.log('otherExpenses', total)
        const totalTransportation =
            strToNumber(transportation.busTaxiFare) +
            strToNumber(transportation.fuel) +
            strToNumber(transportation.licensing) +
            strToNumber(transportation.maintenance) +
            strToNumber(transportation.other) +
            strToNumber(transportation.vehicleInsurance) +
            strToNumber(transportation.vehiclePayment)
        console.log('totalTransportation', totalTransportation)
        const totalFoodAndClothing =
            strToNumber(foodAndClothing.groceries) +
            strToNumber(foodAndClothing.other) +
            strToNumber(foodAndClothing.restaurant)

        const totalEntertainment =
            strToNumber(entertainment.concerts) +
            strToNumber(entertainment.theaters) +
            strToNumber(entertainment.other) +
            strToNumber(entertainment.sportingEvents) +
            strToNumber(entertainment.movies)
        console.log('totalEntertainment', totalEntertainment)

        total +=
            totalTransportation +
            totalFoodAndClothing +
            totalEntertainment +
            houseAndUtilities.mortgageOrRent +
            houseAndUtilities.electricity +
            houseAndUtilities.gas +
            houseAndUtilities.maintenanceOrRepair +
            houseAndUtilities.waterAndSewer +
            houseAndUtilities.wasteRemoval +
            houseAndUtilities.other +
            houseAndUtilities.satelliteTv +
            houseAndUtilities.supplies +
            houseAndUtilities.phone +
            houseAndUtilities.mortgageOrRent
        return total
    }

    const calculateNext20Years = (value: number) => {
        const GHANA_INTEREST_RATE = 19
        const expensesFor20Yrs = sumOfCompoundInterest(
            value,
            20,
            GHANA_INTEREST_RATE
        )
        setProjectedAnnualExp(expensesFor20Yrs)
    }

    useEffect(() => {
        calcTotalExpenditure()
        setTotalFinancialObligations(calcTotalFinancialObligation())
    }, []) // Only re-run the effect if count changes

    useEffect(() => {
        calcTotalIncome()
        setTotalAssets(calcTotalAssets())
        calcTotalObligation()
    }, [])

    const calNetAsset = () => {
        let total = totalAssets - (totalObligation + projectedAnnualExp)
        return total
    }
    const calcShortfall = () => {
        let total = totalObligation + projectedAnnualExp - totalAssets
        return total
    }

    useEffect(() => {
        setShortfall(calcShortfall())
        setNetAsset(calNetAsset)
        setCoverAmount({
            shortfall: calcShortfall(),
            idealAmountOfCover: calcShortfall(),
            netAssets: calNetAsset(),
            totalAssets: calcTotalAssets(),
            totalLiabilities: 0,
            totalExpenses: totalExpenditure,
            totalIncome: totalIncome,
            totalMonthlyExpenses: calcTotalMonthlyExpenses(), //totalExpenditure / 12,
            totalMonthlyIncome: totalIncome / 12,
            outstandingDebtObligations: totalObligation,
            projected20YearsExpenses: projectedAnnualExp,
            totalFinancialObligations: totalObligation,
            balanceOfIncomeAndExpenses: totalIncome - totalExpenditure,
        })
        calcTotalMonthlyExpenses()
    }, [totalObligation, totalAssets, projectedAnnualExp])

    const compoundInterest = (value: number, years: number, rate: number) => {
        const interest = rate / 100
        return value * Math.pow(1 + interest, years)
    }
    const sumOfCompoundInterest = (
        value: number,
        years: number,
        rate: number
    ) => {
        let sum = 0
        for (let i = 0; i < years; i++) {
            sum += compoundInterest(value, i, rate)
            //console.log('ProjectedAnnual Exp ***', Math.round(sum), i)
        }

        return Math.round(sum)

        //    return sum
    }

    const calcTotalFinancialObligation = () => {
        const { mortgageOutstanding, loansOutstanding, otherDebtObligations } =
            assetAndLiabilities
        let total =
            ifNotNumber(mortgageOutstanding.toString()) +
            ifNotNumber(loansOutstanding.toString()) +
            ifNotNumber(otherDebtObligations.toString()) +
            ifNotNumber(projectedAnnualExp.toString())
        return total
    }

    return (
        <SafeAreaView style={styles.container}>
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
                    Cover Amount
                </Text>
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
            >
                <View style={styles.container}>
                    <ScrollView style={styles.contentContainer}>
                        <View style={styles.section}>
                            <View style={globalStyles.header_group}>
                                <Text style={globalStyles.header_group_text}>
                                    ASSETS
                                </Text>
                            </View>
                            <View style={styles.sectionItem}>
                                <Text>Total Assets</Text>
                                <Text>
                                    {totalAssets.toLocaleString(undefined, {
                                        minimumFractionDigits: 0,
                                    })}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.section}>
                            <View style={globalStyles.header_group}>
                                <Text style={globalStyles.header_group_text}>
                                    TOTAL FINANCIAL OBLIGATIONS
                                </Text>
                            </View>
                            <View style={styles.sectionItem}>
                                <Text>Outstanding Debt Obligations </Text>
                                <Text>
                                    {totalObligation.toLocaleString(undefined, {
                                        minimumFractionDigits: 0,
                                    })}
                                </Text>
                            </View>
                            <View style={styles.sectionItem}>
                                <Text>
                                    Projected Expenses for the next 20 years
                                </Text>
                                <Text>
                                    {projectedAnnualExp.toLocaleString(
                                        undefined,
                                        {
                                            minimumFractionDigits: 0,
                                        }
                                    )}
                                </Text>
                            </View>
                            <View style={styles.sectionItem}>
                                <Text>Total Financial Obligations </Text>
                                <Text
                                    style={{
                                        fontFamily: 'OpenSans_700Bold',
                                    }}
                                >
                                    {totalFinancialObligations.toLocaleString(
                                        undefined,
                                        {
                                            minimumFractionDigits: 0,
                                        }
                                    )}
                                </Text>
                            </View>
                        </View>

                        <View style={[styles.sectionItem, { marginTop: 10 }]}>
                            <Text style={styles.subtotalText}>Net Asset</Text>
                            <Text
                                style={[
                                    styles.subtotalText,
                                    { color: 'crimson' },
                                ]}
                            >
                                {netAsset.toLocaleString(undefined, {
                                    minimumFractionDigits: 0,
                                })}
                            </Text>
                        </View>

                        <View style={[styles.sectionItem]}>
                            <Text style={styles.subtotalText}>Shortfall</Text>
                            <Text style={[styles.subtotalText]}>
                                {shortfall.toLocaleString(undefined, {
                                    minimumFractionDigits: 0,
                                })}
                            </Text>
                        </View>
                    </ScrollView>
                    <View style={[styles.subtotal]}>
                        <Text style={styles.subtotalText}>
                            Ideal Amount of Insurance Cover
                        </Text>
                        <Text style={[styles.subtotalText]}>
                            {shortfall.toLocaleString(undefined, {
                                minimumFractionDigits: 0,
                            })}
                        </Text>
                    </View>
                    <NavigationBar
                        enableBackButton
                        enableNextButton
                        onBackButtonPress={() => router.back()}
                        onNextButtonPress={() => {
                            router.push('/life/productsSelected')
                        }}
                    />
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default FinancialObligations

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        flex: 1,
        paddingTop: 20,
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
        fontSize: 20,
    },
    subtotal: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderTopColor: '#d3d3d3',
    },
    subtotalText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    section: {
        marginVertical: 1,
        //paddingHorizontal: 20,
    },
    sectionItem: {
        flexDirection: 'row',
        height: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        //marginVertical: 5,
        borderBottomWidth: 1,
        //borderTopColor: '#d3d3d3',
        borderColor: '#d3d3d3',
    },
})
