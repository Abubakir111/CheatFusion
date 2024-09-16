import style from './CardBlock.module.css';

export const CardBlock = ({ image, title, text, count, price }) => {
  return (
    <div>
      <div className={style.container}>
        <div className={style.titleContianer}>
          <div className={style.inner}>
            <img src={image} alt='gaimImg' />
            <div className={style.textWrapp}>
              <div className={style.textContainer}>
                <span>{title}</span>
                <span>{text}</span>
              </div>
              <div className={style.count}>{count}</div>
            </div>
          </div>
          <div> ${price}</div>
        </div>
      </div>
    </div>
  );
};
