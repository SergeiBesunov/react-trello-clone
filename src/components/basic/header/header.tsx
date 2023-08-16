import { FC } from 'react';
import { logOutAction } from '../../../context/authorization/actions';
import { resetDataBoardAction } from '../../../context/board/actions';

import useIsAuth from '../../../hooks/context/use-is-auth';
import useBoardContext from '../../../hooks/context/use-board-context';

import './header.scss';

const Header: FC = () => {
  const { user, dispatchUser } = useIsAuth();
  const { dispatchBoard } = useBoardContext();

  const handleClickBtnLogOut = () => {
    dispatchUser(logOutAction());
    dispatchBoard(resetDataBoardAction());
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__inner">
          <div className="header__search"></div>
          <div className="header__logo">
            <img src="images/logo.png" alt="logo" />
          </div>
          {user && (
            <div className="header__user">
              <div className="header__user-info">
                <div className="header__user-avatar">
                  <img
                    src="https://api.dicebear.com/6.x/avataaars-neutral/svg?seed=Boo"
                    alt="avatar"
                  />
                </div>
                <div className="header__user-name">{user}</div>
              </div>

              <button className="header__logout" type="button" onClick={handleClickBtnLogOut}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
