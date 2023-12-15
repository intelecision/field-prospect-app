import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MicroScreen from './components/MicroScreen'
import { ScrollView } from 'react-native-gesture-handler'
import NavigationBar from '../../components/NavigationBar'
import PersonalInformation from './components/peronalInfomation'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { CustomerInformation, HealthQuestionnaire } from '../../model/entities'
import FinancialInformation from './components/financialInfomation'
import MicroCoverAmount from './components/miscrocoveramount'
import HealthStatus from '../life/components/Underwriting/HealthStatus'
import { router, useNavigation } from 'expo-router'
import Beneficiary from './components/Beneficiary'
import DeclarationPage from '../components/DeclarationPage'
import SummaryPage from './SummaryPage'
import { MicroIncomeAndExpenses } from '../../model/Quotes'

const WizardSteps = [
    {
        step: 'Personal Information',
        narrative:
            'Asking personal information about the client,\n client should have, Ghana Card, Drivers License, Passport, Voters ID, etc. for verification',
    },
    {
        step: 'Beneficiary',
        narrative:
            'Asking the client the beneficiary details,\n client should have, the beneficiary details, etc',
    },
    {
        step: 'Financial Information',
        narrative:
            'Asking financial information about the client,\n client should have,Income Bank or Mobile Money Account Number, Bank Name, Bank Branch, etc. for verification',
    },
    {
        step: 'Cover Amount',
        narrative:
            'Asking the client the amount of cover he/she wants,\n client should have, the amount of cover he/she wants, etc',
    },

    {
        step: 'Health Status',
        narrative:
            'Client will know  their monthly premium amount,\n client should have, to change the premium amount, etc',
    },
    {
        step: 'Summary',
        narrative: 'A summary of the product sold to the client,\n ',
    },
    {
        step: 'Declaration',
        narrative: 'A declaration of the product sold to the client,\n ',
    },
    {
        step: 'Payment',
        narrative:
            'Asking the client to make payment,\n Client can use any of the payment methods, Mobile Money, Bank Account, etc',
    },
]

const MicroWizardScreen = () => {
    const navigation = useNavigation()
    const [canMoveNext, setCanMoveNext] = useState<boolean>(true)
    const [currentIncome, setCurrentIncome] = useState<MicroIncomeAndExpenses>({
        monthlyIncome: 0,
        otherIncome: 0,
        monthlyExpenses: 0,
    })
    const [sumAssured, setSumAssured] = useState<number>(0)
    const clientFormik = useFormik({
        initialValues: {
            title: 'Madam',
            firstName: 'Yaa',
            middleName: 'Osem',
            lastName: 'Mensah',
            address: ' Adenta housing down \n near the police station',
            city: 'Accra',
            region: 'Gt Accra',
            ghanaCard: 'GHA-729034927-4',
            postalCodeOrDigitalAddress: 'GT-029-0293',
            sex: 'Female',
            dateOfBirth: new Date(2003, 2, 1),
            weight: 78,
            height: 1.7,
            occupation: 'Tomato Trader',
            email: '',
            contactPhone: '',
        },
        onSubmit: (values: CustomerInformation) => {
            console.log(values)
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Required'),
            firstName: Yup.string().required('Required'),
            middleName: Yup.string(),
            lastName: Yup.string().required('Required'),
            address: Yup.string().required('Required'),
            city: Yup.string().required('Required'),
            region: Yup.string().required('Required'),
            ghanaCard: Yup.string()
                .required('Required')
                .min(15, ' Ghana Card must be 15 Characters')
                .max(15, ' Ghana Card must be 15 Characters'),
            postalCodeOrDigitalAddress: Yup.string().required('Required'),
            sex: Yup.string().required('Required'),
            dateOfBirth: Yup.string().required('Required'),
        }),
    })
    const incomeFormik = useFormik({
        initialValues: {
            monthlyIncome: 1000,
            otherIncome: 0,
            monthlyExpenses: 0,
        },
        onSubmit: (values: MicroIncomeAndExpenses) => {
            console.log(values)
        },
        validationSchema: Yup.object({
            monthlyIncome: Yup.number().required('Required'),
            otherIncome: Yup.number(),
            monthlyExpenses: Yup.number(),
        }),
    })

    const healthFormik = useFormik({
        initialValues: {
            isCancerPatient: false,
            isAbleToBath: false,
            isAbleToDress: false,
            isAbleToEat: false,
            isAbleTogoToilet: false,
            isContinence: false,
            isAbleToTransfer: false,
            isCognitiveImpaired: false,
            hasLouGehrigDisease: false,
            onDialysis: false,
        },
        validationSchema: Yup.object({
            isCancerPatient: Yup.string().required(
                'Please ask if he/she has ever had cancer'
            ),
            isAbleToBath: Yup.boolean(),
            isAbleToDress: Yup.boolean(),
            isAbleToEat: Yup.boolean(),
            isAbleToToilet: Yup.boolean(),
            isContinence: Yup.boolean(),
            isAbleToTransfer: Yup.boolean(),
            isCognitiveImpaired: Yup.boolean(),
            hasLouGehrigDisease: Yup.boolean(),
            onDialysis: Yup.boolean(),
        }),
        onSubmit: (values: HealthQuestionnaire) => {
            //    console.log('values', values)
            healthFormik.setSubmitting(false)
            //setSubmitted(true)
            //setHealthQuestionnaire(values)
        },
    })

    const [currentStep, setCurrentStep] = useState(0)
    const MAX_STEPS = 6

    const nextStep = () => {
        if (currentStep < MAX_STEPS) {
            setCurrentStep(currentStep + 1)
        }
    }

    const previousStep = () => {
        if (currentStep >= 0) {
            setCurrentStep(currentStep - 1)
        }
    }

    const handleNext = () => {
        if (currentStep === 6) {
            router.push('/(tabs)/payments/')
        }
        nextStep()
    }

    const handleBack = () => {
        if (currentStep === 0) {
            router.back()
        }
        previousStep()
    }

    useEffect(() => {
        setCurrentIncome(incomeFormik.values)
    }, [incomeFormik.values])

    console.log('canMoveNext', canMoveNext)

    const renderSteps = () => {
        switch (currentStep) {
            case 0:
                return <PersonalInformation formik={clientFormik} />
            case 1:
                return <Beneficiary />
            case 2:
                return <FinancialInformation formik={incomeFormik} />

            case 3:
                return (
                    <MicroCoverAmount
                        setCanMoveNext={setCanMoveNext}
                        incomeAndExpenses={currentIncome}
                        setSumAssured={setSumAssured}
                    />
                )

            case 4:
                return <HealthStatus formik={healthFormik} />
            case 5:
                return <SummaryPage sumAssured={sumAssured} />
            case 6:
                return <DeclarationPage />
            //case 7:
            //    return <Text>Payment</Text>
            //default:
            //    return <Text>Default</Text>
        }
    }

    //;<Link href="/" style={styles.link}>
    //    <Text style={styles.linkText}>Go to home screen!</Text>
    //</Link>

    return (
        <MicroScreen
            heading={WizardSteps[currentStep].step}
            onCancel={() => {
                Alert.alert('Cancel', 'Are you sure you want to cancel?', [
                    {
                        text: 'Yes',
                        onPress: () => router.push('/(tabs)'),
                    },
                    {
                        text: 'No',
                        onPress: () => {},
                    },
                ])
            }}
        >
            <ScrollView style={styles.containerContent}>
                {renderSteps()}
            </ScrollView>
            <View style={styles.footer}>
                <NavigationBar
                    enableBackButton
                    enableNextButton={canMoveNext}
                    onNextButtonPress={handleNext}
                    onBackButtonPress={handleBack}
                />
            </View>
        </MicroScreen>
    )
}

export default MicroWizardScreen

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    containerContent: {
        flex: 1,
    },
    footer: {
        height: 120,
        justifyContent: 'flex-end',
        marginBottom: 36,
    },
})
