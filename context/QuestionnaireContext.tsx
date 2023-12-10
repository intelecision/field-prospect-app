import { ReactNode, createContext, useContext, useState } from 'react'
import {
    CustomerInfoQuestionnaire,
    HealthQuestionnaire,
    TobaccoAnDrugUseQuestionnaire,
} from '../model/entities'

type QuestionnaireContextType = {
    customerInfoQuestionnaire: CustomerInfoQuestionnaire
    tobaccoQuestionnaire: TobaccoAnDrugUseQuestionnaire
    healthQuestionnaire: HealthQuestionnaire
    setCustomerInfoQuestionnaire: (
        customerInfoQuestionnaire: CustomerInfoQuestionnaire
    ) => void
    setTobaccoQuestionnaire: (
        tobaccoQuestionnaire: TobaccoAnDrugUseQuestionnaire
    ) => void
    setHealthQuestionnaire: (healthQuestionnaire: HealthQuestionnaire) => void
}

export const initialContextState: QuestionnaireContextType = {
    customerInfoQuestionnaire: {
        height: 0,
        weight: 0,
        maritalStatus: 'Single',
        hasChildren: false,
        nameOfEmployer: '',
        occupation: '',
        highestLevelEducation: '',
    },
    tobaccoQuestionnaire: {
        haveYouUsedNicotineBasedProducts: false,
        whichNicotineBasedProducts: '',
        areYouSmoker: false,
        ifSmokerHowManyPerDay: 0,
        haveYouUsedIllicitDrugs: 'No',
    },
    healthQuestionnaire: {
        isCognitiveImpaired: false,
        isAbleToBath: false,
        isAbleToDress: false,
        isAbleToEat: false,
        isAbleTogoToilet: false,
        isContinence: false,
        isAbleToTranfer: false,
        hasLouGehrigDisease: false,
        onDialysis: false,
        isCancerPatient: 'No',
    },

    setCustomerInfoQuestionnaire: () => {},
    setTobaccoQuestionnaire: () => {},
    setHealthQuestionnaire: () => {},
}
export const QuestionnaireContext = createContext<
    QuestionnaireContextType | undefined
>(undefined)

export const QuestionnaireConsumer = QuestionnaireContext.Consumer

export const QuestionnaireProvider = ({
    children,
}: {
    children: ReactNode
}) => {
    const [customerInfoQuestionnaire, setCustomerInfoQuestionnaire] =
        useState<CustomerInfoQuestionnaire>(
            initialContextState.customerInfoQuestionnaire
        )
    const [tobaccoQuestionnaire, setTobaccoQuestionnaire] =
        useState<TobaccoAnDrugUseQuestionnaire>(
            initialContextState.tobaccoQuestionnaire
        )
    const [healthQuestionnaire, setHealthQuestionnaire] =
        useState<HealthQuestionnaire>(initialContextState.healthQuestionnaire)

    return (
        <QuestionnaireContext.Provider
            value={{
                customerInfoQuestionnaire,
                setCustomerInfoQuestionnaire,
                tobaccoQuestionnaire,
                setTobaccoQuestionnaire,
                healthQuestionnaire,
                setHealthQuestionnaire,
            }}
        >
            {children}
        </QuestionnaireContext.Provider>
    )
}

export const useQuestionnaireContextType = () => {
    const questionnaireContext = useContext(QuestionnaireContext)
    if (questionnaireContext === undefined) {
        throw new Error(
            'useQuestionnaireContextType must be used within a QuestionnaireContextProvider'
        )
    }
    return questionnaireContext
}
export const useCustomerQuestionnaireContext = () => {
    const { customerInfoQuestionnaire, setCustomerInfoQuestionnaire } =
        useQuestionnaireContextType()
    return { customerInfoQuestionnaire, setCustomerInfoQuestionnaire }
}
export const useTobaccoQuestionnaireContext = () => {
    const { tobaccoQuestionnaire, setTobaccoQuestionnaire } =
        useQuestionnaireContextType()
    return { tobaccoQuestionnaire, setTobaccoQuestionnaire }
}
export const useHealthQuestionnaireContext = () => {
    const { healthQuestionnaire, setHealthQuestionnaire } =
        useQuestionnaireContextType()
    return { healthQuestionnaire, setHealthQuestionnaire }
}
export const useQuestionnaireContext = () => {
    const { customerInfoQuestionnaire, setCustomerInfoQuestionnaire } =
        useQuestionnaireContextType()
    const { tobaccoQuestionnaire, setTobaccoQuestionnaire } =
        useQuestionnaireContextType()
    const { healthQuestionnaire, setHealthQuestionnaire } =
        useQuestionnaireContextType()
    return {
        customerInfoQuestionnaire,
        setCustomerInfoQuestionnaire,
        tobaccoQuestionnaire,
        setTobaccoQuestionnaire,
        healthQuestionnaire,
        setHealthQuestionnaire,
    }
}
