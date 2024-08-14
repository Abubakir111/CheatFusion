import Links from './Links';
import NoRouting from '../pages/NoRouting/NouRouting';
import HomePage from '../pages/MainPage/HomePage';

const publicRoutes = [
  {
    path: Links.Home,
    element: <HomePage />
  },
  {
    path: Links.NoRouting,
    element: <NoRouting />
  }
];
export default publicRoutes;
