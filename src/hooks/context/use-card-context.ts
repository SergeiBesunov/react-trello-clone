import { useContext } from 'react';
import { CardContext } from '../../context/card'

const useCardContext = () => {
    const value = useContext(CardContext)
    return value
}

export default useCardContext