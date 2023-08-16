import React, { FC, useState } from 'react';
import styles from './column-form-edit.module.scss';

interface IColumnFormEditProps {
  closeForm: () => void;
  handleChange: (value: string) => void;
  defaultValue?: string;
  placeholder?: string;
}

const ColumnFormEdit: FC<IColumnFormEditProps> = ({
  closeForm,
  handleChange,
  defaultValue,
  placeholder = '',
}) => {
  const [valueName, setValueName] = useState<string>(defaultValue ? defaultValue : '');

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>):void {
    let value = e.target.value;
    setValueName(value);
  }

  function validator(value: string):boolean {
    if (value.length <= 0) return false;
    return true;
  }

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    e.preventDefault();
    if (!validator(valueName)) return;
    handleChange(valueName);
    closeForm();
  }

  return (
    <form className={styles.main} onSubmit={handleSubmit}>
      <input
        type="text"
        name="edit"
        id="edit"
        placeholder={placeholder}
        onChange={handleOnChange}
        value={valueName}></input>

      <div className={styles.control}>
        <button className={styles.btn} type="submit" onClick={handleSubmit}>
          Add a card
        </button>
        <button onClick={closeForm} type="button">
          <img src="images/close.svg" alt="close" />
        </button>
      </div>
    </form>
  );
};

export default ColumnFormEdit;
