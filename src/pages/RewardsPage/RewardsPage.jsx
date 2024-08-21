import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../Ui/Button/Button';

import style from './RewardsPage.module.css';

export default function RewardsPage() {
  return (
    <div>
      <Header />
      <div className={style.container}>
        <div className={style.invite__wrrap}>
          <h2>Rewards</h2>
          <div className={style.invite__inner}>
            <div className={style.invite__text}>
              <span>Invite 5 friends* and get free cheat</span>
              <span>*Your friend should buy 1 or more cheats</span>
            </div>
            <div className={style.button_wrapp}>
              <span>Invite code for friend</span>
              <Button text={'Copy invite'} />
            </div>
          </div>
          <div className={style.level__container}>
            <div className={style.levelActiv}>
              <span>0</span>
              <span>1</span>
            </div>
            <div className={style.levelNoActive}>
              <span>2</span>
            </div>
            <div className={style.levelNoActive}>
              <span>3</span>
            </div>
            <div className={style.levelNoActive}>
              <span>4</span>
            </div>
          </div>
          <div className={style.free_container}>
            <p>Free cheat giveaway every 48 hours in our Telegram channel!</p>
            <button>Claim cheat in Telegram channel</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
