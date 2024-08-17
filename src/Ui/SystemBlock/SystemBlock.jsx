import style from './SystemBlock.module.css';

const SystemBlock = ({ icon, title, text }) => {
  return (
    <div className={style.product__info_block}>
      <img src={icon} alt='icon' />
      <div className={style.product__info_block_info}>
        <div className={style.product__info_text}> {title}</div>
        <div className={style.product__info_description}>{text}</div>
      </div>
    </div>
  );
};

export default SystemBlock;
