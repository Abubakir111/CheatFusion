import Button from '../../../Ui/Button/Button';
import icon from '../../../acsses/icons/User.svg';
import { NavLink } from 'react-router-dom';
import Links from '../../../links/Links';
import { useDispatch, useSelector } from 'react-redux';

import { useLockBodyScroll } from 'react-use';
import { Logout } from '../../../redux/store/AuthorizationUserSlice';
import { openBurgeMenu, openLoginCard, openSingUpCard } from '../../../redux/PopUpSlice';
import style from './BurgerMenu.module.css';
import { useState } from 'react';

export const BurgerMenu = () => {
  const Dispatch = useDispatch();
  const openMenu = useSelector((state) => state.PopUpSlice.BurgerMenu);
  const userSlice = useSelector((state) => state.AuthorizationUserSlice.userLogin);

  useLockBodyScroll(openMenu);
  const [acaunt, setAcaunt] = useState(false);

  return (
    <div className={style.wrapp}>
      <div className={style.container}>
        {userSlice.length > 0 ? (
          userSlice.map((user, index) => (
            <div key={index} className={style.container_inner}>
              <Button
                user={icon}
                text={user.login}
                bg={'none'}
                buttonHeader={'buttonHeader'}
                Clikc={() => setAcaunt((acautn) => !acautn)}
              />
              {acaunt ? (
                <div className={style.userHoverBlock}>
                  <NavLink onClick={() => Dispatch(openBurgeMenu(false))} to={Links.acaunt}>
                    <span>Account</span>
                  </NavLink>
                  <div className={style.liner}></div>
                  <NavLink
                    onClick={() => {
                      Dispatch(Logout());
                      Dispatch(openBurgeMenu(false));
                      window.location.reload();
                    }}
                    to={Links.Home}
                  >
                    <span>Logout</span>
                  </NavLink>
                </div>
              ) : (
                ''
              )}
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
