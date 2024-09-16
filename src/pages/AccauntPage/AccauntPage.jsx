import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../Ui/Button/Button';
import { CardBlock } from '../../components/CardBlock/CardBlock';
import user from '../../acsses/icons/User.svg';
import gameIcon from '../../acsses/ProductPagesImg/game3.png';
import style from './AccauntPage.module.css';

const AccauntPage = () => {
  return (
    <div>
      <Header />
      <div className={style.container}>
        <h2>Account</h2>
        <div className={style.userContainer}>
          <div className={style.user}>
            <img src={user} alt='usrIcon' />
            <h2>username123012</h2>
            <div className={style.buttonContainer}>
              <Button text={'Change password'} />
            </div>
          </div>
        </div>
        <div className={style.history}>
          <h2>History of orders</h2>
          <div className={style.historyContainaer}>
            <CardBlock
              image={gameIcon}
              title={'PUBG: BATTLEGROUNDS'}
              text={'ProAim PUBG (INTEL)key (1 day)'}
              count={'1'}
              price={'2'}
            />
            <CardBlock
              image={gameIcon}
              title={'PUBG: BATTLEGROUNDS'}
              text={'ProAim PUBG (INTEL)key (1 day)'}
              count={'1'}
              price={'2'}
            />
            <CardBlock
              image={gameIcon}
              title={'PUBG: BATTLEGROUNDS'}
              text={'ProAim PUBG (INTEL)key (1 day)'}
              count={'1'}
              price={'2'}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AccauntPage;
