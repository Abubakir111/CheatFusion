import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Links from '../../links/Links';
import Button from '../../Ui/Button/Button';
import UserIcon from '../../acsses/icons/User.svg';
import burger from '../../acsses/icons/BurgerMenu.svg';
import logo from '../../acsses/icons/Logo.svg';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { openLoginCard, openBurgeMenu } from '../../redux/PopUpSlice';
import axios from 'axios';
import style from './Header.module.css';

import { addUser, Logout } from '../../redux/store/AuthorizationUserSlice';

const Header = () => {
  const dispatch = useDispatch();
  const developmentStatus = useSelector((status) => status.ProductsSlice.developmentStatus);

  const [user, setUser] = useState([]);

  const userJwt = Cookies.get('jwt');

  const authorizeUser = async () => {
    const token = Cookies.get('jwt'); // Получаем токен из cookies

    if (!token) {
      console.log('Токен не найден');
      return;
    }

    try {
      const { data } = await axios.get(
        developmentStatus
          ? 'http://localhost:8080/https://api.cheatfusion.store/shop/authorize'
          : 'https://api.cheatfusion.store/shop/authorize',
        {
          headers: {
            Authorization: `Bearer ${token}` // Передаем токен в заголовке Authorization
          }
        }
      );
      dispatch(addUser(data));
      setUser([data]);

      // console.log('Успешная авторизация:', data);
      // console.log('Код статуса:', status);

      // Дополнительные действия после успешной авторизации (например, обновление состояния пользователя)
    } catch (error) {
      if (error.response) {
        console.log('Ошибка авторизации. Код статуса:', error.response.status);
        console.log('Сообщение об ошибке:', error.response.data);
      } else {
        console.log('Произошла неизвестная ошибка:', error.message);
      }
    }
  }; // Вызов функции авторизации
  // useEffect для вызова функции авторизации при монтировании компонента
  useEffect(() => {
    authorizeUser(); // Запрос будет отправлен только при загрузке страницы
  }, []); // Пустой массив зависимостей означает, что эффект выполнится только один раз

  return (
    <div>
      <header className={`${style.header} container`}>
        <div className={style.header__inner}>
          <NavLink to={Links.Home}>
            <img className={style.header__logo} src={logo} alt='logo' />
          </NavLink>

          <nav className={style.header__nav}>
            <NavLink to={Links.Home}>Store</NavLink>
            <NavLink to={Links.contact}>Contact</NavLink>
            <NavLink to={Links.Rewars}>Rewards</NavLink>
            <NavLink to={Links.FAQ}>FAQ</NavLink>
            {userJwt ? (
              user.map((element, index) => (
                <div className={style.usercontainer} key={index}>
                  <Button user={UserIcon} text={element.login} bg={'none'} buttonHeader={'buttonHeader'} />
                  <div className={style.userHoverWeapp}>
                    <div className={style.userHoverBlock}>
                      <NavLink to={Links.acaunt}>
                        <span>Account</span>
                      </NavLink>
                      <div className={style.liner}></div>
                      <NavLink
                        to={Links.Home}
                        onClick={() => {
                          dispatch(Logout());
                          window.location.reload();
                        }}
                      >
                        <span>Logout</span>
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className={style.logoContainer}>
                <NavLink to={Links.Login} onClick={() => dispatch(openLoginCard(true))}>
                  <Button user={UserIcon} text={'Log In'} bg={'#CE2DBF'} />
                </NavLink>

                <NavLink to={Links.SignUp} onClick={() => dispatch(openLoginCard(true))}>
                  {' '}
                  <Button user={UserIcon} text={'Sign Up'} />
                </NavLink>
              </div>
            )}
          </nav>
          <div onClick={() => dispatch(openBurgeMenu(true))} className={style.header__burger}>
            <img src={burger} alt='burger Menu' />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
