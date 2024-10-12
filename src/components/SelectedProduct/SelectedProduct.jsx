// import gameImg from '../../acsses/ProductPagesImg/game5.png';
import rectIon from '../../acsses/icons/rect.svg';
import cross from '../../acsses/icons/cross.svg';
import style from './SelectedProduct.module.css';

export default function SelectedProduct({
  img,
  nameText1,
  nameText2,
  title,
  price,
  count,
  hendelCountPrev,
  hendelCountAdd,
  DeletProduct
}) {
  return (
    <>
      <div className={style.info_container}>
        <img className={style.crossIcon} src={cross} alt='closses' onClick={() => DeletProduct()} />
        <div className={style.title__container}>
          <div className={style.text_container}>
            <img className={style.card__gamImg} src={img} alt='gamIcon' />
            <div className={style.title__container_inner}>
              <div className={style.card__game_info}>
                <span>{nameText1}</span>
                <span>{`${nameText2}   ( ${title} )`}</span>
              </div>
              <div className={style.input__count_inner}>
                <span>{count}</span>
                <div className={style.input__count_container}>
                  <img onClick={() => hendelCountAdd()} className={style.input__count_rect1} src={rectIon} alt='' />

                  <img onClick={() => hendelCountPrev()} className={style.input__count_rect2} src={rectIon} alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.input__container}>
          <span>$ {price}</span>
        </div>
      </div>
    </>
  );
}
