import { useTranslation } from 'react-i18next';
import { CardPolaroid } from '../../components/card/CardPolaroid';
import { Footer } from '../../components/footer/Footer';
import './family.css';
export const Family = () => {
  const { t } = useTranslation();
  return (
    <main className='family-wrapper'>
      <header className='family-header'>
        <h1>{t('home.titleSection')}</h1>
        <img
          className='image-rotate'
          src='/assets/resources/arrow-rotate.png'
          alt=''
        />
      </header>
      <div className='family-content'>
        <h1 className=''>{t('family.titleh1')}</h1>
        <p className='text'>{t('family.text1')}</p>
        <p className='text'>{t('family.text2')}</p>
        <p className='text'>{t('family.text3')}</p>
        <h3 className='content-title'>1- {t('family.talks.1.title')}</h3>
        <div className='text-center'>
          <p className='text-center-bold'>{t('family.talks.1.destination')}</p>
          <p className='text-center-blue'>{t('family.talks.1.object')}</p>
          <p className='text-center-normal'>{t('family.talks.1.objective')}</p>
        </div>
      </div>
      <div className='point-polaroid'>
        <img
          loading='lazy'
          className='image-point'
          src='/assets/resources/pointsClaros.png'
          alt=''
        />
        <div className='takes-polaroid-image'>
          <CardPolaroid src='/assets/resources/polaroidWhiteRect.png' />
        </div>
      </div>
      <div className='family-content '>
        <h3 className='content-title'>2- {t('family.talks.2.title')}</h3>
        <div className='text-center content-variant'>
          <p className='text-center-bold'>{t('family.talks.2.destination')}</p>
          <p className='text-center-blue'>{t('family.talks.1.object')}</p>
          <p className='text-center-normal'>{t('family.talks.2.objective')}</p>
          <img
            loading='lazy'
            className='arrow-up-rect'
            src='/assets/resources/arrowUpRect.png'
            alt=''
          />
        </div>
      </div>
      <div className='section-polaroid'>
        <div className='takes-polaroid'>
          <CardPolaroid src='/assets/resources/polaroidClaraRectaImage.png' />
        </div>
        <div className='takes-polaroid-blue'>
          <CardPolaroid src='/assets/resources/polaroidBlueRect.png' />
        </div>
      </div>
      <section className='home-footer'>
        <Footer />
        <img
          loading='lazy'
          className='home-image-footer'
          src='/assets/resources/arrow-rotate.png'
          alt=''
        />
      </section>
    </main>
  );
};
