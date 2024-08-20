import { useState } from 'react';
import BasketImg from '../../acsses/icons/Basket.svg';
import style from './BasketButton.module.css';

function BasketButton() {
  const [colse, setClose] = useState(true);
  const hendelClik = () => {
    if (colse == true) {
      setClose(false);
    } else if (colse === false) {
      setClose();
    }
    console.log(colse);
  };
  return (
    <>
      <div
        onClick={() => hendelClik()}
        className={`${style.fixed}`}
        style={{ display: ` ${close == 'sds' ? 'sds' : 'sdsd'}` }}
      >
        <div className={style.fixedElips}>
          <img className={style.fixedImg} src={BasketImg} alt='Basket' />
        </div>
      </div>
    </>
  );
}
export default BasketButton;
