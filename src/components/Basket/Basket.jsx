import BasketImg from '../../acsses/icons/Basket.svg';
import style from './Basket.module.css';

function Basket() {
  return (
    <>
      <div className={style.fixed}>
        <div className={style.fixedElips}>
          <img className={style.fixedImg} src={BasketImg} alt='Basket' />
        </div>
      </div>
    </>
  );
}
export default Basket;
