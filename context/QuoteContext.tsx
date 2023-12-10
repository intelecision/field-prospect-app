import React, { ReactNode, createContext, useContext, useState } from 'react'
import {
    AssetAndLiabilities,
    CoverAmount,
    CustomerInfo,
    IncomeAndExpenses,
    PersonalMonthlyExpenses,
    QuoteSummary,
} from '../model/Quotes'
import { LifeInsuranceProduct, MonthlySalary } from '../model/entities'

type QuoteContextType = {
    customerInfo: CustomerInfo
    setCustomerInfo: (customerInfo: CustomerInfo) => void
    monthlySalary: MonthlySalary
    setMonthlyIncome: (monthlySalary: MonthlySalary) => void
    interestedProduct: LifeInsuranceProduct[]
    setInterestedProduct: (interestProduct: LifeInsuranceProduct[]) => void

    assetAndLiabilities: AssetAndLiabilities
    setAssetAndLiabilities: (assetAndLiabilities: AssetAndLiabilities) => void

    incomeAndExpenses: IncomeAndExpenses
    setIncomeAndExpenses: (incomeAndExpenses: IncomeAndExpenses) => void
    personalMonthlyExpenses: PersonalMonthlyExpenses
    setPersonalMonthlyExpenses: (
        personalMonthlyExpenses: PersonalMonthlyExpenses
    ) => void
    coverAmount: CoverAmount
    setCoverAmount: (coverAmount: CoverAmount) => void
    quoteSummary: QuoteSummary
    setQuoteSummary: (quoteSummary: QuoteSummary) => void
}

export const initialContextState: QuoteContextType = {
    customerInfo: {
        title: ' ',
        firstName: ' ',
        middleName: ' ',
        lastName: ' ',
        sex: '',
        email: ' ',
        contactPhone: ' ',
        address: ' ',
        city: ' ',
        region: ' ',
        country: ' ',
        postalCodeOrDigitalAddress: ' ',

        dateOfBirth: new Date(),
        occupation: ' ',
    },
    setCustomerInfo: () => {},

    monthlySalary: {
        currentMonthlySalary: 0,
        otherIncome: 0,
    },
    setMonthlyIncome: () => {},
    assetAndLiabilities: {
        currentAccount: 0,
        savingAccount: 0,
        otherLiquidAssets: 0,
        otherDebtObligations: 0,
        loansOutstanding: 0,
        mortgageOutstanding: 0,
        annualIncome: 0,
        projectedAnnualExpenses: 0,
    },
    setAssetAndLiabilities: () => {},
    incomeAndExpenses: {
        currentMonthlySalary: 0,
        otherIncome: 0,
        housing: 0,
        transportation: 0,
        food: 0,
        entertainment: 0,
        otherExpenses: 0,
        loans: 0,
        savingsOrInvestments: 0,
    },
    setIncomeAndExpenses: () => {},
    personalMonthlyExpenses: {
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
            vehiclePayment: 0,
            vehicleInsurance: 0,
            fuel: 0,
            maintenance: 0,
            busTaxiFare: 0,
            licensing: 0,
            other: 0,
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
        monthlySalary: {
            currentMonthlySalary: 0,
            otherIncome: 0,
        },
    },
    setPersonalMonthlyExpenses: () => {},
    interestedProduct: [],
    setInterestedProduct: () => (InterestProduct: LifeInsuranceProduct[]) => {},
    coverAmount: {
        idealAmountOfCover: 0,
        shortfall: 0,
        netAssets: 0,
        totalAssets: 0,
        totalLiabilities: 0,
        totalExpenses: 0,
        totalIncome: 0,
        totalMonthlyExpenses: 0,
        totalMonthlyIncome: 0,
        outstandingDebtObligations: 0,
        projected20YearsExpenses: 0,
        totalFinancialObligations: 0,
        balanceOfIncomeAndExpenses: 0,
    },

    setCoverAmount: (coverAmount: CoverAmount) => {},
    quoteSummary: {
        name: '',
        product: [],
        accepted: false,
    },
    setQuoteSummary: function (quoteSummary: QuoteSummary): void {
        throw new Error('Function not implemented.')
    },
}
export const QuoteContext = createContext<QuoteContextType | undefined>(
    undefined
)

export const QuoteContextProvider = ({ children }: { children: ReactNode }) => {
    const [customerInfo, setCustomerInfo] = useState<CustomerInfo>(
        initialContextState.customerInfo
    )
    const [assetAndLiabilities, setAssetAndLiabilities] =
        useState<AssetAndLiabilities>(initialContextState.assetAndLiabilities)
    const [incomeAndExpenses, setIncomeAndExpenses] =
        useState<IncomeAndExpenses>(initialContextState.incomeAndExpenses)
    const [personalMonthlyExpenses, setPersonalMonthlyExpenses] =
        useState<PersonalMonthlyExpenses>(
            initialContextState.personalMonthlyExpenses
        )
    const [monthlySalary, setMonthlyIncome] = useState<MonthlySalary>(
        initialContextState.monthlySalary
    )
    const [interestedProduct, setInterestedProduct] = useState<
        LifeInsuranceProduct[]
    >(initialContextState.interestedProduct)
    const [coverAmount, setCoverAmount] = useState<CoverAmount>(
        initialContextState.coverAmount
    )

    const [quoteSummary, setQuoteSummary] = useState<QuoteSummary>(
        initialContextState.quoteSummary
    )
    return (
        <QuoteContext.Provider
            value={{
                customerInfo,
                setCustomerInfo,
                assetAndLiabilities,
                setAssetAndLiabilities,
                incomeAndExpenses,
                setIncomeAndExpenses,
                personalMonthlyExpenses,
                setPersonalMonthlyExpenses,
                monthlySalary,
                setMonthlyIncome,
                interestedProduct: interestedProduct,
                setInterestedProduct: setInterestedProduct,
                coverAmount: coverAmount,
                setCoverAmount: setCoverAmount,
                quoteSummary: quoteSummary,
                setQuoteSummary: setQuoteSummary,
            }}
        >
            {children}
        </QuoteContext.Provider>
    )
}
export const useQuoteContext = () => {
    const quoteContext = useContext(QuoteContext)
    if (quoteContext === undefined) {
        throw new Error('useQuoteContext must be used within a QuoteProvider')
    }
    return quoteContext
}

export const useCustomerInfo = () => {
    const { customerInfo, setCustomerInfo } = useQuoteContext()
    return { customerInfo, setCustomerInfo }
}
export const useAssetAndLiabilities = () => {
    const { assetAndLiabilities, setAssetAndLiabilities } = useQuoteContext()
    return { assetAndLiabilities, setAssetAndLiabilities }
}
export const useIncomeAndExpenses = () => {
    const { incomeAndExpenses, setIncomeAndExpenses } = useQuoteContext()
    return { incomeAndExpenses, setIncomeAndExpenses }
}
export const usePersonalMonthlyExpenses = () => {
    const { personalMonthlyExpenses, setPersonalMonthlyExpenses } =
        useQuoteContext()
    return { personalMonthlyExpenses, setPersonalMonthlyExpenses }
}

export const useInterestedProduct = () => {
    const { interestedProduct, setInterestedProduct } = useQuoteContext()
    return { interestedProduct, setInterestedProduct }
}
export const useCoverAmount = () => {
    const { coverAmount, setCoverAmount } = useQuoteContext()
    return { coverAmount, setCoverAmount }
}

export const useQuoteSummary = () => {
    const { quoteSummary, setQuoteSummary } = useQuoteContext()
    return { quoteSummary, setQuoteSummary }
}

export const useQuoteContextType = () => {
    const { customerInfo, setCustomerInfo } = useQuoteContext()
    const { assetAndLiabilities, setAssetAndLiabilities } = useQuoteContext()
    const { incomeAndExpenses, setIncomeAndExpenses } = useQuoteContext()
    const { personalMonthlyExpenses, setPersonalMonthlyExpenses } =
        useQuoteContext()
    const { coverAmount, setCoverAmount } = useQuoteContext()
    const { quoteSummary, setQuoteSummary } = useQuoteContext()
    return {
        customerInfo,
        setCustomerInfo,
        assetAndLiabilities,
        setAssetAndLiabilities,
        incomeAndExpenses,
        setIncomeAndExpenses,
        personalMonthlyExpenses,
        setPersonalMonthlyExpenses,
        coverAmount,
        setCoverAmount,
        quoteSummary,
        setQuoteSummary,
    }
}
