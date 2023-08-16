export interface IComment{
    id: number | string,
    author: string,
    photoUrl: string,
    text: string,
}

export interface ICard{
    id: number | string,
    cardName: string,
    cardAuthor: string,
    columnId: number | string,
    columnName: string,
    description: string,
    comments: IComment[]
}

export interface IColumn{
    id: number | string, 
    name: string,
    cards: ICard[] 
}


export type TypeBoardData = IColumn[]



