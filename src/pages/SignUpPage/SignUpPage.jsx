import { useState } from 'react';
import signUp from '../../acsses/PopUpsImg/signUp.png';
import AcauntInput from '../../components/Popupcomponents/AcauntInput/AcauntInput';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { openSingUpCard } from '../../redux/PopUpSlice';
import usrIcon from '../../acsses/PopUpsImg/User.svg';
import email from '../../acsses/PopUpsImg/email.svg';
import passord from '../../acsses/PopUpsImg/password.svg';
import conPassword from '../../acsses/PopUpsImg/password.svg';
import inviteCode from '../../acsses/PopUpsImg/Rocket.svg';
import crossIcon from '../../acsses/icons/cross.svg';
import eyeClos from '../../acsses/icons/eyeClosed.png';
import eyeOpen from '../../acsses/icons/eyeOpen.png';
import style from './SignUpPage.module.css';
import { NavLink } from 'react-router-dom';
import Links from '../../links/Links';
import { fetchAuthorizationUser } from '../../redux/store/AuthorizationUserSlice';
import { useSelector } from 'react-redux';
// import { registerUser } from '../../redux/store/UserSlice';

function SignUp() {
  const errorAuthorization = useSelector((data) => data.AuthorizationUserSlice.errorAuthorization);
  const testAuthorization = useSelector((data) => data.AuthorizationUserSlice.testAuthorization);
  console.log('Получаем данные  с сервера  при ошибке ->', errorAuthorization);
  console.log('Получаем данные  с сервера->', testAuthorization);

  const disptch = useDispatch();
  const navigate = useNavigate(); // Хук для навигации
  const [eyePass, setEyePass] = useState(false);
  const [eyeConPass, setEyeConPass] = useState(false);

  const [userData, setUserData] = useState({
    login: '',
    pass: '',
    email: '',
    conPass: '',
    inviteCode: ''
  });
  const [massege, setMassege] = useState({
    login: '',
    email: '',
    pass: '',
    conPass: '',
    inviteCode: ''
  });
  // console.log(massege);

  // Функция для обновления данных пользователя
  const handleChange = (e) => {
    let { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const registClick = () => {
    // Примеры регулярных выражений для проверки полей
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Для проверки корректности email
    const passwordMinLength = 3; // Минимальная длина пароля

    // Валидация email
    console.log(userData);
    // Проверка логина
    if (!userData.login || userData.login.length < 3) {
      setMassege((prev) => ({
        ...prev,
        login: 'Login must be at least 3 characters long'
      }));
      console.log(massege.login);
    } else {
      setMassege((prev) => ({
        ...prev,
        login: ''
      }));
      console.log(massege.login);
    }
    if (!emailRegex.test(userData.email)) {
      setMassege((prev) => ({
        ...prev,
        email: 'Invalid email format'
      }));
      // return;
    } else {
      setMassege((prev) => ({
        ...prev,
        email: ''
      }));
    }

    // Валидация пароля
    if (userData.pass.length <= passwordMinLength - 1) {
      setMassege((prev) => ({
        ...prev,
        pass: 'Password must be at least 3 characters long'
      }));
      // return;
    } else {
      setMassege((prev) => ({
        ...prev,
        pass: ''
      }));
    }

    // Проверка на совпадение пароля и его подтверждения
    if (userData.pass !== userData.conPass) {
      console.log(userData.pass, 'sdsd', userData.conPass);

      setMassege((prev) => ({
        ...prev,
        conPass: 'The passwords didn`t happen'
      }));
    } else {
      setMassege((prev) => ({
        ...prev,
        conPass: ''
      }));
    }
    if (massege.login == '' && massege.email == '' && massege.pass == '' && massege.conPass == '') {
      console.log('Получаем данные  с поля:', userData);

      disptch(
        fetchAuthorizationUser({
          login: userData.login,
          pass: userData.pass,
          email: userData.email,
          inviteCode: ''
        })
      );

      console.log(
        'проверка данных перед запросам....\n',
        {
          login: userData.login,
          pass: userData.pass,
          email: userData.email,
          inviteCode: ''
        },
        '\nотправляем  данные  в  пост  запрос!'
      );
      // Запрашиваем продукты при монтировании компонента
    }
    // Тут ты можешь отправить данные userData на сервер
  };

  const handleClick = () => {
    navigate(Links.Home); // Переход на указанную страницу
    disptch(openSingUpCard(false));
  };

  const handleBlockClick = (event) => event.stopPropagation(); // Предотвращает всплытие события клика на блоке

  // const data = use;

  return (
    <div className={style.wrapp}>
      <div className={style.blurContainer} onClick={handleClick}>
        <div className={style.container} onClick={handleBlockClick}>
          <NavLink to={Links.Home} className={style.crossIcon} onClick={() => disptch(openSingUpCard(false))}>
            <img src={crossIcon} alt='crossIcon' />
          </NavLink>
          <img className={style.logo} src={signUp} alt='Logo' />
          <div className={style.inputs_wrapp}>
            <h2>Sign up</h2>
            <p>Welcome! Enter your details and start buying cheats for your favorite games.</p>
            <div className={style.input_inner}>
              <AcauntInput
                inputType={'text'}
                icon={usrIcon}
                texPlesholder={'User'}
                name='login'
                Change={(e) => handleChange(e)}
                value={userData.login}
                massage={massege.login}
              />
              <AcauntInput
                inputType={'text'}
                icon={email}
                texPlesholder={'Email Address'}
                name='email'
                Change={(e) => handleChange(e)}
                value={userData.email}
                massage={massege.email}
              />
              <AcauntInput
                inputType={`${eyePass ? 'text' : 'password'}`}
                icon={passord}
                texPlesholder={'Password'}
                name='pass'
                Change={(e) => handleChange(e)}
                value={userData.pass}
                massage={massege.pass}
                eyeState={true}
                eyeIcon={eyePass ? eyeOpen : eyeClos}
                eyeClick={() => {
                  setEyePass((eye) => !eye);
                }}
              />
              <AcauntInput
                inputType={`${eyeConPass ? 'text' : 'password'}`}
                icon={conPassword}
                texPlesholder={'Confirm Password'}
                name='conPass'
                Change={(e) => handleChange(e)}
                value={userData.conPass}
                massage={massege.conPass}
                eyeState={true}
                eyeIcon={eyeConPass ? eyeOpen : eyeClos}
                eyeClick={() => {
                  setEyeConPass((eye) => !eye);
                }}
              />
              <AcauntInput
                inputType={'text'}
                icon={inviteCode}
                texPlesholder={'Invite code'}
                Change={(e) => handleChange(e)}
                name='inviteCode'
                value={userData.inviteCode}
              />
              <div className={style.btton_wrapp}>
                <button onClick={registClick}>Create account</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
