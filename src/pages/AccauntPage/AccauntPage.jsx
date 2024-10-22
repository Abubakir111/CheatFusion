import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../Ui/Button/Button';
import { CardBlock } from '../../components/CardBlock/CardBlock';
import Cookies from 'js-cookie';
import axios from 'axios';
// import { useDispatch } from 'react-redux';
import user from '../../acsses/icons/User.svg';
// import gameIcon from '../../acsses/ProductPagesImg/game3.png';
import style from './AccauntPage.module.css';

const AccauntPage = () => {
  const [users, setUsers] = useState([]);

  const authorizeUser = async () => {
    const token = Cookies.get('jwt'); // Получаем токен из cookies

    if (!token) {
      console.log('Токен не найден');
      return;
    }

    try {
      const { data } = await axios.get(
        // 'http://localhost:8080/https://api.cheatfusion.store/shop/authorize',
        'https://api.cheatfusion.store/shop/authorize',
        {
          headers: {
            Authorization: `Bearer ${token}` // Передаем токен в заголовке Authorization
          }
        }
      );

      setUsers([{ login: data.login, transactions: data.transactions }]);

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
  }; // Вызов функции авторизаци
  useEffect(() => {
    authorizeUser(); // Запрос будет отправлен только при загрузке страницы
  }, []); // Пустой массив зависимостей означает, что эффект выполнится только один раз

  return (
    <div>
      <Header />
      <div className={style.container}>
        <h2>Account</h2>
        <div className={style.userContainer}>
          <div className={style.user}>
            <img src={user} alt='usrIcon' />
            <h2>{users.length > 0 ? users[0].login : ''}</h2>
            <div className={style.buttonContainer}>
              <Button text={'Change password'} />
            </div>
          </div>
        </div>
        <div className={style.history}>
          <h2>History of orders</h2>
          <div className={style.historyContainaer}>
            {users.length > 0 && users[0].transactions == 0 ? (
              <div>Nothing purchased yet</div>
            ) : (
              <div>
                <CardBlock
                  // image={gameIcon}
                  title={'PUBG: BATTLEGROUNDS'}
                  text={'ProAim PUBG (INTEL)key (1 day)'}
                  count={'1'}
                  price={'2'}
                />
                <CardBlock
                  // image={gameIcon}
                  title={'PUBG: BATTLEGROUNDS'}
                  text={'ProAim PUBG (INTEL)key (1 day)'}
                  count={'1'}
                  price={'2'}
                />
                <CardBlock
                  // image={gameIcon}
                  title={'PUBG: BATTLEGROUNDS'}
                  text={'ProAim PUBG (INTEL)key (1 day)'}
                  count={'1'}
                  price={'2'}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AccauntPage;
