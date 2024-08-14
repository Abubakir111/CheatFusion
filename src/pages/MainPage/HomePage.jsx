import Header from '../../components/Header/Header';
import SwiperSlides from '../../components/SwiperSliders/SwiperSliders';
import ProductCard from '../../components/ProductCard/ProductCard';
import gameImg from '../../acsses/products/game1.png';
import Footer from '../../components/Footer/Footer';
import Basket from '../../components/Basket/Basket';
import style from './HomePage.module.css';

function HomePage() {
  return (
    <>
      <Basket />
      <Header />
      <div className={`${style.sectionPopularGames} `}>
        <h2 className={style.sectionPopularGames_h2}>Popular games</h2>
        <SwiperSlides />
        <div className={`${style.sectionAllGames} `}>
          <h2 className={style.sectionPopularGames_h2}>All games</h2>
          <div className={style.sectionPopularGames__cards}>
            <ProductCard gameImg={gameImg} price={10} text1={'lorem'} title={'lorem'} />
            <ProductCard gameImg={gameImg} price={10} text1={'lorem'} title={'lorem'} />
            <ProductCard gameImg={gameImg} price={10} text1={'lorem'} title={'lorem'} />
            <ProductCard gameImg={gameImg} price={10} text1={'lorem'} title={'lorem'} />
            <ProductCard gameImg={gameImg} price={10} text1={'lorem'} title={'lorem'} />
            <ProductCard gameImg={gameImg} price={10} text1={'lorem'} title={'lorem'} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default HomePage;
