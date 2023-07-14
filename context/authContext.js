import { createContext, useContext, useState } from "react";

const UserContext = createContext()

export const UserProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)


    return (
        <UserContext.Provider value={{currentUser, setCurrentUser, isLoading, setIsLoading}}>
            {children}
        </UserContext.Provider>
    )
}

export const useAuth = () => useContext(UserContext)