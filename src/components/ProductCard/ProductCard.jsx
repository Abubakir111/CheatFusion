import { StatusDetected } from '../Popupcomponents/SatusDetected/StatusDetected';
import style from './ProductCard.module.css';

function ProductCard(props) {
  return (
    <>
      <div className={style.card} onClick={props.hendelClick}>
        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org/',
            '@type': 'Product',
            name: props.title,
            image: props.gameImg,
            offers: {
              '@type': 'Offer',
              priceCurrency: 'USD',
              price: props.price,
              itemCondition: 'https://schema.org/NewCondition',
              availability:
                props.status === 'available' ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock'
            }
          })}
        </script>
        <img src={props.gameImg} alt='Distant Galaxy' className={style.card__image} />
        <div className={style.card__content}>
          <h3 className={style.card__title}>{props.title}</h3>
          <div className={style.card__details}>
            <div className={style.card__Amout}>
              {/* <div className={style.card__text}>Amout</div> */}
              <div className={style.card__cheat}>
                <StatusDetected condition={props.status} />
              </div>
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
