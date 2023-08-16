import React, { FC, useState, ChangeEvent, useRef, useEffect} from 'react';
import styles from './form-edit.module.scss'


interface IFormEditProps{
   defaultValue?: string;
   placeholder?: string;
   closeForm?: () => void;
   clear?: boolean;
   handleChange: (value:string) => void;
}

const FormEdit:FC<IFormEditProps> = ({placeholder='', defaultValue, handleChange, closeForm, clear=false}) => {
   const [value, setValue] = useState<string>(defaultValue ? defaultValue : '');
   const textareaRef = useRef<HTMLTextAreaElement>(null);

   useEffect(() => {
      textareaRef.current && textareaRef.current.focus();
   }, []);

   const clearValue = ():void => {
      setValue('')
   }

   const handleOnChange = (e:ChangeEvent<HTMLTextAreaElement>):void => {
      let value = e.target.value;
      setValue(value);
   }

   function validator(value: string):boolean {
      if (value.length <= 0) return false;
      return true;
   }

   function handleSubmit(e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>):void {
      e.preventDefault();
      if (!validator(value)) return;
      handleChange(value);
      clear && clearValue()
      closeForm && closeForm();
   }

   return (
      <form className={styles.main} onSubmit={handleSubmit}>
         <textarea name="editing-block" rows={2} placeholder={placeholder} value={value} onChange={handleOnChange} ref={textareaRef}></textarea>
         <div className={styles.control}>
            <button className={styles.btn} type='submit' onClick={handleSubmit}>Save</button>
            {closeForm && <button type='button' onClick={closeForm}>
               <img src="images/close.svg" alt="close" />
            </button>}
            
         </div>
      </form>
   );
};

export default FormEdit;
