import { TypeStatdardAction } from '../types/actions';

export const setUserAction: TypeStatdardAction = (payload) => {
   return {
      type: 'SET_USER',
      payload: payload,
   };
};

export const logOutAction: TypeStatdardAction = () => {
   return {
      type: 'LOG_OUT',
   };
};
