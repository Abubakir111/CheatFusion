import Button from '../../../Ui/Button/Button';
import icon from '../../../acsses/icons/User.svg';
import { NavLink } from 'react-router-dom';
import Links from '../../../links/Links';
import { useDispatch, useSelector } from 'react-redux';
import { useLockBodyScroll } from 'react-use';
import { openBurgeMenu } from '../../../redux/PopUpSlice';
import style from './BurgerMenu.module.css';

export const BurgerMenu = () => {
  const Dispatch = useDispatch();
  const openMenu = useSelector((state) => state.PopUpSlice.BurgerMenu);

  useLockBodyScroll(openMenu);
  return (
    <div className={style.container}>
      <Button onClick={() => Dispatch(openBurgeMenu(false))} text={'Log In'} user={icon} bg={'#CE2DBF'} />
      <Button onClick={() => Dispatch(openBurgeMenu(false))} text={'Sing Up'} user={icon} />
      <div className={style.navigantions}>
        <NavLink onClick={() => Dispatch(openBurgeMenu(false))} to={Links.Home}>
          Store
        </NavLink>
        <NavLink onClick={() => Dispatch(openBurgeMenu(false))} to={Links.contact}>
          Contact
        </NavLink>
        <NavLink onClick={() => Dispatch(openBurgeMenu(false))} to={Links.Rewars}>
          Rewars
        </NavLink>
        <NavLink onClick={() => Dispatch(openBurgeMenu(false))} to={Links.FAQ}>
          FAQ
        </NavLink>
      </div>
    </div>
  );
};
