import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StatusDetected } from '../../components/Popupcomponents/SatusDetected/StatusDetected';

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
// import btnIcon from '../../acsses/icons/ProductBtn.svg';
import icon1 from '../../acsses/ProductPagesImg/icon1.svg';
import icon2 from '../../acsses/ProductPagesImg/icon.svg';
import icon3 from '../../acsses/ProductPagesImg/al.svg';
import icon4 from '../../acsses/ProductPagesImg/intel.svg';
import icon5 from '../../acsses/ProductPagesImg/luboi.svg';
import icon6 from '../../acsses/ProductPagesImg/usb.svg';
import { ProductStore } from '../../redux/store/ProductsSlice';
import { openBasketCard } from '../../redux/PopUpSlice';
import { nanoid } from 'nanoid';
const ProductPage = () => {
  const dispatch = useDispatch();
  const localActivProduct = JSON.parse(localStorage.getItem('ActiveProduct'));

  let data = [];

  if (localActivProduct.length !== 0) {
    data = localActivProduct;
  }

  // console.log(data);

  let TestSideimg = [];

  if (data) {
    let idCount = 0;
    TestSideimg = data[0].image.map((el) => {
      idCount++;
      return { id: idCount, img: el };
    });
  }

  const [activImg, setActivImg] = useState(1);
  const changePicture = (id) => {
    setActivImg(id);
  };
  // Выбор тарифа 1  день  1 менся 1 год
  const initialButtons = [
    {
      title: '1 day',
      basePrice: data[0].price.day,
      price: data[0].price.day,
      id: nanoid(),
      active: false,
      img: data[0].image[0],
      game: data[0].game,
      name: data[0].name,
      count: 1,
      pid: data[0].pid
    },
    {
      title: '1 week',
      basePrice: data[0].price.week,
      price: data[0].price.week,
      id: nanoid(),
      active: false,
      img: data[0].image[0],
      game: data[0].game,
      name: data[0].name,
      count: 1,
      pid: data[0].pid
    },
    {
      title: '1 month',
      basePrice: data[0].price.month,
      price: data[0].price.month,
      id: nanoid(),
      active: false,
      img: data[0].image[0],
      game: data[0].game,
      name: data[0].name,
      count: 1,
      pid: data[0].pid
    }
  ];
  const [buttons, setButtons] = useState(initialButtons);
  const [activeButtonId, setActiveButtonId] = useState(null);

  const handleClick = (id) => {
    setActiveButtonId(id); // Обновляем ID активной кнопки
    const updatedButtons = buttons.map((element) => ({
      ...element,
      active: element.id === id // Устанавливаем active в true для нажатой кнопки
    }));
    setButtons(updatedButtons); // Обновляем состояние кнопок
  };
  const AddToCartClick = () => {
    buttons.map((elemet) => {
      if (elemet.id == activeButtonId) {
        dispatch(ProductStore(elemet));
      }
    });
    dispatch(openBasketCard(true));
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
        <h2>{data[0].game}</h2>
        <div className={style.product__inner}>
          <div className={style.product__slider}>
            {/* <div className={style.product__overlay}>1/5</div> */}
            {TestSideimg &&
              TestSideimg.map((el) =>
                el.id == activImg ? (
                  <div
                    key={el.id}
                    className={style.product__slider_container}
                    style={{
                      '--pseudo-content': `"${activImg}"`,
                      '--length': `"${TestSideimg.length}"`
                    }}
                  >
                    <img className={style.product__main_picture} src={el.img} alt='gameImg' />
                  </div>
                ) : (
                  ''
                )
              )}

            <div className={style.product__game_slider}>
              {TestSideimg &&
                TestSideimg.map((el) => (
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
              <h5>{data[0].name}</h5>
              <div className={style.product__info_btns}>
                <StatusDetected condition={data[0].status} />

                {data &&
                  data[0].flags.map((element, index) => (
                    <ProductBtn co={' rgba(255, 255, 255, 0.40)'} text={element} key={index} />
                  ))}
              </div>
            </div>
            <div className={style.product__container}>
              <div className={style.product__info_column}>
                <SystemBlock icon={icon1} title={'Game client:'} text={data[0].client} />
                <SystemBlock icon={icon2} title={'System:'} text={data[0].system} />
                <SystemBlock icon={icon3} title={'Spoofer:'} text={data[0].spoofer} />
              </div>
              <div className={style.product__info_column}>
                <SystemBlock icon={icon4} title={'Processor:'} text={data[0].proc} />
                <SystemBlock icon={icon5} title={'Window mode:'} text={data[0].client} />

                <SystemBlock icon={icon6} title={'USB-flesh:'} text={data[0].usb_flash} />
              </div>
            </div>

            <div className={style.product__button_container}>
              {buttons.map((button) => (
                <PriceButton
                  key={button.id}
                  title={button.title}
                  price={`$ ${button.price}`}
                  active={activeButtonId === button.id} // Активный стиль для выбранной кнопки
                  id={button.id}
                  Click={() => handleClick(button.id)}
                />
              ))}
            </div>
            <div className={style.addBtn}>
              <Button text={'ADD TO CART'} fw={'400'} Clikc={() => AddToCartClick()} />
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
