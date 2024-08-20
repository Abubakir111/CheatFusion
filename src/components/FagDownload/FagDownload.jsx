import style from './FagDownload.module.css';
import Button from '../../Ui/Button/Button';

export default function FagDownload({ img, title }) {
  return (
    <div>
      <div className={style.fag__file}>
        <img className={style.fag__img} src={img} alt='img' />
        <div className={style.fag__text_container}>
          <span>Package with components:</span>
          <span>{title}</span>
        </div>
        <div>
          <Button text={'Download'} />
        </div>
      </div>
    </div>
  );
}
