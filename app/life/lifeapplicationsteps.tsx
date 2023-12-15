import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import NavigationBar from '../../components/NavigationBar'
import { router } from 'expo-router'
import Screen from './components/Screen'
import ContentIndex from '../micro/components/ContentIndex'
import LifeInsuranceChoices from './lifeInsurancechoices'
import CustomerPersonalInformation from './components/CustomerPersonalInformation'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import {
    todayMinus18years,
    todayMinus75years,
} from '../../formulae/calculations'
import { useCustomerInfo } from '../../context/QuoteContext'
import { CustomerInformation } from '../../model/entities'
import ChooseProducts from './components/ChooseProducts'
import { Question } from '../data/questionaire'
type Props = {}

const Steps = [
    {
        title: 'Customer Information',
        description: 'Enter your personal information',
        onPress: () => {
            router.push('/micro/customerinformation')
        },
    },
    {
        title: 'Income and Expenses',
        description: 'Enter your income and expenses',
        onPress: () => {
            router.push('/micro/incomeandexpenses')
        },
    },
    {
        title: 'Assets and Liabilities',
        description: 'Enter your assets and liabilities',
        onPress: () => {
            router.push('/micro/assetsandliabilities')
        },
    },
    {
        title: 'Cover Amount',
        description: 'Enter your cover amount',
        onPress: () => {
            router.push('/micro/coveramount')
        },
    },
    {
        title: 'Quote Summary',
        description: 'View your quote summary',
        onPress: () => {
            router.push('/micro/quotesummary')
        },
    },
]
const NUMBER_OF_STEPS = 11
const LifeApplicationSteps = (props: Props) => {
    const [IsWizardFinished, setIsWizardFinished] = React.useState(false)
    const [step, setStep] = React.useState(0)
    const [total, setTotal] = React.useState(0)
    const [current, setCurrent] = React.useState(0)
    const [progress, setProgress] = React.useState(0)
    const [steps, setSteps] = React.useState(Steps)
    const [wizard, setWizard] = React.useState(0)
    const [wizardSteps, setWizardSteps] = React.useState(0)
    const [wizardProgress, setWizardProgress] = React.useState(0)
    const [wizardCurrent, setWizardCurrent] = React.useState(0)
    const [wizardTotal, setWizardTotal] = React.useState(0)
    const [wizardIsFinished, setWizardIsFinished] = React.useState(false)
    const [wizardIsStarted, setWizardIsStarted] = React.useState(false)
    const [wizardIsCancelled, setWizardIsCancelled] = React.useState(false)

    const [wizardIsError, setWizardIsError] = React.useState(false)
    const [wizardIsSuccess, setWizardIsSuccess] = React.useState(false)
    const [dateOfBirth, setDateOfBirth] = useState<Date | string>('')
    const { customerInfo, setCustomerInfo } = useCustomerInfo()
    const [selectedPolicy, setSelectedPolicy] = useState<Question[]>([])
    const formik = useFormik({
        initialValues: {
            title: 'Mr',
            firstName: 'Frank',
            lastName: 'Nyame',
            middleName: 'Kwame',
            sex: 'Male',
            email: 'nyame@yahoo.com',
            contactPhone: '022899997777',
            dateOfBirth: new Date(2003, 2, 1),
            address: '',
            city: '',
            region: '',
            postalCodeOrDigitalAddress: '',
            occupation: '',
            ghanaCard: '000000000000000',
            weight: 0,
            height: 0,
        },
        validationSchema: Yup.object().shape({
            title: Yup.string()
                .min(2, 'Title must be more than 2 characters')
                .max(5, 'Title must be less than 5 characters')
                .required('Required field'),
            firstName: Yup.string()
                .min(3, 'First name must be more than 3 characters')
                .required('Required field'),
            middleName: Yup.string()
                .min(3, 'Middle name must be at least 3 characters')
                .max(50),
            lastName: Yup.string()
                .min(3, 'Last name must be at least 3 characters')
                .required('Required field'),
            contactPhone: Yup.string()
                .min(10, 'number too short!')
                .required('Required field'),
            sex: Yup.string().required('Required field'),
            email: Yup.string()
                .email('Invalid email')
                .required('Required field'),
            dateOfBirth: Yup.date()
                .min(
                    new Date(todayMinus75years()),
                    'You must be between 18  and 75 years or younger'
                )
                .max(
                    new Date(todayMinus18years()),
                    'You must be 18 years or older'
                )
                .required('Required field'),
            ghanaCard: Yup.string()
                .required('Required')
                .min(15, ' Ghana Card must be 15 Characters')
                .max(15, ' Ghana Card must be 15 Characters'),
        }),
        onSubmit(values: CustomerInformation) {
            setCustomerInfo(values)
            //router.push('/life/budgetwizardform')
        },
    })

    const nextStep = () => {
        if (step < NUMBER_OF_STEPS) {
            setStep(step + 1)
        }
    }
    const previousStep = () => {
        if (step > 0) {
            setStep(step - 1)
        }
    }

    const nextWizardStep = () => {
        if (wizardCurrent < wizardTotal) {
            setWizardCurrent(wizardCurrent + 1)
        }
    }
    const previousWizardStep = () => {
        if (wizardCurrent > 0) {
            setWizardCurrent(wizardCurrent - 1)
        }
    }
    const cancelWizard = () => {
        setWizardIsCancelled(true)
    }
    const finishWizard = () => {
        setWizardIsFinished(true)
    }
    const startWizard = () => {
        setWizardIsStarted(true)
    }

    const errorWizard = () => {
        setWizardIsError(true)
    }
    const successWizard = () => {
        setWizardIsSuccess(true)
    }
    const resetWizard = () => {
        setWizardIsCancelled(false)

        setWizardIsError(false)
        setWizardIsFinished(false)
        setWizardIsStarted(false)
        setWizardIsSuccess(false)
        setWizardCurrent(0)
    }
    const reset = () => {
        setStep(0)
    }
    const next = () => {
        nextStep()
    }
    const previous = () => {
        previousStep()
    }
    const cancel = () => {
        reset()
    }

    const handleWizard = () => {
        switch (wizard) {
            case 0: {
                setWizardIsStarted(true)
                return <CustomerPersonalInformation formik={formik} />
            }
            case 1: {
                return (
                    <ChooseProducts
                        selectedPolicy={selectedPolicy}
                        setSelectedPolicy={setSelectedPolicy}
                    />
                )
            }
            default: {
                return <Text>Wizard not found</Text>
            }
        }
    }

    return (
        <View style={styles.container}>
            <Screen
                heading={'LifeApplication'}
                handleCancel={() => console.log('cancelled')}
            >
                <View style={styles.content}>
                    <ScrollView style={styles.content}>
                        {handleWizard()}
                    </ScrollView>
                </View>
                <View style={styles.footer}>
                    <NavigationBar
                        enableBackButton
                        enableNextButton={true}
                        onBackButtonPress={() => router.back()}
                        onNextButtonPress={() => {
                            nextWizardStep()
                            router.push('/micro/microwizard')
                        }}
                    />
                </View>
            </Screen>
        </View>
    )
}

export default LifeApplicationSteps

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
    footer: {
        width: '100%',
        height: 150,
        padding: 20,
        position: 'relative',
        bottom: 0,
    },
})
