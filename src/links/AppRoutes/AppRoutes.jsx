import { Route, Routes } from 'react-router';
import publicRoutes from '../../links/Router.jsx';
import BasketButton from '../../Ui/BasketButton/BasketButton.jsx';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop.jsx';
// import Basket from '../../components/Popupcomponents/Basket/Basket.jsx';
// import style from './AppRoutes.module.css';
// import Header from '../components/Header/Header';
// import TermsPage from '../../pages/TermsPage/TermsPage.jsx';

const AppRoutes = () => {
  return (
    <div>
      {/* <TermsPage /> */}
      {/* <div className={style.popup_container}>
        <Basket />
      </div> */}
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
