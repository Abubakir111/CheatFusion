import Button from '../../../Ui/Button/Button';
import icon from '../../../acsses/icons/User.svg';
import { NavLink } from 'react-router-dom';
import Links from '../../../links/Links';
import { useDispatch, useSelector } from 'react-redux';
import { useLockBodyScroll } from 'react-use';
import { openBurgeMenu, openLoginCard, openSingUpCard } from '../../../redux/PopUpSlice';
import style from './BurgerMenu.module.css';

export const BurgerMenu = () => {
  const Dispatch = useDispatch();
  const openMenu = useSelector((state) => state.PopUpSlice.BurgerMenu);
  const userSlice = useSelector((state) => state.AuthorizationUserSlice.LoginData);
  const storedUse = JSON.parse(localStorage.getItem('user')) || null; // Данные из localStorage, если есть

  let user = []; // Изначально пустой массив

  console.log('user из useSelector:', userSlice);
  console.log('user из localStorage:', storedUse);

  if (userSlice && Object.keys(userSlice).length !== 0) {
    // Если в userSlice есть данные
    user = userSlice;
    console.log('user = userSlice;');
  } else if (storedUse && Object.keys(storedUse).length !== 0) {
    // Если в storedUse есть данные
    user = storedUse;
    console.log('user = storedUse;');
  } else {
    // Если данных нигде нет, user остаётся пустым массивом
    console.log('Пользователь не зарегистрирован');
  }

  console.log('Итоговое значение user:', user);
  useLockBodyScroll(openMenu);
  return (
    <div className={style.wrapp}>
      <div className={style.container}>
        {user.length !== 0 ? (
          user.map((user, index) => (
            <div key={index}>
              <Button user={icon} text={user.login} bg={'none'} buttonHeader={'buttonHeader'} />
            </div>
          ))
        ) : (
          <div className={style.logoContainer}>
            <NavLink to={Links.Login} onClick={() => Dispatch(openLoginCard(true))}>
              {' '}
              <Button text={'Log In'} user={icon} bg={'#CE2DBF'} />
            </NavLink>

            <NavLink to={Links.SignUp} onClick={() => Dispatch(openSingUpCard(true))}>
              <Button text={'Sing Up'} user={icon} />
            </NavLink>
          </div>
        )}
        <div className={style.navigantions}>
          <NavLink onClick={() => Dispatch(openBurgeMenu(false))} to={Links.Home}>
            Store
          </NavLink>
          <NavLink onClick={() => Dispatch(openBurgeMenu(false))} to={Links.contact}>
            Contact
          </NavLink>
          <NavLink onClick={() => Dispatch(openBurgeMenu(false))} to={Links.Rewars}>
            Rewards
          </NavLink>
          <NavLink onClick={() => Dispatch(openBurgeMenu(false))} to={Links.FAQ}>
            FAQ
          </NavLink>
        </div>
      </div>
    </div>
  );
};
