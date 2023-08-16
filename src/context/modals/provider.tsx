import {FC, useState, ReactNode} from "react";
import { ModalsContext } from './context'

interface ModalsProviderProps{
    children: ReactNode
}


export const ModalsProvider:FC<ModalsProviderProps> = ({children}) => {
    const [modalCard, setModalCard] = useState(false)

    return (
        <ModalsContext.Provider value={{modalCard:{modalCard, setModalCard}}}>
            {children}
        </ModalsContext.Provider>
    )
}