import { NavLink } from 'react-router-dom';
import Links from '../../links/Links';
import Button from '../../Ui/Button/Button';
import UserIcon from '../../acsses/icons/User.svg';
import burger from '../../acsses/icons/BurgerMenu.svg';
import logo from '../../acsses/icons/Logo.svg';
import style from './Header.module.css';

const Header = () => {
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
            <Button user={UserIcon} text={'Log In'} bg={'#CE2DBF'} />
            <Button user={UserIcon} text={'Sign Up'} />
            {/* <Button user={User} text={'username'} bg={'none'} /> */}
          </nav>
          <div className={style.header__burger}>
            <img src={burger} alt='burger Menu' />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
