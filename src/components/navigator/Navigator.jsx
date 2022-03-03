import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'animate.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import i18n from '../../i18n';
import './navigator.css';

export const Navigation = () => {
  const [isHidden, setHidden] = useState(false);
  // const { isvisibility, setvisibility } = useState(false);
  const { language, changeLanguage } = i18n;
  const { t } = useTranslation();
  const handleChangeLanguage = () => {
    changeLanguage(language === 'ca' ? 'es' : 'ca');
    setHidden(false);
  };
  const handleHidden = () => {
    // setvisibility(true);
    setHidden(true);
  };
  return (
    <nav className='navigator'>
      <ul className='navigator-items'>
        <li className='navigator-item'>
          <Link className='navigator-link' to='/'>
            {t('home.pathUrl')}
          </Link>
        </li>
        <li className='navigator-item'>
          <Link className='navigator-link' to='/about'>
            {t('about.pathUrl')}
          </Link>
        </li>
        <li className='navigator-item'>
          <Link className='navigator-link' to='/'>
            Campus
          </Link>
        </li>
        <li className='navigator-item'>
          <Link className='navigator-link' to='/'>
            Blog
          </Link>
        </li>
        <li className='navigator-item'>
          <Link className='navigator-link' to='/contact'>
            {t('contact.pathUrl')}
          </Link>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faGlobe}
            className='navigator-globe'
            onClick={handleHidden}
          />
          <div
            className={`navigator-select  animate__animated ${
              isHidden ? 'animate__fadeInDown' : 'navigator-select-hidden'
            }`}
          >
            <button className='navigator-btn' onClick={handleChangeLanguage}>
              {language}
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
};
// navigator-select-hidden animate__animated animate__fadeInDown
