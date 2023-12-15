import { SafeAreaView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router } from 'expo-router'
import NavigationBar from '../../components/NavigationBar'
import { useFormik } from 'formik'
import { ScrollView } from 'react-native-gesture-handler'
import HealthStatus from './components/Underwriting/HealthStatus'

import PersonalInfo from './components/Underwriting/PersonalInfo'
import { useQuestionnaireContext } from '../../context/QuestionnaireContext'
import {
    CustomerInfoQuestionnaire,
    HealthQuestionnaire,
    TobaccoAnDrugUseQuestionnaire,
} from '../../model/entities'
import * as Yup from 'yup'
import QuestionnaireScreen from './components/QuestionnaireScreen'
import Screen from './components/Screen'
import { he } from 'date-fns/locale'

const FieldUnderwriting = () => {
    const {
        customerInfoQuestionnaire,
        setCustomerInfoQuestionnaire,
        tobaccoQuestionnaire,
        setTobaccoQuestionnaire,
        healthQuestionnaire,
        setHealthQuestionnaire,
    } = useQuestionnaireContext()
    const [isSubmitted, setSubmitted] = useState(false)

    const getMinimumAgeForInsurance = () => {
        const today = new Date()
        const year = today.getFullYear()
        const month = today.getMonth()
        const day = today.getDate()
        const minimumAge = new Date(year - 18, month, day)
        return minimumAge
    }

    const getMaximumAgeForInsurance = (): Date => {
        const today = new Date()
        const year = today.getFullYear()
        const month = today.getMonth()
        const day = today.getDate()
        const maximumAge = new Date(year - 65, month, day)
        return maximumAge
    }

    const minimumStartYear = () => {
        const minimumAge = getMinimumAgeForInsurance()
        return minimumAge.getFullYear()
    }

    const customerFormik = useFormik({
        initialValues: {
            height: 175,
            occupation: 'Mechanic',
            maritalStatus: 'Single',
            highestLevelEducation: 'BSC',
            weight: 90,
            hasChildren: false,
            nameOfEmployer: 'VW Africa Automobile',
        },
        validateOnMount: false,
        validateOnChange: false,
        validationSchema: Yup.object({
            height: Yup.number()
                .moreThan(0, 'his/her height should be more than 0')
                .required('Please ask for his/her height'),
            occupation: Yup.string().required(
                'please ask for his/her occupation'
            ),
            maritalStatus: Yup.string().required(
                'please ask for his/her marital status'
            ),
            highestLevelEducation: Yup.string().required(
                'please ask for his/her education'
            ),
            weight: Yup.number()
                .moreThan(0, 'his/of her weight should be more than 0')
                .required('Please ask for his/her weight'),
            hasChildren: Yup.boolean(),
            nameOfEmployer: Yup.string().required(
                'please ask for his/her employer'
            ),

            //day: Yup.number()
            //    .max(31)
            //    .required('Please enter a valid day of the month'),
            //month: Yup.number().max(12).required('Please enter a valid month'),
            //year: Yup.number()
            //    .min(
            //        getMaximumAgeForInsurance().getFullYear(),
            //        'Must be 65 years old or younger'
            //    )
            //    .max(MAX_YEAR, 'Must be less 18 or older')

            //    .required('Year of birth is required'),
        }),
        onSubmit: (values: CustomerInfoQuestionnaire, actions: any) => {
            customerFormik.setSubmitting(false)
            setSubmitted(true)

            setCustomerInfoQuestionnaire(values)
        },
    })

    const tobaccoFormik = useFormik({
        initialValues: {
            haveYouUsedNicotineBasedProducts: false,
            whichNicotineBasedProducts: '',
            areYouSmoker: false,
            ifSmokerHowManyPerDay: 0,
            haveYouUsedIllicitDrugs: 'No',
            areYouAlcoholic: false,
            ifAlcoholHowManyPerDay: 0,
        },
        onSubmit: (values: TobaccoAnDrugUseQuestionnaire) => {
            //console.log('values', values)
            tobaccoFormik.setSubmitting(false)
            setSubmitted(true)
            setTobaccoQuestionnaire(values)
        },
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
            setSubmitted(true)
            setHealthQuestionnaire(values)
            //    router.push('../life/productsSelected')
        },
    })

    const headings = [
        'Personal Information',
        //'Tobacco and Substance Usage',
        'Health Status',
    ]
    const currentFormik = [customerFormik, healthFormik]
    const [currentStep, setCurrentStep] = useState(0)
    const nextStep = () => {
        if (currentStep <= 1) {
            setCurrentStep(currentStep + 1)
        }
        //else setCurrentStep(currentStep + 1)
        setSubmitted(false)
    }
    const prevStep = () => {
        if (currentStep >= 0) {
            setCurrentStep(currentStep - 1)
        }
        setSubmitted(false)
    }

    const handelUnderWritingSteps = () => {
        switch (currentStep) {
            case 0:
                return <PersonalInfo formik={customerFormik} />

            case 1:
                return <HealthStatus formik={healthFormik} />
        }
    }

    // Async Validation
    const sleep = (ms: number) =>
        new Promise((resolve) => setTimeout(resolve, ms))

    const validate = async () => {
        return sleep(1000).then(() => {
            currentFormik[currentStep].submitForm().then(() => {
                return currentFormik[currentStep].errors
            })
        })
    }
    useEffect(() => {
        if (isSubmitted && currentStep < 1) {
            nextStep()
        }
    }, [currentStep, isSubmitted])

    return (
        <SafeAreaView style={[styles.container]}>
            <Screen
                heading="Your Health Status"
                handleCancel={() => router.back()}
            >
                {/*<QuestionnaireScreen
                step={currentStep}
                heading="Health Status" //{headings[currentStep]}
                numberOfSteps={2}
            >*/}
                <ScrollView style={styles.content}>
                    {
                        <HealthStatus formik={healthFormik} />

                        //handelUnderWritingSteps()
                    }
                </ScrollView>
                {/*</QuestionnaireScreen>*/}
            </Screen>

            <NavigationBar
                enableBackButton
                enableNextButton
                onBackButtonPress={() =>
                    currentStep === 0 ? router.back() : prevStep()
                }
                onNextButtonPress={() => {
                    //    currentFormik[currentStep].handleSubmit()
                    healthFormik.handleSubmit()
                    if (currentStep === 0) router.push('/life/quoteSummary')
                }}
            />
        </SafeAreaView>
    )
}

export default FieldUnderwriting

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        backgroundColor: '#fff',
        //padding: 20,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
})
