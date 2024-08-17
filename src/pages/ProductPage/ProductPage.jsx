import { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProductBtn from '../../Ui/ProductBtn/ProductBtn';
import Button from '../../Ui/Button/Button';
import PriceButton from '../../Ui/PriceButton/PriceButton';
import SystemBlock from '../../Ui/SystemBlock/SystemBlock';
import BlockCharacteristics from '../../components/BlockCharacteristics/BlockCharacteristics';
import cross from '../../acsses/icons/crosses.svg';
import crossOrange from '../../acsses/icons/corssesOrange.svg';
import style from './ProductPage.module.css';
import game1 from '../../acsses/ProductPagesImg/game1.png';
import game2 from '../../acsses/ProductPagesImg/game2.jpeg';
import game3 from '../../acsses/ProductPagesImg/game3.png';
import game4 from '../../acsses/ProductPagesImg/game4.jpeg';
import game5 from '../../acsses/ProductPagesImg/game5.png';
import btnIcon from '../../acsses/icons/ProductBtn.svg';
import icon1 from '../../acsses/ProductPagesImg/icon1.svg';
import icon2 from '../../acsses/ProductPagesImg/icon.svg';
import icon3 from '../../acsses/ProductPagesImg/al.svg';
import icon4 from '../../acsses/ProductPagesImg/intel.svg';
import icon5 from '../../acsses/ProductPagesImg/luboi.svg';
import icon6 from '../../acsses/ProductPagesImg/usb.svg';

const ProductPage = () => {
  const sliderImg = [
    { id: 1, img: game1 },
    { id: 2, img: game2 },
    { id: 3, img: game3 },
    { id: 4, img: game4 },
    { id: 5, img: game5 }
  ];
  const [activImg, setActivImg] = useState(1);
  const changePicture = (id) => {
    setActivImg(id);
    console.log(id);
  };
  const characteristics = [
    ['Bounding Box', 'Box Outline', 'Health', 'Skeleton', 'Maximum Distance', 'Player Info'],
    ['Vehicle', 'Box Outline'],
    ['Coming soon']
  ];
  return (
    <>
      <Header />
      <div className={`${style.product__wrapp} containerProduct`}>
        <h2>Escape from Tarkov</h2>
        <div className={style.product__inner}>
          <div className={style.product__slider}>
            {/* <div className={style.product__overlay}>1/5</div> */}
            {sliderImg.map((el) =>
              el.id == activImg ? (
                <div
                  key={el.id}
                  className={style.product__slider_container}
                  style={{
                    '--pseudo-content': `"${activImg}"`,
                    '--length': `"${sliderImg.length}"`
                  }}
                >
                  <img className={style.product__main_picture} src={el.img} alt='gameImg' />
                </div>
              ) : (
                ''
              )
            )}

            <div className={style.product__game_slider}>
              {sliderImg.map((el) => (
                <img
                  src={el.img}
                  alt='gameImg'
                  className={`${el.id == activImg ? style.imgActive : style.noActive} `}
                  key={el.id}
                  onClick={() => changePicture(el.id)}
                />
              ))}
            </div>
          </div>
          <div className={style.product__info}>
            <div>
              <h5>EFT COVCHEG</h5>
              <div className={style.product__info_btns}>
                <ProductBtn icon={btnIcon} bg={'#55CF94'} co={'#2B2B2B'} text={'Undetected'} />
                <ProductBtn co={' rgba(255, 255, 255, 0.40)'} text={'WH'} />
                <ProductBtn co={' rgba(255, 255, 255, 0.40)'} text={'AIM'} />
                <ProductBtn co={' rgba(255, 255, 255, 0.40)'} text={'MIS'} />
                <ProductBtn co={' rgba(255, 255, 255, 0.40)'} text={'Radar'} />
                <ProductBtn co={' rgba(255, 255, 255, 0.40)'} text={'LOOT'} />
              </div>
            </div>
            <div className={style.product__container}>
              <div className={style.product__info_column}>
                <SystemBlock icon={icon1} title={'Игровой клиент:'} text={'BSG Launcher'} />
                <SystemBlock icon={icon2} title={'Система:'} text={'ОС Windows: 10/11 x64 2004 и выше'} />
                <SystemBlock icon={icon3} title={'Встроенный Spoofer:'} text={'Встроенный'} />
              </div>
              <div className={style.product__info_column}>
                <SystemBlock icon={icon4} title={'Процессор:'} text={'Intel'} />
                <SystemBlock icon={icon5} title={'Режим окна:'} text={'BSG Launcher'} />
                <SystemBlock icon={icon6} title={'Игровой клиент:'} text={'Не требуется'} />
              </div>
            </div>
            <div className={style.product__button_container}>
              <PriceButton title={'1 day'} price={'$4'} bg={'#FFFFFF'} cot={'#3B3B3B'} />
              <PriceButton title={'1 week'} price={'$10'} bg={'#535353'} />
              <PriceButton title={'1 month'} price={'$30'} bg={'#535353'} />
            </div>
            <div className={style.addBtn}>
              <Button text={'ADD TO CART'} fw={'400'} />
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.BlockCharacteristics} container `}>
        <BlockCharacteristics icon={cross} title={'Player ESP Features:'} text={characteristics[0]} />
        <BlockCharacteristics icon={cross} title={'Object ESP Features:'} text={characteristics[1]} />
        <BlockCharacteristics icon={crossOrange} title={'Aimbot/Weapon Features:'} text={characteristics[2]} />
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
