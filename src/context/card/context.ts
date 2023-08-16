import { createContext, Dispatch} from 'react'
import { TypeActionReturn } from '../types/actions'
import { ICard } from '../../types/board'

interface ICardContext{
    card: ICard,
    dispatchCard: Dispatch<TypeActionReturn>
} 


export const CardContext = createContext<ICardContext>({card: {} as ICard, dispatchCard: ()=> null})