import { FC, Dispatch, SetStateAction } from 'react';
import { changeDescriptionAction } from '../../../../context/card/actions';
import useCardContext from '../../../../hooks/context/use-card-context';
import FormEdit from '../../../common/form-edit/form-edit';

import './card-description.scss';


interface ICardDescriptionProps {
  editing: boolean;
  toggleEditing: Dispatch<SetStateAction<boolean>>;
  description: string;
}

const CardDescription: FC<ICardDescriptionProps> = ({ editing, toggleEditing, description }) => {
const {dispatchCard} = useCardContext()


  const closeForm = ():void => {
    toggleEditing(false);
  };

  const changeDescription = (value: string):void => {
    dispatchCard(changeDescriptionAction(value))
  };

  return (
    <div className="card__description">
      <h3 className="card-title">Decription</h3>
      {editing ? (
        <FormEdit
          defaultValue={description}
          placeholder="Add a description"
          closeForm={closeForm}
          handleChange={changeDescription}
        />
      ) : (
        <p className="card__description-text">
          {description.length > 0 ? description : 'Add decription'}
        </p>
      )}
    </div>
  );
};

export default CardDescription;
