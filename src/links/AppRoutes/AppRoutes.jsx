import { Route, Routes } from 'react-router';
import { Helmet } from 'react-helmet';
import publicRoutes from '../../links/Router.jsx';
import BasketButton from '../../Ui/BasketButton/BasketButton.jsx';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop.jsx';
import { BurgerMenu } from '../../components/Popupcomponents/BurgerMenu/BurgerMenu.jsx';
import Basket from '../../components/Popupcomponents/Basket/Basket.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { openBurgeMenu, openBasketCard } from '../../redux/PopUpSlice.js';
import { EraseMessage } from '../../redux/store/ProductsSlice.js';
import style from './AppRoutes.module.css';
// import Header from '../components/Header/Header';
// import TermsPage from '../../pages/TermsPage/TermsPage.jsx';

const AppRoutes = () => {
  const Dispatch = useDispatch();
  const openMenu = useSelector((state) => state.PopUpSlice.burgerMenu);
  const openBasket = useSelector((state) => state.PopUpSlice.basket);
  const openLogin = useSelector((state) => state.PopUpSlice.logInPge);
  const openSignUp = useSelector((state) => state.PopUpSlice.singupPage);

  const handleBlockClick = (event) => {
    event.stopPropagation(); // Предотвращает всплытие события клика на блоке
  };

  return (
    <div>
      {openBasket && (
        <div
          onClick={() => {
            Dispatch(EraseMessage());
            Dispatch(openBasketCard(false));
          }}
          className={style.popUpConainerBasket}
        >
          <div onClick={handleBlockClick}>
            <Basket />
          </div>
        </div>
      )}
      {openMenu && (
        <div onClick={() => Dispatch(openBurgeMenu(false))} className={style.popUpConainerMenu}>
          <div onClick={handleBlockClick}>
            <BurgerMenu />
          </div>
        </div>
      )}
      {openBasket == false && openLogin == false && openSignUp === false ? <BasketButton /> : ''}
      <Helmet>
        <title> CheatFusion: The Ultimate Hub for Software Hacks and Cheats</title>
        <meta
          name='description'
          content='CheatFusion Store is your ultimate destination for software cheats and hacks designed to boost productivity and unlock hidden features. Our collection includes detailed, easy-to-follow guides that cater to both beginners and experts across various software platforms. Whether you’re looking to streamline your workflow or discover powerful shortcuts, CheatFusion has everything you need. Start saving time and enhancing your software experience with our expertly curated cheats today!'
        />
      </Helmet>
      <ScrollToTop>
        <Routes>
          {publicRoutes.map(({ path, element }, index) =>
            path === '/' ? (
              <Route key={index} index element={element} />
            ) : (
              <Route key={path || index} path={path} element={element} />
            )
          )}
        </Routes>
        {/* <Routes>
          {publicRoutes.map(({ path, element }) =>
            path === '/' ? (
              <Route key={path} index element={element} />
            ) : (
              <Route key={path} path={path} element={element} />
            )
          )}
        </Routes> */}
      </ScrollToTop>
    </div>
  );
};

export default AppRoutes;
