import { useContext } from 'react';
import { ModalsContext } from '../../context/modals'

export const useModalsCardContext = () => {
    const {modalCard} = useContext(ModalsContext)
    return modalCard
}