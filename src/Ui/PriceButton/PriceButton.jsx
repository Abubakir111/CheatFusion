import style from './PriceButton.module.css';

const PriceButton = ({ bg, co, cot, title, price }) => {
  return (
    <>
      <button className={style.button} style={{ background: bg, color: co }}>
        {title}
        <span className={style.priceText} style={{ color: cot }}>
          {' '}
          {price}{' '}
        </span>
      </button>
    </>
  );
};
// Установка значений по умолчанию для пропсов
PriceButton.defaultProps = {
  bg: '#3B3B3B',
  co: '#837e7e',
  cot: '#fff',
  fw: 'normal',
  text: 'Default Text',
  price: ''
};
export default PriceButton;
