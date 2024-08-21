import Logo from '../../../acsses/PopUpsImg/Login.png';
import AcauntInput from '../AcauntInput/AcauntInput';
import usrIcon from '../../../acsses/PopUpsImg/User.svg';
import email from '../../../acsses/PopUpsImg/email.svg';
import passord from '../../../acsses/PopUpsImg/password.svg';
import conPassword from '../../../acsses/PopUpsImg/password.svg';
import inviteCode from '../../../acsses/PopUpsImg/Rocket.svg';
import style from './SignUp.module.css';

function SignUp() {
  return (
    <div className={style.temporaryClass}>
      <div className={style.container}>
        <img className={style.logo} src={Logo} alt='Logo' />
        <div className={style.inputs_wrapp}>
          <h2>Sign up</h2>
          <p>
            Sign up Welcome! Enter your details and start buying cheats for your favorite games. Username Email Address
            Password Confirm Password Invite code Create account
          </p>
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
