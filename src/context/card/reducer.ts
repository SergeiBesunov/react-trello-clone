import { ICard, IColumn, IComment, TypeBoardData } from '../../types/board';
import { TypeActionReturn } from '../types/actions';
import { generatorLongId } from '../../utils/generator-id';

import getDataLocalStorage from '../../utils/local-storage/get-data-local-storage';

export const initialState = {
  id: '',
  cardName: '',
  cardAuthor: '',
  columnId: '',
  columnName: '',
  description: '',
  comments: [],
};

export type TypeReducer = (state: ICard, action: TypeActionReturn) => ICard;
type TypeId = string | number;
type TypeSetCardData = (columnId: TypeId, cardId: TypeId) => ICard;
type TypeCreateComment = (cardId: TypeId, value: string, user: string) => IComment;
type TypeAddComment = (state: ICard, comment: string, cardId: TypeId, user: string) => ICard
type TypeRenameCard = (state: ICard, value: string) => ICard
type TypeChangeDescription = (state: ICard, value: string) => ICard
type TypeUpdatedComment = (state:ICard, id:TypeId, value:string) => ICard
type TypeDeleteComment = (state:ICard, id:TypeId) =>ICard

const createComment:TypeCreateComment = (cardId, value, user) => {
  return {
    id: `${cardId}-${generatorLongId()}`,
    author: user,
    photoUrl: 'https://api.dicebear.com/6.x/avataaars-neutral/svg?seed=Boo',
    text: value,
  };
}; 

const setCardData:TypeSetCardData = (columnId, cardId): ICard => {
  const boardData: TypeBoardData = getDataLocalStorage('board');
  const column: IColumn = boardData.filter((column) => column.id == columnId)[0];
  const card: ICard = column.cards.filter((card) => card.id == cardId)[0];
  return card;
};

const renameCard:TypeRenameCard = (state, value) => {
  let copyState = structuredClone(state);
  copyState.cardName = value;
  return copyState;
};

const changeDescription:TypeChangeDescription = (state, value) => {
  let copyState = structuredClone(state);
  copyState.description = value;
  return copyState;
};

const addComment:TypeAddComment = (state, comment, cardId, user) => {
  let newComment = createComment(cardId, comment, user);
  let copyState:ICard = structuredClone(state);
  copyState.comments.unshift(newComment)
  return copyState
};

const updatedComment:TypeUpdatedComment = (state, id, value) => {
  let copyState:ICard = structuredClone(state);
  const indexComment = copyState.comments.findIndex((comment)=>comment.id === id)
  copyState.comments[indexComment].text = value
  return copyState
}

const deleteComment:TypeDeleteComment = (state, id) => {
  let copyState:ICard = structuredClone(state);
  let filterComments = copyState.comments.filter((comment)=>comment.id != id)
  copyState.comments = filterComments
  return copyState
}

export const reducer: TypeReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CARD':
      return setCardData(action.payload.columnId, action.payload.cardId);
    case 'RENAME_CARD':
      return renameCard(state, action.payload);
    case 'CHANGE_DESCRIPTION':
      return changeDescription(state, action.payload);
    case 'ADD_COMMENT':
      return addComment(state, action.payload.comment, action.payload.cardId, action.payload.user);
    case 'UPDATED_COMMENT':
      return updatedComment(state, action.payload.id, action.payload.value);
    case 'DELETE_COMMENT':
        return deleteComment(state, action.payload);
    default:
      return state;
  }
};
