import { useTranslation } from 'react-i18next';
import { CardPolaroid } from '../../components/card/CardPolaroid';
import { Footer } from '../../components/footer/Footer';
import './bissnes.css';
export const Bissnes = () => {
  const { t } = useTranslation();
  return (
    <main className='family-wrapper'>
      <header className='bissnes-header'>
        <h1>{t('home.titleSection')}</h1>
        <img
          className='image-rotate'
          src='/assets/resources/arrow-rotate.png'
          alt=''
        />
      </header>
      <div className='bissnes-content'>
        <h1 className=''>{t('bissnes.titleh1')}</h1>
        <p className='text'>{t('bissnes.text1')}</p>
        <h3 className='bissnes-content-title'>
          1- {t('bissnes.talks.1.title')}
        </h3>
        <div className='text-center content-variant'>
          <p className='text-center-bold'>{t('bissnes.talks.1.destination')}</p>
          <p className='text-center-blue'>{t('bissnes.talks.1.object')}</p>
          <p className='text-center-normal'>{t('bissnes.talks.1.objective')}</p>
          <img
            className='arrow-down'
            src='/assets/resources/arrowDown.png'
            alt=''
          />
          <div className='bissnes-polaroid-blue'>
            <CardPolaroid src='/assets/resources/polaroidBlueRect.png' />
          </div>
        </div>
      </div>

      <div className='bissnes-content '>
        <h3 className='bissnes-content-title'>
          2- {t('bissnes.talks.2.title')}
        </h3>
        <div className='text-center '>
          <p className='text-center-bold'>{t('bissnes.talks.2.destination')}</p>
          <p className='text-center-blue'>{t('bissnes.talks.1.object')}</p>
          <p className='text-center-normal'>{t('bissnes.talks.2.objective')}</p>
        </div>
      </div>
      <div className='bissnes-section-polaroid'>
        <div className='bissnes-polaroid'>
          <CardPolaroid src='/assets/resources/polaroidClaraRectaImage.png' />
        </div>
        <CardPolaroid src='/assets/resources/polaroidWhiteRect.png' />
      </div>
      <div>
        <img
          className='image-point'
          src='/assets/resources/pointsClaros.png'
          alt=''
        />
      </div>
      <section className='home-footer'>
        <Footer background='#50b9d0' />
        <img
          className='home-image-footer'
          src='/assets/resources/arrow-rotate.png'
          alt=''
        />
      </section>
    </main>
  );
};
