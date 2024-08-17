import { Route, Routes } from 'react-router';
import publicRoutes from './Router';
import Basket from '../components/Basket/Basket';
// import Header from '../components/Header/Header';

const AppRoutes = () => {
  return (
    <div>
      <Basket />
      <Routes>
        {/* <Route path='/' element={<Header />}> */}
        {publicRoutes.map(({ path, element }) =>
          path === '/' ? (
            <Route key={path} index element={element} />
          ) : (
            <Route key={path} path={path} element={element} />
          )
        )}
        {/* </Route> */}
      </Routes>
    </div>
  );
};

export default AppRoutes;
