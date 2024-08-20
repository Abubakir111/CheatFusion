import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FagDownload from '../../components/FagDownload/FagDownload';
import style from './FagPage.module.css';
import vstudio from '../../acsses/FagPageImg/vstudio.png';
import directx from '../../acsses/FagPageImg/directx.png';
import net from '../../acsses/FagPageImg/net.png';
import nvidia from '../../acsses/FagPageImg/nvidia.png';
import amd from '../../acsses/FagPageImg/amd.png';
import driverPag from '../../acsses/FagPageImg/driverPag.png';

export default function FagPage() {
  return (
    <div>
      <Header />
      <div className={style.container}>
        <div className={style.fag}>
          <h2>FAQ</h2>
          <div className={style.fag__files}>
            <div className={style.fag__files1}>
              <FagDownload img={vstudio} title={'Microsoft Visual C++ 2008-2022'} />
              <FagDownload img={directx} title={'DirectX 11/12'} />
              <FagDownload img={net} title={'Microsoft Net Framework 4.8'} />
            </div>
            <div className={style.fag__files1}>
              <FagDownload img={nvidia} title={'Nvidia'} />
              <FagDownload img={amd} title={'AMD'} />
              <FagDownload img={driverPag} title={'DriverPackSolution'} />
            </div>
          </div>
        </div>
        <div className={style.about}>
          <h2>About CheatFusion</h2>
          <div className={style.about__inner}>
            <div className={style.easy}>
              <div className={style.title}>Easy to set up</div>
              <span>90%</span>
            </div>
            <div className={`${style.easy} ${style.fast}`}>
              <div className={style.title}>Fast updates</div>
              <span>85%</span>
            </div>
            <div className={`${style.easy} ${style.good}`}>
              <div className={style.title}>Good support</div>
              <span>80%</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
