import { Swiper, SwiperSlide } from 'swiper/react';
import ArrowsIcon from '../../acsses/icons/Arrows.svg';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../../index.css';
import style from './SwiperSliders.module.css';
import { Pagination, Navigation } from 'swiper/modules';

export default function SwiperTest() {
  return (
    <>
      <Swiper
        className='mySwiper'
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 250,
          modifier: 1,
          slideShadows: true
        }}
        modules={[Pagination, Navigation]}
        initialSlide={6}
      >
        <SwiperSlide>
          <img className={style.swiperImg} src='https://swiperjs.com/demos/images/nature-1.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img className={style.swiperImg} src='https://swiperjs.com/demos/images/nature-2.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img className={style.swiperImg} src='https://swiperjs.com/demos/images/nature-3.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img className={style.swiperImg} src='https://swiperjs.com/demos/images/nature-4.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img className={style.swiperImg} src='https://swiperjs.com/demos/images/nature-5.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img className={style.swiperImg} src='https://swiperjs.com/demos/images/nature-6.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img className={style.swiperImg} src='https://swiperjs.com/demos/images/nature-7.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img className={style.swiperImg} src='https://swiperjs.com/demos/images/nature-8.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img className={style.swiperImg} src='https://swiperjs.com/demos/images/nature-9.jpg' />
        </SwiperSlide>
      </Swiper>
      <div className={style.swiperButtonContianer}>
        <div className={style.swiperButtonInner}>
          <img className={style.arrowsLeft} src={ArrowsIcon} alt='ArrowsIcon' />
          <div className={style.swiperPagination}>sds</div>
          <img src={ArrowsIcon} alt='ArrowsIcon' />
        </div>
      </div>
    </>
  );
}
