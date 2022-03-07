import { useTranslation } from 'react-i18next';
import { Footer } from '../../components/footer/Footer';
import './about.css';
export const About = () => {
  const { t } = useTranslation();
  return (
    <div className='about-wrapper'>
      <img className='logo' src='/assets/logo/logo.png' alt='' />
      <div className='about-content'>
        <div className='about-avatar'>
          <img className='image-avatar' src='/assets/images/roger.jpg' alt='' />
          <img
            className='image-arrow-circle'
            src='/assets/resources/arrowCircle.png'
            alt=''
          />
        </div>
        <p className='about-cite'>
          {t('about.cite')}
          <br />
          <span className='aboute-auhtor'>{t('about.citeAuthor')}</span>
        </p>
      </div>
      <div className='curriculum'>
        <p className='curriculum-text'>{t('about.curriculum.parraf1')}</p>
        <p className='curriculum-text text1'>{t('about.curriculum.parraf2')}</p>
        <p className='curriculum-text text2'>{t('about.curriculum.parraf3')}</p>
        <div className='image-arrowDown'>
          <img src='/assets/resources/arrowDownRect.png' alt='' />
        </div>
        <div className='image-bonbilla'>
          <img src='/assets/resources/bombilla.png' alt='' />
        </div>
      </div>
      <div>
        <img
          className='about-iamge-point'
          src='/assets/resources/pointBrow.png'
          alt=''
        />
      </div>
      <div className='about-text'>
        <p>{t('about.parrafBLue')}</p>
      </div>
      <div className='cite-rocket'>
        <div>
          <p className='about-cite cite-alter'>
            {t('about.cite')}
            <br />
            <span className='aboute-auhtor'>{t('about.citeAuthor')}</span>
          </p>
        </div>
        <img
          className='image-rocket'
          src='/assets/resources/rocket.png'
          alt=''
        />
      </div>
      <div className='about-thought'>
        <h1 className='about-title'>{t('about.title')}</h1>
        <p>{t('about.inalienable.parraf')}</p>
        <ol className='about-list'>
          <li className='about-list-item'>
            <p className='list-title'>{t('about.list.item1.title')}</p>
            <p className='list-item-content'>{t('about.list.item1.content')}</p>
          </li>
          <li className='about-list-item'>
            <p className='list-title'>{t('about.list.item2.title')}</p>
            <p className='list-item-content'>{t('about.list.item2.content')}</p>
          </li>
          <li className='about-list-item'>
            <p className='list-title'>{t('about.list.item3.title')}</p>
            <p className='list-item-content'>{t('about.list.item3.content')}</p>
          </li>
          <li className='about-list-item'>
            <p className='list-title'>{t('about.list.item4.title')}</p>
            <p className='list-item-content'>{t('about.list.item4.content')}</p>
          </li>
          <li className='about-list-item'>
            <p className='list-title'>{t('about.list.item5.title')}</p>
            <p className='list-item-content'>{t('about.list.item5.content')}</p>
          </li>
          <li className='about-list-item'>
            <p className='list-title'>{t('about.list.item6.title')}</p>
            <p className='list-item-content'>{t('about.list.item6.content')}</p>
          </li>
        </ol>
      </div>
      <div className='about-prini'>
        <div className='about-prini-arrowUp'>
          <p className='principi-title'>{t('about.principis.title')}</p>
          <p className='text-valor'>{t('about.principis.esfros')}</p>
          <p className='text-valor'>{t('about.principis.generositat')}</p>
          <p className='text-valor'>{t('about.principis.humilitat')}</p>
          <p className='text-valor'>{t('about.principis.perseverança')}</p>
          <p className='text-valor'>{t('about.principis.estima')}</p>
          <p className='text-valor'>{t('about.principis.atreviment')}</p>
          <p className='text-valor'>{t('about.principis.creativitat')}</p>
          <p className='text-valor'>{t('about.principis.passion')}</p>
          <p className='text-valor'>{t('about.principis.curiositat')}</p>
          <p className='text-valor'>{t('about.principis.paradoxa')}</p>
          <p className='text-valor'>{t('about.principis.humor')}</p>
          <p className='text-valor'>{t('about.principis.canvi')}</p>
        </div>
        <img
          loading='lazy'
          className='image-arrowUp'
          src='/assets/resources/arrowDownRect.png'
          alt=''
        />
      </div>
      <Footer />
    </div>
  );
};
