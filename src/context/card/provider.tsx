import React, { useReducer, FC } from "react";

import { CardContext } from "./context";
import {reducer, initialState} from './reducer';

interface ICardProviderProps{
    children: React.ReactNode
}


export const CardProvider:FC<ICardProviderProps> = ({children}) => {
    const [card, dispatchCard] = useReducer(reducer, initialState)

    return (
        <CardContext.Provider value={{card, dispatchCard}}>
            {children}
        </CardContext.Provider>
    )
}