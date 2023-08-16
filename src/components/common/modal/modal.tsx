import { FC, useRef, useEffect, KeyboardEvent, ReactNode } from 'react';
import styles from './modal.module.scss'

interface ModalProps {
  children?: ReactNode;
  close?: () => void;
}

const Modal: FC<ModalProps> = ({ children, close }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    modalRef.current && modalRef.current.focus();
  }, []);

  const handleСloseModal = (e: KeyboardEvent<HTMLDivElement>):void => {
    const code = e.code && e.key;
    if (code === `Escape`) {
      close && close();
    }
  };

  return (
    <div className={styles.canvas } tabIndex={-1} onKeyDown={handleСloseModal} ref={modalRef}>
      <div className={styles.content}>
        {close && <button className={styles.close} type="button" onClick={close}>
            <img src="images/close-modal.svg" alt="close" />
          </button>}
         
        {children}
        </div>
    </div>
  );
};

export default Modal;
