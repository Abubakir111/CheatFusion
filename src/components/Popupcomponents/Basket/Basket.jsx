import SelectedProduct from '../../SelectedProduct/SelectedProduct';
import { useDispatch, useSelector } from 'react-redux';
import { openBasketCard } from '../../../redux/PopUpSlice';
import corssIcon from '../../../acsses/icons/cross.svg';
import checkbox from '../../../acsses/icons/checkboxActive.svg';
import freekassa from '../../../acsses/Payments/FREEKASSA.svg';
import masterCart from '../../../acsses/Payments/MasterCard.svg';
import payApl from '../../../acsses/Payments/PayApl.svg';
import payGoogle from '../../../acsses/Payments/PayGoogle.svg';
import payPal from '../../../acsses/Payments/PayPal.svg';
import stripe from '../../../acsses/Payments/Stripe.svg';
import visa from '../../../acsses/Payments/Visa.svg';
import PayWithCrypto from '../../../acsses/Payments/PayWithCrypto.svg';
import reight_arrow from '../../../acsses/icons/Right_arrow.png';
import style from './Basket.module.css';
import Links from '../../../links/Links';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { hendelCountAdd, hendelCountPrev, DeletProduct } from '../../../redux/store/ProductsSlice';
// import CheckoutButton from '../../TestStrioBasket/TestStrioBasket';

function Basket() {
  const products = useSelector((state) => state.ProductsSlice.ActiveProduct);
  const scrollProduct = useSelector((state) => state.PopUpSlice.scrollProduct);
  // const TotalMoney = useSelector((state) => state.ProductsSlice.TotalMoney);
  console.log(products);
  let cash = 0;
  products.map((many) => {
    cash += many.price;
  });
  console.log(cash);

  const [chekboxAvtive, setchekboxAvtive] = useState(false);
  const Dispatch = useDispatch();
  const [paymentMethods, setPaymentMethods] = useState({
    PayPal: false,
    Stripe: false,
    Visa: false,
    PayPay: false,
    Freekassa: false
  });

  const toggleActivePay = (type) => {
    // Обновляем состояние для выбранного метода, остальные сбрасываем в false
    setPaymentMethods({
      PayPal: type === 'PayPal',
      Stripe: type === 'Stripe',
      Visa: type === 'Visa',
      PayPay: type === 'PayPay',
      Freekassa: type === 'Freekassa'
    });
  };
  const LinkPage = () => {
    Dispatch(openBasketCard(false));
  };

  return (
    <>
      <div className={style.contianer}>
        <div onClick={() => Dispatch(openBasketCard(false))} className={style.closeIcon}>
          <img src={corssIcon} alt='corssIcon' />
        </div>
        <div className={style.ShoppingCard}>
          <h2>Shopping Cart</h2>
          <div className={`${style.test} ${scrollProduct ? style.activScrollProduct : ''}`}>
            {products.length !== 0 ? (
              products.map((element) => (
                <SelectedProduct
                  key={element.id}
                  img={element.img}
                  nameText1={element.game}
                  nameText2={element.name}
                  title={element.title}
                  price={element.price}
                  count={element.count}
                  hendelCountAdd={() => Dispatch(hendelCountAdd(element.id))}
                  hendelCountPrev={() => Dispatch(hendelCountPrev(element.id))}
                  DeletProduct={() => Dispatch(DeletProduct(element.id))}
                />
              ))
            ) : (
              <div className={style.card__noneText}>the basket is empty</div>
            )}
          </div>
        </div>
        {/* <CheckoutButton /> */}
        <div className={style.card_wrap}>
          <div className={style.card}>
            <h2>Payment Details</h2>
            <div className={style.card__type_of_payment_wrapp}>
              <span>Payment type</span>
              <div className={style.card__type_of_payment_inner}>
                <div className={style.card__type_colum}>
                  <div
                    className={`${style.card__type_of_payment_img_container} ${
                      paymentMethods.PayPal ? style.card__type_of_payment_img_container_active : ''
                    }`}
                    onClick={() => toggleActivePay('PayPal')}
                  >
                    <img className={style.card__type_of_payment_img1} src={payPal} alt='payment' />
                    <input type='radio' id='radio1' className={style.custom_radio} name='example' />
                    <label
                      htmlFor='radio1'
                      className={`${style.label_radio} ${paymentMethods.PayPal ? style.checked : ''}`} // Добавляем класс checked при выборе
                    ></label>
                  </div>
                  <div
                    className={`${style.card__type_of_payment_img_container} ${
                      paymentMethods.Stripe ? style.card__type_of_payment_img_container_active : ''
                    }`}
                    onClick={() => toggleActivePay('Stripe')}
                  >
                    <img className={style.card__type_of_payment_img1} src={stripe} alt='payment' />
                    <input type='radio' id='radio1' className={style.custom_radio} name='example' />
                    <label
                      htmlFor='radio1'
                      className={`${style.label_radio} ${paymentMethods.Stripe ? style.checked : ''}`} // Добавляем класс checked при выборе
                    ></label>
                  </div>
                  <div
                    className={`${style.card__type_of_payment_img_container} ${
                      paymentMethods.Freekassa ? style.card__type_of_payment_img_container_active : ''
                    }`}
                    onClick={() => toggleActivePay('Freekassa')}
                  >
                    <div className={style.FreecassaImg}>
                      <img className={style.card__type_of_payment_img1} src={freekassa} alt='payment' />
                      <img src={PayWithCrypto} alt='PayWithCrypto' />
                    </div>
                    <input type='radio' id='radio1' className={style.custom_radio} name='example' />
                    <label
                      htmlFor='radio1'
                      className={`${style.label_radio} ${paymentMethods.Freekassa ? style.checked : ''}`} // Добавляем класс checked при выборе
                    ></label>
                  </div>
                </div>
                <div className={style.card__type_colum}>
                  <div
                    className={`${style.card__type_of_payment_img_container} ${
                      paymentMethods.Visa ? style.card__type_of_payment_img_container_active : ''
                    }`}
                    onClick={() => toggleActivePay('Visa')}
                  >
                    <div className={style.card__img_inner}>
                      <img className={style.card__type_of_payment_img1} src={visa} alt='payment' />
                      <img className={style.card__type_of_payment_img1} src={masterCart} alt='payment' />
                    </div>
                    <input type='radio' id='radio1' className={style.custom_radio} name='example' />
                    <label
                      htmlFor='radio1'
                      className={`${style.label_radio} ${paymentMethods.Visa ? style.checked : ''}`} // Добавляем класс checked при выборе
                    ></label>
                  </div>
                  <div
                    className={`${style.card__type_of_payment_img_container} ${
                      paymentMethods.PayPay ? style.card__type_of_payment_img_container_active : ''
                    }`}
                    onClick={() => toggleActivePay('PayPay')}
                  >
                    <div className={style.card__img_inner}>
                      <img className={style.card__type_of_payment_img1} src={payApl} alt='payment' />
                      <img className={style.card__type_of_payment_img1} src={payGoogle} alt='payment' />
                    </div>
                    <input type='radio' id='radio1' className={style.custom_radio} name='example' />
                    <label
                      htmlFor='radio1'
                      className={`${style.label_radio} ${paymentMethods.PayPay ? style.checked : ''}`} // Добавляем класс checked при выборе
                    ></label>
                  </div>
                </div>
              </div>
              <div className={style.card__agreement}>
                {chekboxAvtive ? (
                  <img
                    className={style.card__checkboxActive}
                    onClick={() => setchekboxAvtive((prev) => !prev)}
                    src={checkbox}
                    alt='checkbox'
                  />
                ) : (
                  <div className={style.card__checkbox} onClick={() => setchekboxAvtive((prev) => !prev)}></div>
                )}
                <div>
                  {' '}
                  <span>I agree with</span>
                  <NavLink to={Links.Terms} onClick={() => LinkPage()}>
                    {' '}
                    Terms of use,
                  </NavLink>
                  <span> </span>
                  <NavLink to={Links.Privacy} onClick={() => LinkPage()}>
                    {' '}
                    Privacy policy,
                  </NavLink>
                  <span> </span>
                  <NavLink to={Links.Refund} onClick={() => LinkPage()}>
                    {' '}
                    Refund policy
                  </NavLink>
                </div>
              </div>
            </div>
            <div className={style.card__button_container}>
              <div className={style.card__title_container}>
                <h5>Total (Tax incl.)</h5>
                <span>${cash}</span>
              </div>
              <button className={style.card__button}>
                <span>$ {cash}</span>
                <div className={style.card__button_icon}>
                  <span>Checkout</span>
                  <img src={reight_arrow} alt='reight_arrow' />
                </div>
              </button>

              {/* <a href='https://freekassa.com' target='_blank' rel='noopener noreferrer'>
                <img src='https://cdn.freekassa.com/banners/small-dark-1.png' title='Прием платежей на сайте' />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Basket;
