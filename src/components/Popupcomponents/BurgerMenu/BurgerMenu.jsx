import style from './BurgerMenu.module.css';
import Button from '../../../Ui/Button/Button';
import icon from '../../../acsses/icons/User.svg';
import { NavLink } from 'react-router-dom';
import Links from '../../../links/Links';

export const BurgerMenu = () => {
  return (
    <div className={style.container}>
      <Button text={'Log In'} user={icon} bg={'#CE2DBF'} />
      <Button text={'Sing Up'} user={icon} />
      <div className={style.navigantions}>
        <NavLink to={Links.Home}>Store</NavLink>
        <NavLink to={Links.contact}>Contact</NavLink>
        <NavLink to={Links.Rewars}>Rewars</NavLink>
        <NavLink to={Links.FAQ}>FAQ</NavLink>
      </div>
    </div>
  );
};
