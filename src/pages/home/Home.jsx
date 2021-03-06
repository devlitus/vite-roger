import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { CardPolaroid } from '../../components/card/CardPolaroid';
import { Footer } from '../../components/footer/Footer';
import { ImagePatern } from '../../components/paterns/patern';
import { SectionResource } from '../../components/sectionResource/SectionResource';
import './home.css';

export const Home = () => {
  const { t } = useTranslation();
  return (
    <main className='home-wrapper'>
      <header className='home-header'>
        <img
          loading='lazy'
          className='home-image'
          src='/assets/images/bg/bg-header.png'
          alt='Roger Llopart'
        />
        <p className='home-cite'>
          {t('home.cite')}.
          <br /> El Petit Princep
        </p>
      </header>
      <div className='home-section'>
        <img
          loading='lazy'
          className='home-arrow'
          src='/assets/resources/arrow-rotate.png'
          alt='arrow'
        />
        <p className='home-section-title'>{t('home.titleSection')}</p>
      </div>
      <div className='home-content'>
        <p className='home-content-text'>{t('home.textSection')}</p>
      </div>
      <div className='home-polaroid'>
        <div className='polaroidClar'>
          <Link to='/family'>
            <CardPolaroid
              src='/assets/resources/polaroidClaraRectaImage.png'
              title={t('home.title-services-talks')}
            />
          </Link>
        </div>
        <div className='polaroidBlue'>
          <Link to='/bissnes'>
            <CardPolaroid
              src='/assets/resources/polaroidBlueRect.png'
              title={t('home.title-services-education')}
            />
          </Link>
        </div>
        <div className='polaroidWhite'>
          <Link to='/training'>
            <CardPolaroid
              src='/assets/resources/polaroidWhiteRect.png'
              title={t('home.title-services-bissnes')}
            />
          </Link>
        </div>
      </div>
      <p className='home-title'>{t('home.title-1')}</p>
      <SectionResource />
      <p className='home-title alter'>{t('home.title-2')}</p>
      <div className='home-paterns'>
        <ImagePatern
          className='image-patern'
          src='/assets/patners/lliureSport.png'
          alt='lliure Sport'
        />
        <ImagePatern
          className='image-patern'
          src='/assets/patners/cornella.jpg'
          alt='Ajuntament de Cornella'
        />
        <ImagePatern
          className='image-patern'
          src='/assets/patners/carol.jpg'
          alt='fundaci?? escolta Josep Carol'
        />
        <ImagePatern
          className='image-patern'
          src='/assets/patners/jaume.png'
          alt='centre educatiu Jaume Viladoms'
        />
        <ImagePatern
          className='image-patern'
          src='/assets/patners/andorra.png'
          alt='Govern de Andorra'
        />
        <ImagePatern
          className='image-patern'
          src='/assets/patners/doctor.png'
          alt='col??legi oficial de docotrs'
        />
        <ImagePatern
          className='image-patern'
          src='/assets/patners/fundesplai.jpg'
          alt='Fundesplai'
        />
        <ImagePatern
          className='image-patern'
          src='/assets/patners/radio.png'
          alt='radio 4'
        />
        <ImagePatern
          className='image-patern'
          src='/assets/patners/fapac.png'
          alt='FAPAC'
        />
      </div>
      <Footer />
    </main>
  );
};
