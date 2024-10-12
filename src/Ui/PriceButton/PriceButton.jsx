import style from './PriceButton.module.css';

const PriceButton = ({ title, price, active, id, Click }) => {
  console.log(active);

  return (
    <>
      <button onClick={Click} className={`${active ? style.buttonActive : style.button}`} id={id}>
        <span>{title}</span>
        <span className={`${active ? style.priceTextActive : style.priceText}`}> {price} </span>
      </button>
    </>
  );
};
// Установка значений по умолчанию для пропсов
PriceButton.defaultProps = {
  text: 'Default Text',
  price: ''
};
export default PriceButton;
