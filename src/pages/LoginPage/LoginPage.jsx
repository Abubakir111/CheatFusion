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
import axios from 'axios';
import Cookies from 'js-cookie';
// import { fetchLoginUser } from '../../redux/store/AuthorizationUserSlice';

function Login() {
  const disptch = useDispatch();
  const developmentStatus = useSelector((status) => status.ProductsSlice.developmentStatus);

  // console.log('LoginMassege ->', LoginMassege);
  // console.log('ErorrMassege ->', ErorrMassege);

  const navigate = useNavigate(); // Хук для навигации
  const handleClick = () => {
    disptch(openLoginCard(false));
    navigate(Links.Home); // Переход на указанную страницу
  };
  const [eyePass, setEyePass] = useState(false);
  const [errorMassage, setErrorMassage] = useState('');

  // let errorMessage = '';
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
    if (value !== '') {
      setErrorMassage('');
    }
  };
  const LoginClick = async () => {
    if (userData.login !== '' && userData.pass !== '') {
      try {
        const { data, status } = await axios.post(
          developmentStatus
            ? 'http://localhost:8080/https://api.cheatfusion.store/shop/login'
            : 'https://api.cheatfusion.store/shop/login',
          userData
        );

        if (status == 200) {
          Cookies.set('jwt', data.jwt);
          handleClick();
        }

        return data;
      } catch (error) {
        setErrorMassage(error.response ? error.response.data.error : '');
      }
    }
  };
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
              {errorMassage !== '' ? <span>{errorMassage}</span> : ''}

              <div className={style.btton_wrapp}>
                <button onClick={() => LoginClick()}>Log In</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
