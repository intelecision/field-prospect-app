export interface Questionnaire {
    id: number
    question: string
    //answer: string
}

export interface Question {
    id: number
    question: string
    selected: boolean
    //type: string
    policy: string
    //definition?: string
}

// Path: app/data/questionnaire.ts
export interface QuestionnaireCategory {
    id: number
    category: string
    subcategory?: string
    subSubcategory?: string
    idealSum?: number
    idealSum2?: number
    idealSum3?: number
    idealSum4?: number
}

// Path: app/data/questionnaire.ts
export interface QuestionnaireAnswer {
    id: number
    answer: string
    question: string
    category: string
    subcategory?: string
    subSubcategory?: string
    idealSum?: number
}

// Path: app/data/questionnaire.ts
export const QuestionnaireList: Question[] = [
    {
        id: 1,
        question:
            'An individual who expects to incur funeral and burial expenses when you or a family member dies?',
        selected: false,
        policy: 'Funeral Policy',
    },
    {
        id: 2,
        question:
            'A business entity that may collapse or be in disarray, when the owner passes?',
        selected: false,
        policy: 'Keyman Policy',
    },
    {
        id: 3,
        question:
            ' Are you a business or other entity that wishes to provide group insurance coverage, such as life insurance or critical illness benefits, for its employees or members as a benefit?',
        selected: false,
        policy: 'Group Life Policy',
    },
    {
        id: 4,
        question: 'Are you an Individual with home loans or mortgage debt?',
        selected: false,
        policy: 'Credit & Mortgage Policy',
    },
    {
        id: 5,
        question:
            'Are you an Individual who needs the peace of mind that your family members would be covered in the event of death at anytime?',
        selected: false,
        policy: 'Whole Life Policy',
    },

    {
        id: 6,
        question:
            'Are you an Individual who needs the peace of mind that your family members would be covered in the event of death or need the funds to meet an obligation in the future?',
        selected: false,
        policy: 'Endowment Policy',
    },
    {
        id: 7,
        question:
            'Are you an Individual who needs insurance cover, but wants to pay lower premium and are not concerned with whether or not you get a payout if you do not die during the term of the policy?',
        selected: false,
        policy: 'Term Policy (With Profit)',
    },
    {
        id: 8,
        question:
            'Are you an Individual who needs the peace of mind that your family members would be covered in the event of death, but also want to participate in profits?',
        selected: false,
        policy: 'Whole Life (With Profit) Policy',
    },
    {
        id: 9,
        question:
            'Are you an Individual who needs the peace of mind that your family members would be covered in the event of death or need the funds to meet an obligation in the future, but also want to participate in profits?',
        selected: false,
        policy: 'Endowment (With Bonus) Policy',
    },
    {
        id: 10,
        question:
            'Are you an individual who seeking both insurance and investment under a single integrated plan?',
        selected: false,
        policy: 'Index-linked or Inflation Protection Policy',
    },
    {
        id: 11,
        question:
            'Would your Family exposed to financial insecurity in the event of your early death or old age, not well planned for?',
        selected: false,
        policy: 'Care Plan Policy',
    },
    {
        id: 12,
        question:
            'Are you an Individual seeking insurance protection on your life, goods, etc. when you travel?',
        selected: false,
        policy: 'Travel Policy',
    },
    {
        id: 13,
        question:
            'Are you a Individual who can not afford the costs of regular insurance?',
        selected: false,
        policy: 'Micro Insurance Policy (Funeral)',
    },
    {
        id: 14,
        question:
            'Are you an Individual who needs the peace of mind that your family members would be covered in the event of death at anytime?',
        selected: false,
        policy: 'Universal Life Policy',
    },
]
