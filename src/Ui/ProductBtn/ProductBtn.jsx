import style from './ProductBtn.module.css';

const ProductBtn = ({ bg, co, fw, icon, text, price }) => {
  return (
    <button className={style.button} style={{ background: bg, color: co, fontWeight: fw }}>
      {icon && <img src={icon} alt='buttonIcon' />}
      {text}
      <span>{price}</span>
    </button>
  );
};

// Установка значений по умолчанию для пропсов
ProductBtn.defaultProps = {
  bg: '#2b2b2b',
  co: 'black',
  fw: 'normal',
  text: 'Default Text',
  price: '',
  icon: null // Если иконка не обязательна, можно указать null или '' как значение по умолчанию
};
export default ProductBtn;
