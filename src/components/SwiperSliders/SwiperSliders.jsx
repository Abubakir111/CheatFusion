import { useRef, useEffect, useState } from 'react';
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

  useEffect(() => {
    const swiper = sliderRef.current.swiper;

    const updateActiveIndex = () => {
      setActiveIndex(swiper.activeIndex);
    };

    // Обновите активный слайд при изменении слайда
    swiper.on('slideChange', updateActiveIndex);

    // Очистите слушатели событий при размонтировании
    return () => {
      swiper.off('slideChange', updateActiveIndex);
    };
  }, []);

  const handlePrev = () => {
    return sliderRef.current ? sliderRef.current.swiper.slidePrev() : '';
  };

  const handleNext = () => {
    return sliderRef.current ? sliderRef.current.swiper.slideNext() : '';
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
      >
        <SwiperSlide>
          <img className={style.swiperImg} src={game1} />
        </SwiperSlide>
        <SwiperSlide>
          <img className={style.swiperImg} src={game2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className={style.swiperImg} src={game3} />
        </SwiperSlide>
        <SwiperSlide>
          <img className={style.swiperImg} src={game4} />
        </SwiperSlide>
        <SwiperSlide>
          <img className={style.swiperImg} src={game3} />
        </SwiperSlide>
        <SwiperSlide>
          <img className={style.swiperImg} src={game6} />
        </SwiperSlide>
        <SwiperSlide>
          <img className={style.swiperImg} src={game5} />
        </SwiperSlide>
        <SwiperSlide>
          <img className={style.swiperImg} src={game2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className={style.swiperImg} src={game3} />
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
              {[...Array(sliderRef.current?.swiper.slides.length || 0)].map((_, index) => (
                <span
                  key={index}
                  className={`${style.paginationBullett} ${activeIndex === index ? style.active : ''}`}
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
