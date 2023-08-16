import { TypeStatdardAction } from '../types/actions'

export const setCardAction:TypeStatdardAction = (payload) => {
    return{
        type: 'SET_CARD',
        payload: payload
    }
}

export const renameCardAction: TypeStatdardAction = (payload) => {
    return{
        type: 'RENAME_CARD',
        payload: payload
    }
}

export const changeDescriptionAction: TypeStatdardAction = (payload) => {
    return{
        type: 'CHANGE_DESCRIPTION',
        payload: payload
    }
}

export const addCommentAction: TypeStatdardAction = (payload) => {
    return{
        type: 'ADD_COMMENT',
        payload: payload
    }
}

export const updatedCommentAction: TypeStatdardAction = (payload) => {
    return{
        type: 'UPDATED_COMMENT',
        payload: payload
    }
}

export const deleteCommentAction: TypeStatdardAction = (payload) => {
    return{
        type: 'DELETE_COMMENT',
        payload: payload
    }
}






