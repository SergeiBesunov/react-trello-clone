import { TypeActionReturn } from '../types/actions'
import saveDataLocalStorage from '../../utils/local-storage/save-data-local-storage';
import clearLocalStorage from '../../utils/local-storage/clear-local-storage';

export const initialState = null;

type TypeReducer = (state:string | null, action: TypeActionReturn) => string | null
type TypeSetUser = (value: string | null) => string | null
type TypeLogOut = () => null

const setUser:TypeSetUser = (value) =>{
   saveDataLocalStorage(value, 'user')
   return value ? value : initialState
} 

const logOut:TypeLogOut = () => {
   clearLocalStorage('user')
   return null
}


export const reducer: TypeReducer = (state, action) => {
   switch (action.type) {
      case 'SET_USER':
         return setUser(action.payload);
      case 'LOG_OUT':
         return logOut();
      default:
         return state;
   }
};