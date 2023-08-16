import { TypeStatdardAction } from '../types/actions';

export const addCardAction: TypeStatdardAction = (payload) => {
   return {
      type: 'ADD_CARD',
      payload: payload,
   };
};

export const renameColumnAction: TypeStatdardAction = (payload) => {
   return {
      type: 'RENAME_COLUMN',
      payload: payload,
   };
};

export const setBoardDataAction: TypeStatdardAction = (payload) => {
   return {
      type: 'SET_BOARD_DATA',
      payload: payload,
   };
};

export const resetDataBoardAction: TypeStatdardAction = () => {
   return {
      type: 'RESET_DATA_BOARD',
   };
};

export const updatedCardAction: TypeStatdardAction = (payload) => {
   return {
      type: 'UPDATED_CARD',
      payload: payload,
   };
};

export const deleteCardAction: TypeStatdardAction = (payload) => {
   return {
      type: 'DELETE_CARD',
      payload: payload,
   };
};
