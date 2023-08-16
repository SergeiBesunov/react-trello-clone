import React, { useReducer, FC } from "react";

import { BoardContext } from "./context";
import {reducer, initialState} from './reducer';

interface BoardProviderProps{
    children: React.ReactNode
}


export const BoardProvider:FC<BoardProviderProps> = ({children}) => {
    const [boardData, dispatchBoard] = useReducer(reducer, initialState)

    return (
        <BoardContext.Provider value={{boardData, dispatchBoard}}>
            {children}
        </BoardContext.Provider>
    )
}

