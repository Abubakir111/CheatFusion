import { Route, Routes } from 'react-router';
import publicRoutes from '../../links/Router.jsx';
import BasketButton from '../../Ui/BasketButton/BasketButton.jsx';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop.jsx';
import { BurgerMenu } from '../../components/Popupcomponents/BurgerMenu/BurgerMenu.jsx';
import Basket from '../../components/Popupcomponents/Basket/Basket.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { openBurgeMenu, openBasketCard } from '../../redux/PopUpSlice.js';
import style from './AppRoutes.module.css';
// import Header from '../components/Header/Header';
// import TermsPage from '../../pages/TermsPage/TermsPage.jsx';

const AppRoutes = () => {
  const Dispatch = useDispatch();
  const openMenu = useSelector((state) => state.PopUpSlice.burgerMenu);

  const openBasket = useSelector((state) => state.PopUpSlice.basket);
  console.log(Basket);

  console.log(openMenu);
  const handleBlockClick = (event) => {
    event.stopPropagation(); // Предотвращает всплытие события клика на блоке
  };

  return (
    <div>
      {openBasket && (
        <div onClick={() => Dispatch(openBasketCard(false))} className={style.popUpConainerBasket}>
          <div onClick={handleBlockClick}>
            <Basket />
          </div>
        </div>
      )}
      {openMenu && (
        <div onClick={() => Dispatch(openBurgeMenu(false))} className={style.popUpConainerMenu}>
          <BurgerMenu />
        </div>
      )}

      <BasketButton />
      <ScrollToTop>
        <Routes>
          {publicRoutes.map(({ path, element }) =>
            path === '/' ? (
              <Route key={path} index element={element} />
            ) : (
              <Route key={path} path={path} element={element} />
            )
          )}
        </Routes>
      </ScrollToTop>
    </div>
  );
};

export default AppRoutes;
