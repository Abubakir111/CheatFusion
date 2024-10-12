import detected from '../../../acsses/icons/detected.png';
import underUpdate from '../../../acsses/icons/underUpdate.png';
import undetected from '../../../acsses/icons/undetected.png';
import style from './StatusDetected.module.css';
// /acsses/icons/detected.png

export const StatusDetected = ({ condition }) => {
  if (condition == 1) {
    return (
      <div className={style.undetected}>
        <img src={undetected} alt='Undetected' />
        <span>undetected</span>
      </div>
    );
  } else if (condition == 2) {
    return (
      <div className={style.detected}>
        <img src={detected} alt='detected' />
        <span>detected</span>
      </div>
    );
  } else if (condition == 3) {
    return (
      <div className={style.underUpdate}>
        <img src={underUpdate} alt='under update' />
        <span>under update</span>
      </div>
    );
  }
};
