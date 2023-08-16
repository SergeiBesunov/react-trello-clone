import { FC, useEffect } from 'react';

import {TypeBoardData} from '../types/board'
import { CardProvider } from '../context/card';
import { setBoardDataAction } from '../context/board/actions';
import { setUserAction } from '../context/authorization/actions';

import useBoardContext from '../hooks/context/use-board-context';
import useIsAuth from '../hooks/context/use-is-auth';
import { useModalsCardContext } from '../hooks/context/use-modals-context';

import getDataLocalStorage from '../utils/local-storage/get-data-local-storage';

import Header from '../components/basic/header/header';
import Column from '../components/basic/column/column';
import Card from '../components/basic/card/card';
import Login from '../components/basic/login/login';
import Modal from '../components/common/modal/modal';



const Board: FC = () => {
  const { boardData, dispatchBoard } = useBoardContext();
  const { user, dispatchUser } = useIsAuth();
  const { modalCard, setModalCard } = useModalsCardContext();

  useEffect(() => {
    const dataUser:string = getDataLocalStorage('user');
    const dataBoard:TypeBoardData = getDataLocalStorage('board');

    dispatchUser(setUserAction(dataUser));
    dispatchBoard(setBoardDataAction(dataBoard));
  }, []);

  return (
    <>
      <Header />

      <main className="main">
        <div className="container">
          <div className="board">
            {boardData.map((column) => (
              <Column key={column.id} {...column} />
            ))}
          </div>
        </div>
      </main>

      {modalCard && (
        <Modal close={() => setModalCard(false)}>
          <CardProvider>
            <Card />
          </CardProvider>
        </Modal>
      )}

      {!user && (
        <Modal>
          <Login />
        </Modal>
      )}
    </>
  );
};

export default Board;
