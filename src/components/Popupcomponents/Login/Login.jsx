import sugnUp from '../../../acsses/PopUpsImg/signUp.png';
import AcauntInput from '../AcauntInput/AcauntInput';
import usrIcon from '../../../acsses/PopUpsImg/User.svg';
import email from '../../../acsses/PopUpsImg/email.svg';
import passord from '../../../acsses/PopUpsImg/password.svg';
import conPassword from '../../../acsses/PopUpsImg/password.svg';
import inviteCode from '../../../acsses/PopUpsImg/Rocket.svg';
import style from './Login.module.css';

function Login() {
  return (
    <div className={style.temporaryClass}>
      <div className={style.container}>
        <img className={style.logo} src={sugnUp} alt='sugnUp' />
        <div className={style.inputs_wrapp}>
          <h2>Log In</h2>
          <p>
            Sign up Welcome! Enter your details and start buying cheats for your favorite games. Username Email Address
            Password Confirm Password Invite code Create account
          </p>
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
