import { FC } from 'react';
import { IColumn } from '../../../types/board';

import ColumnCard from './column-card/column-card';
import ColumnHeader from './column-header/column-header';
import ColumnFooter from './column-footer/column-footer';

import './column.scss';


const Column: FC<IColumn> = ({ id, name, cards }) => {
   return (
      <div className="column-wrapper">
         <div className="column">
            <ColumnHeader name={name} columnId={id} />

            <div className="column__cards">
               {cards.map((card) => (
                  <ColumnCard
                     key={card.id}
                     columnId={id}
                     cardId={card.id}
                     cardName={card.cardName}
                     totalComments={card.comments.length}
                  />
               ))}
            </div>

            <ColumnFooter columnId={id} />
         </div>
      </div>
   );
};

export default Column;
