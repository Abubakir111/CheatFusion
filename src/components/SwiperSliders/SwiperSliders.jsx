import { useRef, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Links from '../../links/Links';

import { Swiper, SwiperSlide } from 'swiper/react';
import ArrowsIcon from '../../acsses/icons/Arrows.svg';
import game1 from '../../acsses/products/1.png';
import game2 from '../../acsses/products/2.png';
import game3 from '../../acsses/products/3.png';
import game4 from '../../acsses/products/4.png';
import game5 from '../../acsses/products/5.png';
import game6 from '../../acsses/products/6.png';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../../index.css';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import style from './SwiperSliders.module.css';

export default function SwiperTest() {
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
  const handleNext = () => {
    return sliderRef.current ? sliderRef.current.swiper.slideNext() : '';
  };

  const handlePrev = () => {
    return sliderRef.current ? sliderRef.current.swiper.slidePrev() : '';
  };

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
          // when window width is >= 640px
        }}
        onInit={() => {
          const swiperInstance = sliderRef.current?.swiper;
          if (swiperInstance) {
            setTotalSlides(swiperInstance.slides.length - swiperInstance.loopedSlides * 2);
          }
        }}
      >
        <SwiperSlide>
          <NavLink to={Links.product}>
            <img className={style.swiperImg} src={game1} />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to={Links.product}>
            <img className={style.swiperImg} src={game2} />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to={Links.product}>
            <img className={style.swiperImg} src={game3} />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to={Links.product}>
            <img className={style.swiperImg} src={game4} />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to={Links.product}>
            <img className={style.swiperImg} src={game3} />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to={Links.product}>
            <img className={style.swiperImg} src={game6} />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to={Links.product}>
            <img className={style.swiperImg} src={game5} />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to={Links.product}>
            <img className={style.swiperImg} src={game2} />
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to={Links.product}>
            <img className={style.swiperImg} src={game3} />
          </NavLink>
        </SwiperSlide>
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
