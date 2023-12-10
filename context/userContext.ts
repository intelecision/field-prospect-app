import { createContext } from 'react'
import { User } from '../model/User'
import React from 'react'

export const userContext = createContext<User | undefined>(undefined)

export const UserProvider = userContext.Provider
export const UserConsumer = userContext.Consumer
export const useUserContext = () => {
    const context = React.useContext(userContext)
    if (context === undefined) {
        throw new Error('useUserContext must be used within a UserProvider')
    }
    return context
}
