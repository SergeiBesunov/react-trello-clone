import { FC, useState, useRef, useEffect, FormEvent, MouseEvent } from 'react';
import { setUserAction } from '../../../context/authorization/actions';
import useIsAuth from '../../../hooks/context/use-is-auth';

import './login.scss';

const Login:FC = () => {
   
   const [name, setName] = useState('');
   const inputNameRef = useRef<HTMLInputElement>(null);
   const { dispatchUser } = useIsAuth();

   useEffect(() => {
      inputNameRef.current && inputNameRef.current.focus();
   }, []);

   const validator = (value: string) => {
      if (value.length <= 0) return false;
      return true;
   };

   const handleSubmit = (e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (!validator(name)) return;
      dispatchUser(setUserAction(name))
      setName('')
      
   };

   return (
      <div className="login">
         <h3 className="login__title">What is your name?</h3>
         <form className="login__form" onSubmit={handleSubmit}>
            <input
               className="login__form-textield"
               type="text"
               value={name}
               placeholder="Enter your name"
               ref={inputNameRef}
               onChange={(e) => setName(e.target.value)}
            />
            <button className="login__form-btn" type="submit" onClick={handleSubmit}>
               Save
            </button>
         </form>
      </div>
   );
};

export default Login;
