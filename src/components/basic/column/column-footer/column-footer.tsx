import { useState, FC } from 'react';
import useBoardContext from '../../../../hooks/context/use-board-context';
import { addCardAction } from '../../../../context/board/actions';
import useIsAuth from '../../../../hooks/context/use-is-auth';
import ColumnFormEdit from '../../../basic/column/column-form-edit/column-form-edit';

interface IColumnFooterProps {
  columnId: number | string;
}

const ColumnFooter: FC<IColumnFooterProps> = ({ columnId }) => {
  const [editing, setEditing] = useState<boolean>(false);
  const { dispatchBoard } = useBoardContext();
  const { user } = useIsAuth();

  const addCard = (value: string): void => {
    let id = columnId;
    dispatchBoard(addCardAction({ value, id, user }));
  };

  const toggleEditMode = (value: boolean): void => {
    setEditing(value);
  };

  return (
    <div className="column__footer">
      {editing ? (
        <ColumnFormEdit
          closeForm={() => toggleEditMode(false)}
          handleChange={addCard}
          placeholder="Enter card name..."
        />
      ) : (
        <button className="column__add-card" onClick={() => toggleEditMode(true)}>
          Add a card...
        </button>
      )}
    </div>
  );
};

export default ColumnFooter;
