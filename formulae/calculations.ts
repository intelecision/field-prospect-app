import { InsurancePremiums } from '../app/data/policies'

const RuleTable = [
    { age: 23, multiple: 35 },
    { age: 24, multiple: 35 },
    { age: 25, multiple: 35 },
    { age: 26, multiple: 35 },
    { age: 27, multiple: 35 },
    { age: 28, multiple: 35 },
    { age: 29, multiple: 35 },
    { age: 30, multiple: 35 },
    { age: 31, multiple: 35 },
    { age: 32, multiple: 35 },
    { age: 33, multiple: 35 },
    { age: 34, multiple: 35 },
    { age: 35, multiple: 35 },
    { age: 36, multiple: 35 },
    { age: 37, multiple: 35 },
    { age: 38, multiple: 35 },
    { age: 39, multiple: 35 },
    { age: 40, multiple: 35 },
    { age: 41, multiple: 25 },
    { age: 42, multiple: 25 },
    { age: 43, multiple: 25 },
    { age: 44, multiple: 25 },
    { age: 45, multiple: 25 },
    { age: 46, multiple: 25 },
    { age: 47, multiple: 25 },
    { age: 48, multiple: 25 },
    { age: 49, multiple: 25 },
    { age: 50, multiple: 25 },
    { age: 51, multiple: 20 },
    { age: 52, multiple: 20 },
    { age: 53, multiple: 20 },
    { age: 54, multiple: 20 },
    { age: 55, multiple: 20 },
    { age: 56, multiple: 20 },
    { age: 57, multiple: 20 },
    { age: 58, multiple: 20 },
    { age: 59, multiple: 20 },
    { age: 60, multiple: 20 },
    { age: 61, multiple: 10 },
    { age: 62, multiple: 10 },
    { age: 63, multiple: 10 },
    { age: 64, multiple: 10 },
    { age: 65, multiple: 10 },
    { age: 66, multiple: 10 },
    { age: 67, multiple: 10 },
    { age: 68, multiple: 10 },
    { age: 69, multiple: 10 },
    { age: 70, multiple: 10 },
    { age: 71, multiple: 5 },
    { age: 72, multiple: 5 },
    { age: 73, multiple: 5 },
    { age: 74, multiple: 5 },
    { age: 75, multiple: 5 },
    { age: 76, multiple: 5 },
    { age: 77, multiple: 5 },
    { age: 78, multiple: 5 },
    { age: 79, multiple: 5 },
    { age: 80, multiple: 5 },
]

//export const MonthlyPremium = [
//    { ageGroup: '18-24', amount: 10000, premium: 10 },
//    { ageGroup: '25-29', amount: 10000, premium: 12 },
//    { ageGroup: '30-34', amount: 10000, premium: 15 },
//    { ageGroup: '35-39', amount: 10000, premium: 20 },
//    { ageGroup: '40-44', amount: 10000, premium: 25 },
//    { ageGroup: '45-49', amount: 10000, premium: 30 },
//    { ageGroup: '50-54', amount: 10000, premium: 35 },
//    { ageGroup: '55-59', amount: 10000, premium: 40 },
//    { ageGroup: '60-64', amount: 10000, premium: 45 },
//    { ageGroup: '65-69', amount: 10000, premium: 50 },
//    { ageGroup: '70-74', amount: 10000, premium: 55 },
//]
export const RuleOfThumb = (age: number, annualIncome: number): number => {
    const rule = RuleTable.find((rule) => rule.age === age)
    return rule ? rule.multiple * annualIncome : 0
}

export const compoundInterest = (
    principal: number,
    rate: number,
    years: number
): number => {
    return principal * Math.pow(1 + rate, years)
}

export const compoundInterestOverTime = (
    principal: number,
    rate: number,
    years: number
): number[] => {
    const results = []
    for (let i = 0; i < years; i++) {
        results.push(compoundInterest(principal, rate, i))
    }
    return results
}

export const sumOfCompoundInterest = (
    principal: number,
    rate: number,
    years: number
): number => {
    let result = 0
    for (let i = 0; i < years; i++) {
        result += compoundInterest(principal, rate, i)
    }
    return result
}

export function strToNumber(value: number) {
    if (Number.isNaN(parseInt(value.toString()))) {
        return 0
    }
    return parseInt(value.toString())
}

export function strToNumberExt(value: string) {
    if (Number.isNaN(parseInt(value.toString()))) {
        return 0
    }
    return parseInt(value.toString())
}

const ceilIdealAMountOfCoverToNearestThousand = (shortFall: number) => {
    return Math.ceil(shortFall / 1000) * 1000
}
const ceilIdealAMountOfCoverToNearestMillion = (shortFall: number) => {
    return Math.ceil(shortFall / 1000000) * 1000000
}
const ceilIdealAMountOfCoverToNearestHundredThousand = (shortFall: number) => {
    return Math.ceil(shortFall / 100000) * 100000
}

export const getMonthlyPremiumByAge = (
    dateOfBirth: Date | string,
    amount: number
) => {
    const age = getAge(dateOfBirth)
    console.log('age grp', getAgeGroup(age))
    const premium = InsurancePremiums.find(
        (p) => p.ageGroup === getAgeGroup(age) && p.amount === amount
    )
    console.log('premium g', dateOfBirth, premium)
    return premium ? premium.premium : 0
}

function getAge(dateOfBirth: Date) {
    const today = new Date()
    const birthDate = new Date(dateOfBirth)
    let age = today.getFullYear() - birthDate.getFullYear()

    const m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--
    }
    return age
}
function getAgeGroup(age: number) {
    if (age >= 18 && age <= 24) {
        return '18-24'
    }
    if (age >= 25 && age <= 29) {
        return '25-29'
    }
    if (age >= 30 && age <= 34) {
        return '30-34'
    }
    if (age >= 35 && age <= 39) {
        return '35-39'
    }
    if (age >= 40 && age <= 44) {
        return '40-44'
    }
    if (age >= 45 && age <= 49) {
        return '45-49'
    }
    if (age >= 50 && age <= 54) {
        return '50-54'
    }
    if (age >= 55 && age <= 59) {
        return '55-59'
    }
    if (age >= 60 && age <= 64) {
        return '60-64'
    }
    if (age >= 65 && age <= 69) {
        return '65-69'
    }
    if (age >= 70 && age <= 74) {
        return '70-74'
    }
    if (age >= 75) {
        return '70+'
    }
    return ''
}
export const mustBe18YearsOrOlder = (date: Date) => {
    const today = new Date()
    const birthDate = new Date(date)
    const age = today.getFullYear() - birthDate.getFullYear()
    const m = today.getMonth() - birthDate.getMonth()

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        return age - 1
    }
    return age
}

export const dateOfBirthToAge = (dateOfBirth: Date) => {
    const today = new Date()
    const birthDate = new Date(dateOfBirth)
    let age = today.getFullYear() - birthDate.getFullYear()

    const m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--
    }
    return age
}

export const todayMinus18years = () => {
    const today = new Date()
    const year = today.getFullYear() - 18
    const month = today.getMonth()
    const day = today.getDate()
    return new Date(year, month, day)
}

export const todayMinus75years = () => {
    const today = new Date()
    const year = today.getFullYear() - 75
    const month = today.getMonth()
    const day = today.getDate()
    return new Date(year, month, day)
}
