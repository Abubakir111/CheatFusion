import style from './BlockCharacteristics.module.css';

const BlockCharacteristics = ({ title, icon, text }) => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h5 className={style.paddingLeft}>{title}</h5>
      </div>
      <div>
        <ul className={`${style.ul} ${style.paddingLeft} `}>
          {text &&
            text.map((el, index) => (
              <li className={style.li} key={index}>
                <img src={icon} alt='icon' />
                <span>{el}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default BlockCharacteristics;
