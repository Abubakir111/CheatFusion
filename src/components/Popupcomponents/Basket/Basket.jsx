import SelectedProduct from '../../SelectedProduct/SelectedProduct';
import iconImg1 from '../../../acsses/Payments/btcPayment.svg';
import iconImg2 from '../../../acsses/Payments/LPayment.svg';
import iconImg3 from '../../../acsses/Payments/stripePayment.svg';
import iconImg4 from '../../../acsses/Payments/TPayment.svg';
import reight_arrow from '../../../acsses/icons/Right_arrow.png';
import style from './Basket.module.css';

function Basket() {
  return (
    <>
      <div className={style.contianer}>
        <div className={style.ShoppingCard}>
          <h2>ShoppingCardInner</h2>
          <SelectedProduct />
          <SelectedProduct />
          <SelectedProduct />
        </div>
        <div className={style.card_wrap}>
          <div className={style.card}>
            <h2>Card Details</h2>
            <div className={style.card__type_of_payment_wrapp}>
              <span>Card type</span>
              <div className={style.card__type_of_payment_inner}>
                <img src={iconImg3} alt='payment' />
                <div className={style.card__type_of_payment_img_container}>
                  <img src={iconImg1} alt='payment' />
                </div>
                <div className={style.card__type_of_payment_img_container}>
                  <img src={iconImg2} alt='payment' />
                </div>
                <div className={style.card__type_of_payment_img_container}>
                  <img src={iconImg4} alt='payment' />
                </div>
              </div>
            </div>
            <div className={style.card__button_container}>
              <div className={style.card__title_container}>
                <h5>Total (Tax incl.)</h5>
                <span>$12</span>
              </div>
              <button className={style.card__button}>
                <span>$12</span>
                <div className={style.card__button_icon}>
                  <span>Checkout</span>
                  <img src={reight_arrow} alt='reight_arrow' />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Basket;
