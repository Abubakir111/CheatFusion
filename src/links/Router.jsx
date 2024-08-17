import Links from './Links';
import NouRouting from '../pages/NoRouting/NouRouting';
import HomePage from '../pages/MainPage/HomePage';
import ProductPage from '../pages/ProductPage/ProductPage';

const publicRoutes = [
  {
    path: Links.Home,
    element: <HomePage />
  },
  {
    path: Links.NouRoutings,
    element: <NouRouting />
  },
  {
    path: Links.product,
    element: <ProductPage />
  }
];
export default publicRoutes;
