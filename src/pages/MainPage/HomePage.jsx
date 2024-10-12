import { NavLink } from 'react-router-dom';
import Links from '../../links/Links';
import Header from '../../components/Header/Header';
import SwiperSlides from '../../components/SwiperSliders/SwiperSliders';
import ProductCard from '../../components/ProductCard/ProductCard';
import Footer from '../../components/Footer/Footer';
import style from './HomePage.module.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, productPageId } from '../../redux/store/ProductsSlice';
// временые импорты
// import ProductPage from '../ProductPage/ProductPage';
// import AccauntPage from '../AccauntPage/AccauntPage';

function HomePage() {
  const dispatch = useDispatch();

  // const data = useSelector((state) => state.ProductsSlice.data);
  useEffect(() => {
    dispatch(fetchProducts()); // Запрашиваем продукты при монтировании компонента
  }, [dispatch]);
  const data = useSelector((data) => data.ProductsSlice.data);
  // console.log(data);
  return (
    <>
      {/* <AccauntPage /> */}
      <Header />
      <div className={`${style.sectionPopularGames} `}>
        <h2 className={style.sectionPopularGames_h2}>Popular games</h2>
        <SwiperSlides />
        <div className={`${style.sectionAllGames} `}>
          <h1 className={style.sectionPopularGames_h2}>All games</h1>
          <div className={style.sectionPopularGames__cards}>
            {data &&
              data.map((element) => (
                <NavLink to={Links.product} key={element.pid}>
                  <ProductCard
                    gameImg={element.preview_image}
                    price={element.price.day}
                    status={element.status}
                    title={element.game}
                    hendelClick={() => dispatch(productPageId(element.pid))}
                  />
                </NavLink>
              ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default HomePage;
