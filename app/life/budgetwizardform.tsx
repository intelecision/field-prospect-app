import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Alert,
} from 'react-native'
import React from 'react'
import AccommodationExpenses from './components/AccommodationExpenses'
import { globalStyles } from '../Styles/GlobalStyles'

import EntertainmentExpenses from './components/EntertainmentExpenses'

import TransportationExpenses from './components/TransportationExpenses'
import FoodExpenses from './components/FoodExpenses'
import LoanRepayments from './components/LoanRepayments'
import SavingsOrInvestments from './components/SavingsAndInvestments'
import OtherPersonalExpenses from './components/OtherExpenses'
import NavigationBar from '../../components/NavigationBar'
import { useFormik } from 'formik'
import {
    Asset,
    Entertainment,
    FoodAndClothing,
    HousingAndUtilities,
    LifeInsuranceProduct,
    LoansAndDebts,
    MonthlySalary,
    Obligations,
    OtherExpenses,
    SavingsAndInvestments,
    Transportation,
} from '../../model/entities'
import * as Yup from 'yup'
import {
    useInterestedProduct,
    useQuoteContextType,
} from '../../context/QuoteContext'
import MonthlyIncome from './components/MonthlyIncome'
import { router } from 'expo-router'
import QuestionnaireScreen from './components/QuestionnaireScreen'
import LifeInsuranceChoices from './lifeInsurancechoices'
import { Question } from '../data/questionaire'
import PersonAssets from './components/PersonAssests'
import PersonalObligations from './components/PersonalObligations'
import { de, is } from 'date-fns/locale'
import HealthStatus from './components/Underwriting/HealthStatus'
import { useState } from 'react'

const Steps = [
    { name: 'Accommodation Expenses', component: AccommodationExpenses },
    { name: 'Food', component: FoodExpenses },
    { name: 'Entertainment', component: EntertainmentExpenses },
    { name: 'Transportation', component: TransportationExpenses },
    { name: 'Loans', component: LoanRepayments },
    { name: 'Savings And Investments', component: SavingsOrInvestments },
    { name: 'Other Expenses', component: OtherPersonalExpenses },
    { name: 'Summary', component: OtherPersonalExpenses },
    { name: 'Person Assets', component: PersonAssets },
]

const NUMBER_OF_STEPS = 11
const BudgetWizardForm = () => {
    const [IsWizardFinished, setIsWizardFinished] = React.useState(false)
    const { personalMonthlyExpenses, setPersonalMonthlyExpenses } =
        useQuoteContextType()
    const { interestedProduct: interestProduct, setInterestedProduct } =
        useInterestedProduct()
    const [selectedPolicy, setSelectedPolicy] = React.useState<Question[]>([])
    const [showAskBestEstimate, setShowAskBestEstimate] = React.useState(false)
    const housingFormik = useFormik({
        initialValues: {
            mortgageOrRent: 1000,
            phone: 100,
            electricity: 100,
            gas: 100,
            satelliteTv: 100,
            waterAndSewer: 100,
            wasteRemoval: 100,
            maintenanceOrRepair: 100,
            supplies: 100,
            other: 100,
            isMortgageOrRent: true,
            totalHouseAndUtilities: function (): number {
                return (
                    this.mortgageOrRent +
                    this.phone +
                    this.electricity +
                    this.gas +
                    this.satelliteTv +
                    this.waterAndSewer +
                    this.wasteRemoval +
                    this.maintenanceOrRepair +
                    this.supplies +
                    this.other
                )
            },
        },
        validationSchema: Yup.object({
            mortgageOrRent: Yup.number().required('Required'),

            phone: Yup.number().required('Required'),
            electricity: Yup.number().required('Required'),
            waterAndSewer: Yup.number()
                .required('Required')
                .min(0, 'Must be greater than 0'),
            gas: Yup.number()
                .required('Required')
                .min(0, 'Must be greater than 0'),
            wasteRemoval: Yup.number().min(0, 'Must be greater than 0'),

            satelliteTv: Yup.number()
                .required('Required')
                .min(0, 'Must be greater than 0'),
            maintenanceOrRepair: Yup.number()
                .required('Required')
                .min(0, 'Must be greater than 0'),
            supplies: Yup.number()
                .required('Required')
                .min(0, 'Must be greater than 0'),
            other: Yup.number()
                .required('Required')
                .min(0, 'Must be greater than 0'),
        }),

        onSubmit: (values: HousingAndUtilities) => {
            setPersonalMonthlyExpenses({
                ...personalMonthlyExpenses,
                houseAndUtilities: { ...values },
            })
        },
    })

    const FoodAndClothingFormik = useFormik({
        initialValues: {
            groceries: 200,
            restaurant: 200,
            other: 200,
        },
        validationSchema: Yup.object({
            groceries: Yup.number().required('Required'),
            restaurant: Yup.number().required('Required'),
            other: Yup.number().required('Required'),
        }),
        onSubmit: (values: FoodAndClothing) => {
            setPersonalMonthlyExpenses({
                ...personalMonthlyExpenses,
                foodAndClothing: { ...values },
            })
        },
    })
    const entertainmentFormik = useFormik({
        initialValues: {
            movies: 55,
            concerts: 55,
            sportingEvents: 55,
            theaters: 55,
            other: 55,
        },
        validationSchema: Yup.object({
            movies: Yup.number().required('Required'),
            concerts: Yup.number().required('Required'),
            sportingEvents: Yup.number().required('Required'),
            theaters: Yup.number().required('Required'),
            other: Yup.number().required('Required'),
        }),
        onSubmit: (values: Entertainment) => {
            setPersonalMonthlyExpenses({
                ...personalMonthlyExpenses,
                entertainment: { ...values },
            })
            //    console.log('entertainment', personalMonthlyExpenses.entertainment)
        },
    })
    const transportFormik = useFormik({
        initialValues: {
            vehiclePayment: 1000,
            busTaxiFare: 50,
            vehicleInsurance: 50,
            licensing: 50,
            fuel: 50,
            maintenance: 50,
            other: 50,
        },
        validationSchema: Yup.object({
            vehiclePayment: Yup.number().required('Required'),
            busTaxiFare: Yup.number().required('Required'),
            vehicleInsurance: Yup.number().required('Required'),
            licensing: Yup.number().required('Required'),
            fuel: Yup.number().required('Required'),
            maintenance: Yup.number().required('Required'),
            other: Yup.number().required('Required'),
        }),

        onSubmit: (values: Transportation) => {
            setPersonalMonthlyExpenses({
                ...personalMonthlyExpenses,
                transportation: { ...values },
            })
        },
    })

    const loanFormik = useFormik({
        initialValues: {
            creditCard: 100,
            studentLoan: 100,
            personalLoan: 100,
            other: 100,
        },
        validationSchema: Yup.object({
            creditCard: Yup.number().required('Required'),
            studentLoan: Yup.number().required('Required'),
            personalLoan: Yup.number().required('Required'),
            other: Yup.number().required('Required'),
        }),
        onSubmit: (values: LoansAndDebts) => {
            setPersonalMonthlyExpenses({
                ...personalMonthlyExpenses,
                loansAndDebts: { ...values },
            })
        },
    })

    const IncomeFormik = useFormik({
        initialValues: {
            currentMonthlySalary: 22000,
            otherIncome: 1000,
        },
        validationSchema: Yup.object({
            currentMonthlySalary: Yup.number().required('Required'),
            otherIncome: Yup.number().required('Required'),
        }),
        onSubmit: (values: MonthlySalary) => {
            setPersonalMonthlyExpenses({
                ...personalMonthlyExpenses,
                monthlySalary: { ...values },
            })
        },
    })

    const savingsFormik = useFormik({
        initialValues: {
            pensionAccount: 200,
            investmentsAccount: 200,
            other: 200,
        },
        validationSchema: Yup.object({
            pensionAccount: Yup.number().required('Required'),
            investmentsAccount: Yup.number().required('Required'),
            other: Yup.number().required('Required'),
        }),
        onSubmit: (values: SavingsAndInvestments) => {
            setPersonalMonthlyExpenses({
                ...personalMonthlyExpenses,
                savingsAndInvestments: { ...values },
            })
        },
    })

    const otherExpensesFormik = useFormik({
        initialValues: {
            healthCare: 50,
            childrenEducationFees: 50,
            otherEducationalExpenses: 50,
            LifeInsurancePremiums: 50,
        },

        validationSchema: Yup.object({
            healthCare: Yup.number().required('Required'),
            childrenEducationFees: Yup.number().required('Required'),
            otherEducationalExpenses: Yup.number().required('Required'),
            LifeInsurancePremiums: Yup.number().required('Required'),
        }),

        onSubmit: (values: OtherExpenses) => {
            setPersonalMonthlyExpenses({
                ...personalMonthlyExpenses,
                otherExpenses: { ...values },
            })
        },
    })

    const assetsFormik = useFormik({
        initialValues: {
            currentAccount: 25000,
            savingAccount: 100000,
            otherLiquidAssets: 800000,
        },
        validationSchema: Yup.object({
            currentAccount: Yup.number().required('Required'),
            savingAccount: Yup.number().required('Required'),
            otherLiquidAssets: Yup.number().required('Required'),
        }),
        onSubmit: (values: Asset) => {
            console.log('assetsFormik', values)
        },
    })
    const policyChoiceFormik = useFormik({
        initialValues: {},

        onSubmit: (values: any) => {
            console.log('policyChoiceFormik', values)

            submitInterestProduct()
        },
    })

    const obligationFormik = useFormik({
        initialValues: {
            loansOutstanding: 5000,
            mortgageOutstanding: 25000,
            otherDebtObligations: 2000,
        },
        validationSchema: Yup.object({
            loansOutstanding: Yup.number().required('Required'),
            mortgageOutstanding: Yup.number().required('Required'),
            otherDebtObligations: Yup.number().required('Required'),
        }),
        onSubmit: (values: Obligations) => {
            console.log('obligationFormik', values)
        },
    })
    //const [isSubmitted, setSubmitted] = React.useState(false)
    //const healthFormik = useFormik({
    //    initialValues: {
    //        isCancerPatient: false,
    //        isAbleToBath: false,
    //        isAbleToDress: false,
    //        isAbleToEat: false,
    //        isAbleTogoToilet: false,
    //        isContinence: false,
    //        isAbleToTransfer: false,
    //        isCognitiveImpaired: false,
    //        hasLouGehrigDisease: false,
    //        onDialysis: false,
    //    },
    //    validationSchema: Yup.object({
    //        isCancerPatient: Yup.string().required(
    //            'Please ask if he/she has ever had cancer'
    //        ),
    //        isAbleToBath: Yup.boolean(),
    //        isAbleToDress: Yup.boolean(),
    //        isAbleToEat: Yup.boolean(),
    //        isAbleToToilet: Yup.boolean(),
    //        isContinence: Yup.boolean(),
    //        isAbleToTransfer: Yup.boolean(),
    //        isCognitiveImpaired: Yup.boolean(),
    //        hasLouGehrigDisease: Yup.boolean(),
    //        onDialysis: Yup.boolean(),
    //    }),
    //    onSubmit: (values: HealthQuestionnaire) => {
    //        //    console.log('values', values)
    //        healthFormik.setSubmitting(false)
    //        setSubmitted(true)
    //        setHealthQuestionnaire(values)
    //        //    router.push('../life/productsSelected')
    //    },
    //})

    const submitInterestProduct = () => {
        let policies: LifeInsuranceProduct[] = []
        selectedPolicy.map((policy) => {
            policies.push({
                name: policy.policy,
                id: policy.id,
                description: policy.policy,
            })
        })
        setInterestedProduct(policies)
    }

    const currentFormik = [
        policyChoiceFormik,
        IncomeFormik,
        housingFormik,
        FoodAndClothingFormik,
        transportFormik,
        entertainmentFormik,
        loanFormik,
        savingsFormik,
        otherExpensesFormik,
        assetsFormik,
        obligationFormik,
    ]

    const [step, setStep] = React.useState(0)
    const [total, setTotal] = React.useState(0)
    const nextStep = () => {
        if (step >= NUMBER_OF_STEPS - 1) setStep(NUMBER_OF_STEPS - 1)
        else setStep(step + 1)
    }
    const prevStep = () => {
        if (step <= 0) setStep(0)
        else setStep(step - 1)
    }

    const handleSteps = () => {
        switch (step) {
            case 0: {
                //setShowAskBestEstimate(false)
                return (
                    <LifeInsuranceChoices
                        selectedPolicy={selectedPolicy}
                        setSelectedPolicy={setSelectedPolicy}
                    />
                )
            }
            case 1: {
                //setShowAskBestEstimate(true)
                return (
                    <MonthlyIncome formik={IncomeFormik} setTotal={setTotal} />
                )
            }
            case 2: {
                //    setShowAskBestEstimate(true)
                return (
                    <AccommodationExpenses
                        formik={housingFormik}
                        setTotal={setTotal}
                    />
                )
            }
            case 3: {
                //    setShowAskBestEstimate(true)
                return (
                    <FoodExpenses
                        formik={FoodAndClothingFormik}
                        setTotal={setTotal}
                    />
                )
            }
            case 4: {
                //setShowAskBestEstimate(true)
                return (
                    <EntertainmentExpenses
                        formik={entertainmentFormik}
                        setTotal={setTotal}
                    />
                )
            }
            case 5: {
                //setShowAskBestEstimate(true)
                return (
                    <TransportationExpenses
                        formik={transportFormik}
                        setTotal={setTotal}
                    />
                )
            }
            case 6: {
                //setShowAskBestEstimate(true)
                return (
                    <LoanRepayments formik={loanFormik} setTotal={setTotal} />
                )
            }
            case 7: {
                //    setShowAskBestEstimate(true)
                return (
                    <SavingsOrInvestments
                        formik={savingsFormik}
                        setTotal={setTotal}
                    />
                )
            }
            case 8: {
                //    setShowAskBestEstimate(true)
                return (
                    <OtherPersonalExpenses
                        formik={otherExpensesFormik}
                        setTotal={setTotal}
                    />
                )
            }
            case 9: {
                //setShowAskBestEstimate(true)
                return (
                    <PersonAssets formik={assetsFormik} setTotal={setTotal} />
                )
            }
            case 10: {
                //setShowAskBestEstimate(true)
                return (
                    <PersonalObligations
                        formik={obligationFormik}
                        setTotal={setTotal}
                    />
                )
            }
            //case 11: {
            //    return <HealthStatus formik={healthFormik} />
            //}
            default: {
                return <Text>Wizard has ended</Text>
            }
        }
    }

    const headings = [
        'Policy Type Selection',
        'Monthly Income',
        'Monthly Housing Expenses',
        'Monthly Food and Clothing Expenses',
        'Monthly Entertainment Expenses',
        'Monthly Transportation Expenses',
        'Monthly Loan Repayments',
        'Monthly Savings and Investments',
        'Other Monthly Expenses',
        'Personal Assets',
        'Financial Obligations',
    ]

    return (
        <SafeAreaView style={styles.container}>
            <QuestionnaireScreen
                step={step}
                //showAskBestEstimate={showAskBestEstimate}
                heading={headings[step]}
                numberOfSteps={NUMBER_OF_STEPS}
            >
                {showAskBestEstimate && (
                    <View style={{ padding: 20 }}>
                        <Text style={globalStyles.header_group_text}>
                            Where there are no actual figures, please ask
                            customer to provide a best estimates
                        </Text>
                    </View>
                )}
                <ScrollView style={styles.content}>
                    <View style={styles.content}>{handleSteps()}</View>
                </ScrollView>
            </QuestionnaireScreen>
            {step > 0 && (
                <View style={globalStyles.subtotal}>
                    <Text style={globalStyles.subtotalText}>Total</Text>
                    <Text style={globalStyles.subtotalText}>
                        {new Intl.NumberFormat('Ghs', {
                            style: 'currency',
                            currency: 'Ghs',
                        }).format(total)}
                    </Text>
                </View>
            )}
            <View style={styles.footer}>
                <NavigationBar
                    enableBackButton
                    enableNextButton={!IsWizardFinished}
                    onBackButtonPress={() =>
                        step === 0 ? router.back() : prevStep()
                    }
                    onNextButtonPress={() => {
                        currentFormik[step].handleSubmit()
                        if (step === 0) {
                            selectedPolicy.length > 0
                                ? nextStep()
                                : Alert.alert(
                                      "Can't proceed",
                                      'Please select at least a product'
                                  )
                        } else {
                            if (currentFormik[step].isValid) nextStep()
                            if (step === NUMBER_OF_STEPS - 1)
                                router.push('/life/financialsummary')
                        }
                    }}
                />
            </View>
        </SafeAreaView>
    )
}
export default BudgetWizardForm
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        //paddingTop: 20,
    },
    footer: {
        justifyContent: 'flex-end',
    },
})
function setHealthQuestionnaire(values: HealthQuestionnaire) {
    throw new Error('Function not implemented.')
}
