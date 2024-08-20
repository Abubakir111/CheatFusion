import { NavLink } from 'react-router-dom';
import Links from '../../links/Links';
import Header from '../../components/Header/Header';
import SwiperSlides from '../../components/SwiperSliders/SwiperSliders';
import ProductCard from '../../components/ProductCard/ProductCard';
import Footer from '../../components/Footer/Footer';
import style from './HomePage.module.css';
import gameImg1 from '../../acsses/products/1.png';
import gameImg2 from '../../acsses/products/2.png';
import gameImg3 from '../../acsses/products/3.png';
import gameImg4 from '../../acsses/products/4.png';
import gameImg5 from '../../acsses/products/5.png';
import gameImg6 from '../../acsses/products/6.png';

// временые импорты
// import ProductPage from '../ProductPage/ProductPage';

function HomePage() {
  return (
    <>
      {/* <Basket /> */}
      <Header />
      <div className={`${style.sectionPopularGames} `}>
        <h2 className={style.sectionPopularGames_h2}>Popular games</h2>
        <SwiperSlides />
        <div className={`${style.sectionAllGames} `}>
          <h2 className={style.sectionPopularGames_h2}>All games</h2>
          <div className={style.sectionPopularGames__cards}>
            <NavLink to={Links.product}>
              <ProductCard gameImg={gameImg1} price={10} text1={'lorem'} title={'lorem'} />
            </NavLink>
            <NavLink to={Links.product}>
              <ProductCard gameImg={gameImg4} price={10} text1={'lorem'} title={'lorem'} />
            </NavLink>
            <NavLink to={Links.product}>
              <ProductCard gameImg={gameImg3} price={10} text1={'lorem'} title={'lorem'} />
            </NavLink>
            <NavLink to={Links.product}>
              <ProductCard gameImg={gameImg2} price={10} text1={'lorem'} title={'lorem'} />
            </NavLink>
            <NavLink to={Links.product}>
              <ProductCard gameImg={gameImg5} price={10} text1={'lorem'} title={'lorem'} />
            </NavLink>
            <NavLink to={Links.product}>
              <ProductCard gameImg={gameImg6} price={10} text1={'lorem'} title={'lorem'} />
            </NavLink>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default HomePage;
