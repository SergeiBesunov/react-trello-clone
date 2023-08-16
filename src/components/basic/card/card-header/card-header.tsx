import { FC, Dispatch, SetStateAction} from 'react';
import { renameCardAction } from '../../../../context/card/actions'
import useCardContext from '../../../../hooks/context/use-card-context';
import FormRenaming from '../../../common/form-renaming/form-renaming';

import './card-header.scss';

interface ICardHeaderProps {
  editing: boolean;
  toggleEditing: Dispatch<SetStateAction<boolean>>;
}

const CardHeader: FC<ICardHeaderProps> = ({ editing, toggleEditing}) => {
  const { card, dispatchCard } = useCardContext();

  const renameCard = (value: string):void => {
    dispatchCard(renameCardAction(value))
  };

  return (
    <div className="card__header">
      <div className="card__header-title">
        {editing ? (
          <FormRenaming handleChange={renameCard} closeForm={() => toggleEditing(false)} defaultValue={card.cardName} openingId='rename-card'/>
        ) : (
          <h3 className="card__name">{card.cardName}</h3>
        )}

        <p className="card__column-name">
          in column <i>{card.columnName}</i>
        </p>
      </div>
    </div>
  );
};

export default CardHeader;
