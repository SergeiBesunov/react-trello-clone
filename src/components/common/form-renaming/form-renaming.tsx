import React, { FC, useState, useEffect, useRef } from 'react';
import styles from './form-renaming.module.scss';

interface IFormRenamingProps {
  closeForm: () => void;
  handleChange: (value: string) => void;
  defaultValue?: string;
  placeholder?: string;
  openingId?: string | number;
}

const FormRenaming: FC<IFormRenamingProps> = ({
  closeForm,
  handleChange,
  defaultValue,
  placeholder = '',
  openingId,
}) => {
  const [valueName, setValueName] = useState<string>(defaultValue ? defaultValue : '');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current && inputRef.current.focus();

    const handleСlickToCloseTheForm = (e: any) => {
      
      if (!e.target.closest(`.${styles.main}`) && e.target.dataset.id != openingId) {
        closeForm();
      }
    };
    document.body.addEventListener(`click`, handleСlickToCloseTheForm);

    return () => {
      document.body.removeEventListener(`click`, handleСlickToCloseTheForm);
    };
  }, []);

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.value;
    setValueName(value);
  }

  function validator(value: string) {
    if (value.length <= 0) return false;
    return true;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validator(valueName)) return;
    handleChange(valueName);
    closeForm();
  }

  return (
    <form className={styles.main} onSubmit={handleSubmit}>
      <input
        type="text"
        name="rename"
        id="rename"
        placeholder={placeholder}
        onChange={handleOnChange}
        value={valueName}
        ref={inputRef}></input>
    </form>
  );
};

export default FormRenaming;
