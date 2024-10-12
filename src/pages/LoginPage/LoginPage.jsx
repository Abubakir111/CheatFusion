import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AcauntInput from '../../components/Popupcomponents/AcauntInput/AcauntInput';
import { openLoginCard } from '../../redux/PopUpSlice';
import LoginImg from '../../acsses/PopUpsImg/Login.png';
import closs from '../../acsses/icons/cross.svg';
import usrIcon from '../../acsses/PopUpsImg/User.svg';
import passord from '../../acsses/PopUpsImg/password.svg';
import eyeClos from '../../acsses/icons/eyeClosed.png';
import eyeOpen from '../../acsses/icons/eyeOpen.png';
import style from './LoginPage.module.css';
import { NavLink } from 'react-router-dom';
import Links from '../../links/Links';
import { fetchLoginUser } from '../../redux/store/AuthorizationUserSlice';

function Login() {
  const disptch = useDispatch();
  const LoginMassege = useSelector((data) => data.AuthorizationUserSlice.LoginData);
  const ErorrMassege = useSelector((data) => data.AuthorizationUserSlice.errorLogin);
  const errorTest = useSelector((data) => data.AuthorizationUserSlice.errorTest);

  // console.log('LoginMassege ->', LoginMassege);
  // console.log('ErorrMassege ->', ErorrMassege);

  const navigate = useNavigate(); // Хук для навигации
  const handleClick = () => {
    disptch(openLoginCard(false));
    navigate(Links.Home); // Переход на указанную страницу
  };
  const [eyePass, setEyePass] = useState(false);
  const handleBlockClick = (event) => event.stopPropagation(); // Предотвращает всплытие события клика на блоке

  const [userData, setUserData] = useState({
    login: '',
    pass: ''
  });
  // console.log(userData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value
    }));
    // console.log(name, value);
  };
  const registClick = () => {
    if (userData.login !== '' && userData.pass !== '') {
      console.log(
        'проверка  данных перед отправкай  в  запрос....\n',
        userData,
        '\n отправляем  данные  в  пост  запрос!'
      );

      disptch(fetchLoginUser(userData));
      // navigate(Links.Home);

      console.log('отвер  серера  ->', LoginMassege);
      console.log('отвер  серера при статус ошибке ->', ErorrMassege);
    }
  };
  console.log('отвер  серера  данные->', errorTest);
  return (
    <div className={style.wrapp}>
      <div className={style.blurContainer} onClick={handleClick}>
        <div className={style.container} onClick={handleBlockClick}>
          <NavLink className={style.cross} to={Links.Home} onClick={() => disptch(openLoginCard(false))}>
            <img src={closs} alt='closs' />
          </NavLink>
          <img className={style.logo} src={LoginImg} alt='LoginImg' />
          <div className={style.inputs_wrapp}>
            <h2>Log In</h2>
            <p>Welcome! Enter your login and password to start buying cheats for your favorite games.</p>
            <div className={style.input_inner}>
              <AcauntInput
                icon={usrIcon}
                texPlesholder={'User'}
                name='login'
                Change={(e) => handleChange(e)}
                value={userData.login}
              />
              <AcauntInput
                inputType={`${eyePass ? 'text' : 'password'}`}
                icon={passord}
                texPlesholder={'Password'}
                name='pass'
                Change={(e) => handleChange(e)}
                value={userData.pass}
                eyeState={true}
                eyeIcon={eyePass ? eyeOpen : eyeClos}
                eyeClick={() => {
                  setEyePass((eye) => !eye);
                }}
              />
              {/* <AcauntInput
                icon={email}
                texPlesholder={'Email Address'}
                name='email'
                Change={(e) => handleChange(e)}
                value={userData.email}
                massage={massege.email}
              /> */}
              <div className={style.btton_wrapp}>
                <button onClick={() => registClick()}>Log In</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
