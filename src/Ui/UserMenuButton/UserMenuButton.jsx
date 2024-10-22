import { NavLink } from 'react-router-dom';
import Links from '../../links/Links';

import style from './UserMenuButton.module.css';

export const UserMenuButton = () => {
  return (
    // <div className={style.userHoverWeapp}>
    <div className={style.userHoverBlock}>
      <NavLink to={Links.acaunt}>
        <span>Account</span>
      </NavLink>
      <div className={style.liner}></div>
      <NavLink to={Links.Login}>
        <span>Logout</span>
      </NavLink>
    </div>
    // </div>
  );
};
