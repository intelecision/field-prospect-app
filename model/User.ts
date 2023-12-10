export interface User {
    id: number
    firstName: string
    lastName: string
    email: string
    password: string
    role: string
    createdAt: Date
    updatedAt: Date
}

export const initializeUser = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
    createdAt: new Date(),
    updatedAt: new Date(),
}
