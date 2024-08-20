import gameImg from '../../acsses/ProductPagesImg/game5.png';
import rectIon from '../../acsses/icons/rect.svg';
import style from './SelectedProduct.module.css';

export default function SelectedProduct() {
  return (
    <>
      <div className={style.info_container}>
        <div className={style.title__container}>
          <div className={style.text_container}>
            <img className={style.card__gamImg} src={gameImg} alt='gamIcon' />
            <div className={style.title__container_inner}>
              <div className={style.card__game_info}>
                <span>PUBG: BATTLEGROUNDS</span>
                <span>ProAim PUBG (INTEL)key (1 day)</span>
              </div>
              <div className={style.input__count_inner}>
                <span>1</span>
                <div className={style.input__count_container}>
                  <img className={style.input__count_rect1} src={rectIon} alt='' />

                  <img className={style.input__count_rect2} src={rectIon} alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.input__container}>
          <span>$4</span>
        </div>
      </div>
    </>
  );
}
