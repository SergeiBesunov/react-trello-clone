import { FC, useState } from 'react';
import { renameColumnAction } from '../../../../context/board/actions';
import useDataBoard from '../../../../hooks/context/use-board-context';
import FormRenaming from '../../../common/form-renaming/form-renaming';

interface IColumnHeaderProps {
  name: string;
  columnId: number | string;
}

const ColumnHeader: FC<IColumnHeaderProps> = ({ name, columnId }) => {
  const [editing, setEditing] = useState<boolean>(false);
  const { dispatchBoard } = useDataBoard();

  const toggleEditMode = (value: boolean): void => {
    setEditing(value);
  };

  const renameColumn = (value: string): void => {
    let id = columnId;
    dispatchBoard(renameColumnAction({ value, id }));
  };

  return (
    <div className="column__header">
      {editing ? (
        <FormRenaming
          handleChange={renameColumn}
          closeForm={() => toggleEditMode(false)}
          defaultValue={name}
          openingId={columnId}
        />
      ) : (
        <div className="column__header-inner">
          <h4 className="column__name">{name}</h4>
          <img
            className="column__edit-name"
            src="images/edit.svg"
            alt="edit"
            onClick={() => toggleEditMode(true)}
            data-id={columnId}
          />
        </div>
      )}
    </div>
  );
};

export default ColumnHeader;
