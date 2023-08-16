import React, { useReducer, FC } from "react";

import { AuthContext } from "./context";
import {reducer, initialState} from './reducer';

interface AuthProviderProps{
    children: React.ReactNode
}


export const AuthProvider:FC<AuthProviderProps> = ({children}) => {
    const [user, dispatchUser] = useReducer(reducer, initialState)

    return (
        <AuthContext.Provider value={{user, dispatchUser}}>
            {children}
        </AuthContext.Provider>
    )
}