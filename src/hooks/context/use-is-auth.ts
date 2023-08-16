import { useContext } from 'react';
import { AuthContext } from '../../context/authorization'

const useIsAuth = () => {
    const value = useContext(AuthContext)
    return value
}

export default useIsAuth