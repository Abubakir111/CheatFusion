import style from './NouRouting.module.css';
import { Link } from 'react-router-dom';
import Links from '../../links/Links';

const NoRouting = () => {
  return (
    <div className={style.container}>
      <h1 className={style.h1}> Такой страницы нету - ошибка 404</h1>

      <Link to={Links.Home}>
        <button type='button'>Вернуться на главную страницу</button>
      </Link>
    </div>
  );
};

export default NoRouting;
