import { useContext } from 'react';
import { BoardContext } from '../../context/board'

const useBoardContext = () => {
    const value = useContext(BoardContext)
    return value
}

export default useBoardContext