import style from './ProductCard.module.css';

function ProductCard(props) {
  return (
    <>
      <div className={style.card}>
        <img src={props.gameImg} alt='Distant Galaxy' className={style.card__image} />
        <div className={style.card__content}>
          <h3 className={style.card__title}>{props.title}</h3>
          <div className={style.card__details}>
            <div className={style.card__price}>
              <div className={style.card__text}>Amout</div>
              <div className={style.card__cheat}>{props.text1}</div>
            </div>
            <div className={style.card__price}>
              <div className={style.card__text}>Price</div>
              <div className={style.card__cheat}>from {props.price} USD</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductCard;
