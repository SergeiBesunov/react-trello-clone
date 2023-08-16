import {generetorShortId} from '../../utils/generator-id';
import saveDataLocalStorage from '../../utils/local-storage/save-data-local-storage';
import clearLocalStorage from '../../utils/local-storage/clear-local-storage';
import { TypeBoardData, ICard} from '../../types/board';
import { TypeActionReturn } from '../types/actions'


export const initialState = [
   {
      id: 1,
      name: 'TODO',
      cards: [],
   },
   {
      id: 2,
      name: 'In Progress',
      cards: [],
   },
   {
      id: 3,
      name: 'Testing',
      cards: [],
   },
   {
      id: 4,
      name: 'Done',
      cards: [],
   },
];

type TypeId = number | string
type TypeReducer = (state: TypeBoardData, action: TypeActionReturn) => TypeBoardData;

type TypeCreatedCard = (columnName: string, value: string, user:string, id:TypeId) => ICard;
type TypeAddCard = (state: TypeBoardData, value: string, id: TypeId, user:string) => TypeBoardData;
type TypeRenameColumn = (state: TypeBoardData, value: string, id: TypeId) => TypeBoardData
type TypeSetBoardData = (data: TypeBoardData | null) => TypeBoardData
type TypeResetDataBoard = () => TypeBoardData
type TypeUpdatedCard = (state:TypeBoardData, updatedCard:ICard) => TypeBoardData
type TypeDeleteCard = (state:TypeBoardData, columnId:TypeId, cardId:TypeId) => TypeBoardData


const createdCard: TypeCreatedCard = (columnName, value, user, id) => {
   return {
      id: `${id}-${generetorShortId()}`,
      cardName: value,
      cardAuthor: user,
      columnId: id,
      columnName: columnName,
      description: '',
      comments: [],
   };
};

const renameColumn:TypeRenameColumn = (state, value, id) => {
 
   let copyState:TypeBoardData = state.map((column) => structuredClone(column));
   let indexColumn = copyState.findIndex((column)=>column.id == id)
   copyState[indexColumn].name = value

   copyState[indexColumn].cards.forEach((card)=>{
      card.columnName = value
   })
   
   saveDataLocalStorage(copyState, 'board')
   return copyState;
}

const addCard: TypeAddCard = (state, value, id, user) => {
   let copyState:TypeBoardData = state.map((column) => structuredClone(column));

   copyState.forEach((column) => {
      if (column.id === id) {
         column.cards.push(createdCard(column.name, value, user, id));
      }
   });

   saveDataLocalStorage(copyState, 'board')
   return copyState;
};

const setBoardData:TypeSetBoardData = (data) => {
   saveDataLocalStorage(data, 'board')
   return data ? data : initialState
}

const resetDataBoard:TypeResetDataBoard = () => {
   clearLocalStorage('board')
   return initialState
}

const updatedCard:TypeUpdatedCard = (state, updatedCard) => {
   if(updatedCard.id){
      let copyState:TypeBoardData = state.map((column) => structuredClone(column));

      const indexColumn = copyState.findIndex((column)=>column.id === updatedCard.columnId)
      const indexCard = copyState[indexColumn].cards.findIndex((card)=>card.id === updatedCard.id)
      
      copyState[indexColumn].cards[indexCard] = updatedCard
      
      saveDataLocalStorage(copyState, 'board')
      return copyState
   }else{
      return state
   }
}

const deleteCard:TypeDeleteCard = (state, columnId, cardId) => {
   let copyState:TypeBoardData = state.map((column) => structuredClone(column));
   const indexColumn = copyState.findIndex((column)=>column.id === columnId)
   let filteredCards = copyState[indexColumn].cards.filter((card)=>card.id != cardId)
   copyState[indexColumn].cards = filteredCards

   saveDataLocalStorage(copyState, 'board')
   return copyState
}




export const reducer: TypeReducer = (state, action) => {
   switch (action.type) {
      case 'RESET_DATA_BOARD':
         return resetDataBoard();
      case 'SET_BOARD_DATA':
         return setBoardData(action.payload);
      case 'RENAME_COLUMN':
         return renameColumn(state, action.payload.value, action.payload.id);
      case 'ADD_CARD':
         return addCard(state, action.payload.value, action.payload.id, action.payload.user);
      case 'UPDATED_CARD':
         return updatedCard(state, action.payload);
      case 'DELETE_CARD':
         return deleteCard(state, action.payload.columnId, action.payload.cardId);
      default:
         return state;
   }
};
