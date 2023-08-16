import { FC } from 'react';
import { useModalsCardContext } from '../../../../hooks/context/use-modals-context';
import saveDataLocalStorage from '../../../../utils/local-storage/save-data-local-storage';
import './column-card.scss';

interface IColumnCardProps {
   cardName: string;
   cardId: number | string;
   columnId: number | string;
   totalComments: number;
}

const ColumnCard: FC<IColumnCardProps> = ({ cardName, totalComments, cardId, columnId }) => {
   const {setModalCard} = useModalsCardContext()

   const handleClickCart = ():void => {
      saveDataLocalStorage({columnId, cardId}, 'selected-card')
      setModalCard(true)
   };

   return (
      <div className="column__card" onClick={handleClickCart}>
         <h4 className="column__card-name">{cardName}</h4>
         <div className="column__card-info">
            <div className="column__card-info-comments">
               <img src="images/comments.svg" alt="comments" />
               <p>{totalComments}</p>
            </div>
         </div>
      </div>
   );
};

export default ColumnCard;
