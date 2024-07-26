import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from '../../redux/selectors';
import { NavLink } from 'react-router-dom';

import css from './UserMenu.module.css';
import { logOut } from '../../redux/auth/authOps';

export const UserMenu = () => {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <NavLink>
        <span className={css.linkText}>{userName}</span>
      </NavLink>
      <button
        className={css.button}
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Log Out
      </button>
    </div>
  );
};
