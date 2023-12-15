import { CustomerInfo } from './Quotes'
export interface Contact {
    id: number
    name: string
    email: string
    phone: string
    address: string //look at using the address interface
    city: string
    state: string
    zip: string
    country: string
}
export interface Address {
    id: number
    address: string
    city: string
    town: string
    state: string
    postcode: string
    country: string
}

export interface Customer {
    title: string
    firstName: string
    middleName: string
    lastName: string
    sex: 'Male' | 'Female' | ''
    contact: Contact
    occupation: string
    nameOfEmployer: string
    dateOfBirth?: Date

    //customerInfo: CustomerInfo
}
export interface Questionnaire {
    customerInfoQuestionnaire: CustomerInfoQuestionnaire
    tobaccoQuestionnaire: TobaccoAnDrugUseQuestionnaire
    healthQuestionnaire: HealthQuestionnaire
}

export interface CustomerInfoQuestionnaire {
    //dateOfBirth: Date
    height: number
    weight: number
    maritalStatus: 'Single' | 'Married' | 'Divorced' | 'Widowed'
    hasChildren: boolean
    numberOfChildren?: number
    nameOfEmployer: string
    occupation: string
    highestLevelEducation: string
}

export interface CustomerInfoQuestionnaireExt
    extends CustomerInfoQuestionnaire {
    day: string
    month: string
    year: string
}

export interface TobaccoAnDrugUseQuestionnaire {
    haveYouUsedNicotineBasedProducts: boolean
    whichNicotineBasedProducts: string
    areYouSmoker: boolean
    ifSmokerHowManyPerDay: number
    haveYouUsedIllicitDrugs: 'Yes' | 'No' | 'Occasionally'
    areYouAlcoholic?: boolean
    ifAlcoholHowManyPerDay?: number
}

export interface HealthQuestionnaire {
    isCancerPatient: boolean
    isAbleToBath: boolean
    isAbleToDress: boolean
    isAbleToEat: boolean
    isAbleTogoToilet: boolean
    isContinence: boolean
    isAbleToTransfer: boolean
    isCognitiveImpaired: boolean
    hasLouGehrigDisease: boolean
    onDialysis: boolean
}

export interface Obligations {
    otherDebtObligations: number
    loansOutstanding: number
    mortgageOutstanding: number
}
export interface Asset {
    currentAccount: number
    savingAccount: number
    otherLiquidAssets: number
}
export interface User {
    id: number
    name: string
    email: string
    phone: string
    address: string
    city: string
    state: string
    zip: string
}

export interface MonthlySalary {
    currentMonthlySalary: number
    otherIncome: number
}
export interface HousingAndUtilities {
    mortgageOrRent: number
    phone: number
    electricity: number
    isMortgageOrRent: boolean
    gas: number
    satelliteTv: number
    waterAndSewer: number
    wasteRemoval: number
    maintenanceOrRepair: number
    supplies: number
    other: number
    totalHouseAndUtilities: () => number
}
export interface FoodAndClothing {
    groceries: number
    restaurant: number
    other: number
}
export interface Transportation {
    vehiclePayment: number
    vehicleInsurance: number
    busTaxiFare: number
    fuel: number
    maintenance: number
    licensing: number
    other: number
}
export interface LifeInsuranceProduct {
    id: number
    name: string
    description: string
}
export interface InsurancePolicy {
    id: string
    policyNumber: string
    policyType: string
    policyName: string
    policyStartDate: Date
    policyEndDate: Date
    policyAmount: number
    policyPremium: number
}
export interface Entertainment {
    movies: number
    concerts: number
    sportingEvents: number
    theaters: number
    other: number
}

export interface LoansAndDebts {
    creditCard: number
    studentLoan: number
    personalLoan: number
    other: number
}
export interface SavingsAndInvestments {
    pensionAccount: number
    investmentsAccount: number
    other: number
}
export interface OtherExpenses {
    healthCare: number
    childrenEducationFees: number
    otherEducationalExpenses: number

    LifeInsurancePremiums: number
}

export interface Address {
    address: string
    city: string
    town: string
    state: string
    postcode: string
    country: string
}

export interface CustomerInformation {
    title: string
    firstName: string
    middleName: string
    lastName: string
    address: string
    city: string
    region: string
    ghanaCard: string
    postalCodeOrDigitalAddress: string
    sex: 'Male' | 'Female' | ''
    dateOfBirth: Date
    weight: number
    height: number
    occupation: string
    email: string
    contactPhone: string
    country?: string
}

export interface BeneficiaryInformation extends Address {
    title: string
    firstName: string
    middleName: string
    lastName: string
    address: string
    city: string
    region: string
    ghanaCard: string
    postalCodeOrDigitalAddress: string
    sex: 'Male' | 'Female' | ''
    dateOfBirth: Date

    email: string
    contactPhone: string
}
