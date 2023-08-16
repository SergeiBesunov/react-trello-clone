import { createContext, Dispatch, SetStateAction} from 'react'

interface IModalsContext{
    modalCard:{
        modalCard: boolean
        setModalCard: Dispatch<SetStateAction<boolean>>
    }
} 

export const ModalsContext = createContext<IModalsContext>({} as IModalsContext)
