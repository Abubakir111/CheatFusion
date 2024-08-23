import { useDispatch } from 'react-redux';
import { openBasketCard } from '../../redux/PopUpSlice';
import BasketImg from '../../acsses/icons/Basket.svg';
import style from './BasketButton.module.css';

function BasketButton() {
  const Dispatch = useDispatch();

  return (
    <>
      <div onClick={() => Dispatch(openBasketCard(true))} className={`${style.fixed}`}>
        <div className={style.fixedElips}>
          <img className={style.fixedImg} src={BasketImg} alt='Basket' />
        </div>
      </div>
    </>
  );
}
export default BasketButton;
