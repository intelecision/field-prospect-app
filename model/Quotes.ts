import {
    Entertainment,
    FoodAndClothing,
    HousingAndUtilities,
    LifeInsuranceProduct,
    LoansAndDebts,
    MonthlySalary,
    OtherExpenses,
    SavingsAndInvestments,
    Transportation,
} from './entities'

export interface CustomerInfo {
    title: string
    firstName: string
    middleName: string
    lastName: string
    sex: 'Male' | 'Female' | ''
    email: string
    contactPhone: string
    address: string
    city: string
    region: string
    country: string
    postalCodeOrDigitalAddress: string

    dateOfBirth: Date | string
    occupation: string
}

export interface AssetAndLiabilities {
    currentAccount: number
    savingAccount: number
    //treasuryBills: number
    //fixedDeposits: number
    otherLiquidAssets: number
    otherDebtObligations: number
    loansOutstanding: number
    mortgageOutstanding: number
    annualIncome?: number
    projectedAnnualExpenses?: number
}

export interface IncomeAndExpenses {
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

export interface MicroIncomeAndExpenses {
    monthlyIncome: number
    otherIncome: number
    monthlyExpenses: number
}

export interface PersonalMonthlyExpenses {
    monthlySalary: MonthlySalary
    houseAndUtilities: HousingAndUtilities
    foodAndClothing: FoodAndClothing
    transportation: Transportation
    entertainment: Entertainment
    loansAndDebts: LoansAndDebts
    savingsAndInvestments: SavingsAndInvestments
    otherExpenses: OtherExpenses
}

export const PersonalMonthlyExpenses: PersonalMonthlyExpenses = {
    monthlySalary: {
        currentMonthlySalary: 0,
        otherIncome: 0,
    },
    houseAndUtilities: {
        mortgageOrRent: 0,
        phone: 0,
        electricity: 0,
        isMortgageOrRent: true,
        gas: 0,
        satelliteTv: 0,
        waterAndSewer: 0,
        wasteRemoval: 0,
        maintenanceOrRepair: 0,
        supplies: 0,
        other: 0,
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
    foodAndClothing: {
        groceries: 0,
        restaurant: 0,

        other: 0,
    },
    transportation: {
        vehicleInsurance: 0,
        vehiclePayment: 0,
        fuel: 0,
        maintenance: 0,
        busTaxiFare: 0,
        other: 0,
        licensing: 0,
    },
    entertainment: {
        movies: 0,
        concerts: 0,
        sportingEvents: 0,
        theaters: 0,
        other: 0,
    },
    loansAndDebts: {
        creditCard: 0,
        studentLoan: 0,
        personalLoan: 0,
        other: 0,
    },
    savingsAndInvestments: {
        pensionAccount: 0,
        investmentsAccount: 0,
        other: 0,
    },
    otherExpenses: {
        healthCare: 0,
        childrenEducationFees: 0,
        otherEducationalExpenses: 0,
        LifeInsurancePremiums: 0,
    },
}

export interface CoverAmount {
    idealAmountOfCover: number
    minimumAmountOfCover?: number
    maximumAmountOfCover?: number
    acceptableAmountOfCover?: number
    acceptableMonthlyPremium?: number
    shortfall: number
    netAssets: number
    totalAssets: number
    totalLiabilities: number
    totalExpenses: number
    totalIncome: number
    totalMonthlyExpenses: number
    totalMonthlyIncome: number
    outstandingDebtObligations: number
    projected20YearsExpenses: number
    totalFinancialObligations: number
    balanceOfIncomeAndExpenses: number
}

export interface QuoteSummary {
    name?: string
    product?: LifeInsuranceProduct[]
    accepted?: boolean
    affordableAmount?: number
    affordableShortfall?: number
    affordablePremium?: number
}
