import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Links from '../../links/Links';
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { productPageId } from '../../redux/store/ProductsSlice';
import ArrowsIcon from '../../acsses/icons/Arrows.svg';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../../index.css';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import style from './SwiperSliders.module.css';

export default function SwiperTest() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Инициализация хука
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  useEffect(() => {
    const swiperInstance = sliderRef.current?.swiper;
    if (swiperInstance) {
      const updateIndex = () => {
        // Используем realIndex для корректного отображения
        setActiveIndex(swiperInstance.realIndex);
      };

      const updateSlidesCount = () => {
        // Количество слайдов без учета дубликатов
        setTotalSlides(swiperInstance.slides.length - swiperInstance.loopedSlides * 2 + 2);
      };
      swiperInstance.on('slideChange', updateIndex);
      swiperInstance.on('init', updateSlidesCount);
      swiperInstance.on('resize', updateSlidesCount);

      // Инициализация слайдера при первом рендере
      if (swiperInstance.initialized) {
        updateSlidesCount();
      }

      return () => {
        swiperInstance.off('slideChange', updateIndex);
        swiperInstance.off('init', updateSlidesCount);
        swiperInstance.off('resize', updateSlidesCount);
      };
    }
  }, []);
  const data = useSelector((state) => state.ProductsSlice.data);
  // console.log(data);
  const handleNext = () => {
    return sliderRef.current ? sliderRef.current.swiper.slideNext() : '';
  };

  const handlePrev = () => {
    return sliderRef.current ? sliderRef.current.swiper.slidePrev() : '';
  };
  let count = 1;
  const newData = data.map((element) => ({
    ...element,
    count: count++
  }));

  return (
    <>
      <Swiper
        ref={sliderRef}
        className={`mySwiper ${style.mySwiper}`}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        scrollbar={{ draggable: true }}
        loop={true}
        coverflowEffect={{
          rotate: 30,
          stretch: 162,
          depth: 300,
          modifier: 1,
          slideShadows: true
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        initialSlide={6}
        breakpoints={{
          768: {
            coverflowEffect: {
              rotate: 30,
              stretch: 162,
              depth: 300,
              modifier: 1,
              slideShadows: true
            }
          },
          260: {
            coverflowEffect: {
              rotate: 30,
              stretch: 30,
              depth: 100,
              modifier: 1,
              slideShadows: true
            }
          }
        }}
        onInit={() => {
          const swiperInstance = sliderRef.current?.swiper;
          if (swiperInstance) {
            setTotalSlides(swiperInstance.slides.length - swiperInstance.loopedSlides * 2);
          }
        }}
      >
        {newData.map((data) => (
          <SwiperSlide
            key={data.pid}
            onClick={() => {
              dispatch(productPageId(data.pid));
              navigate(Links.product); // Программный переход на страницу
            }}
          >
            {/* <h2>{data.count}</h2> */}
            <img className={style.swiperImg} src={data.preview_image} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={style.swiperButtonContianer}>
        <div className={style.swiperButtonInner}>
          <img
            onClick={handlePrev}
            className={`${style.arrowsLeft} ${style.arrows}`}
            src={ArrowsIcon}
            alt='ArrowsIcon'
          />
          <div className={style.swiperPagination}>
            <div className={style.customPagination}>
              {Array.from({ length: totalSlides }, (_, index) => (
                <span
                  key={index}
                  className={`${style.paginationBullett} ${index === activeIndex ? style.active : ''}`}
                ></span>
              ))}
            </div>
          </div>
          <img className={style.arrows} onClick={handleNext} src={ArrowsIcon} alt='ArrowsIcon' />
        </div>
      </div>
    </>
  );
}
