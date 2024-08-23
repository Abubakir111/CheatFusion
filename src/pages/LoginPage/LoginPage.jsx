import AcauntInput from '../../components/Popupcomponents/AcauntInput/AcauntInput';
import { useDispatch } from 'react-redux';
import { openLoginCard } from '../../redux/PopUpSlice';
import LoginImg from '../../acsses/PopUpsImg/Login.png';
import closs from '../../acsses/icons/cross.svg';
import usrIcon from '../../acsses/PopUpsImg/User.svg';
import passord from '../../acsses/PopUpsImg/password.svg';
import style from './LoginPage.module.css';
import { NavLink } from 'react-router-dom';
import Links from '../../links/Links';

function Login() {
  const Disptch = useDispatch();
  return (
    <div className={style.wrapp}>
      <div className={style.container}>
        <NavLink className={style.cross} to={Links.Home} onClick={() => Disptch(openLoginCard(false))}>
          <img src={closs} alt='closs' />
        </NavLink>
        <img className={style.logo} src={LoginImg} alt='LoginImg' />
        <div className={style.inputs_wrapp}>
          <h2>Log In</h2>
          <p>Welcome! Enter your login and password to start buying cheats for your favorite games.</p>
          <div className={style.input_inner}>
            <AcauntInput icon={usrIcon} texPlesholder={'User'} />
            <AcauntInput icon={passord} texPlesholder={'Password'} />
            <div className={style.btton_wrapp}>
              <button>Log In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
