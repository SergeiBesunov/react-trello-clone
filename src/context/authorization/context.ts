import { createContext, Dispatch} from 'react'
import { TypeActionReturn } from '../types/actions'

interface IAuthContext{
    user: string | null,
    dispatchUser: Dispatch<TypeActionReturn>
} 


export const AuthContext = createContext<IAuthContext>({user: null, dispatchUser: ()=> null})