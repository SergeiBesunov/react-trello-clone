import { createContext, Dispatch} from 'react'
import { TypeBoardData } from '../../types/board'
import { TypeActionReturn } from '../types/actions'


interface IContext{
    boardData: TypeBoardData,
    dispatchBoard: Dispatch<TypeActionReturn>
} 


export const BoardContext = createContext<IContext>({boardData:[] as TypeBoardData, dispatchBoard: ()=> null})

