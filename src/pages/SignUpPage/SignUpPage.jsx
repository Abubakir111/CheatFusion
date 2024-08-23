import signUp from '../../acsses/PopUpsImg/signUp.png';
import AcauntInput from '../../components/Popupcomponents/AcauntInput/AcauntInput';
import { useDispatch } from 'react-redux';
import { openSingUpCard } from '../../redux/PopUpSlice';
import usrIcon from '../../acsses/PopUpsImg/User.svg';
import email from '../../acsses/PopUpsImg/email.svg';
import passord from '../../acsses/PopUpsImg/password.svg';
import conPassword from '../../acsses/PopUpsImg/password.svg';
import inviteCode from '../../acsses/PopUpsImg/Rocket.svg';
import crossIcon from '../../acsses/icons/cross.svg';
import style from './SignUpPage.module.css';
import { NavLink } from 'react-router-dom';
import Links from '../../links/Links';

function SignUp() {
  const Disptch = useDispatch();
  return (
    <div className={style.wrapp}>
      <div className={style.container}>
        <NavLink onClick={() => Disptch(openSingUpCard(false))} to={Links.Home} className={style.crossIcon}>
          <img src={crossIcon} alt='crossIcon' />
        </NavLink>
        <img className={style.logo} src={signUp} alt='Logo' />
        <div className={style.inputs_wrapp}>
          <h2>Sign up</h2>
          <p>Welcome! Enter your details and start buying cheats for your favorite games.</p>
          <div className={style.input_inner}>
            <AcauntInput icon={usrIcon} texPlesholder={'User'} />
            <AcauntInput icon={email} texPlesholder={'Email Address'} />
            <AcauntInput icon={passord} texPlesholder={'Password'} />
            <AcauntInput icon={conPassword} texPlesholder={'Confirm Password'} />
            <AcauntInput icon={inviteCode} texPlesholder={'Invite code'} />
            <div className={style.btton_wrapp}>
              <button>Create account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
