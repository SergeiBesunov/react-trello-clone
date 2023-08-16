import { FC, useState, useEffect } from 'react';

import { updatedCardAction, deleteCardAction } from '../../../context/board/actions';
import { setCardAction }from '../../../context/card/actions';

import useBoardContext from '../../../hooks/context/use-board-context';
import useCardContext from '../../../hooks/context/use-card-context';
import { useModalsCardContext } from '../../../hooks/context/use-modals-context';
import useEffectSkipFirstRender from '../../../hooks/use-effect-skip-first-render';

import getDataLocalStorage from '../../../utils/local-storage/get-data-local-storage';

import CardHeader from './card-header/card-header';
import CardDescription from './card-description/card-description';
import CardComments from './card-comments/card-comments';

import './card.scss';

const Card:FC = () => {
  
  const { card, dispatchCard } = useCardContext();
  const {setModalCard} = useModalsCardContext()
  const {dispatchBoard} = useBoardContext()

  const [editNames, setEditNames] = useState<boolean>(false)
  const [editDescription, setEditDescription] = useState<boolean>(false)

  useEffect(()=>{
    const selectedCard = getDataLocalStorage('selected-card')
    dispatchCard(setCardAction(selectedCard));
  }, [])

  useEffectSkipFirstRender(()=>{
    dispatchBoard(updatedCardAction(card))
  }, [card])

  const deleteCard = ():void => {
    dispatchBoard(deleteCardAction({columnId: card.columnId, cardId: card.id}))
    setModalCard(false)
  }

  return (
    
      <div className="card">
      <CardHeader editing={editNames} toggleEditing={setEditNames}/>
      <div className="card__body">
        <div className="card__main">
          <CardDescription editing={editDescription} toggleEditing={setEditDescription} description={card.description}/>

          <CardComments />
        </div>
        <aside className="card__aside">
          <div className="card__actions">
            <h4 className="card-title">Actions</h4>
            <button className="card-btn" onClick={()=>setEditNames(true)} data-id='rename-card'>Rename card</button>
            <button className="card-btn" onClick={()=>setEditDescription(true)}>Edit decription</button>
            <button className="card-btn" onClick={deleteCard}>Delete</button>
          </div>
          <div className="card__info">
            <h4 className="card-title">Author</h4>
            <p className="card__info-author">{card.cardAuthor}</p>
          </div>
        </aside>
      </div>
    </div>
    
    
  );
};

export default Card;
