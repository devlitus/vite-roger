import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'animate.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import i18n from '../../i18n';
import './sidebar.css';

export const Sidebar = ({ isSidebarOpen, handlerClickOpen }) => {
  const { language, changeLanguage } = i18n;
  const { t } = useTranslation();
  const handleChangeLanguage = () => {
    changeLanguage(language === 'ca' ? 'es' : 'ca');
  };
  return (
    <nav
      className={`sidebar animate__animated 
    ${isSidebarOpen ? 'animate__fadeInRight' : 'animate__fadeOutRight'}
    `}
    >
      <FontAwesomeIcon
        className='close-icon'
        icon={faTimes}
        onClick={handlerClickOpen}
      />
      <ul className='sidebar-items'>
        <li className='sidebar-item'>
          <Link className='sidebar-link' to='/' onClick={handlerClickOpen}>
            {t('home.pathUrl')}
          </Link>
        </li>
        <li className='sidebar-item'>
          <Link className='sidebar-link' to='/about' onClick={handlerClickOpen}>
            {t('about.pathUrl')}
          </Link>
        </li>
        <li className='sidebar-item'>
          <Link className='sidebar-link' to='/'>
            Campus
          </Link>
        </li>
        <li className='sidebar-item'>
          <Link className='sidebar-link' to='/'>
            Blog
          </Link>
        </li>
        <li className='sidebar-item'>
          <Link
            className='sidebar-link'
            to='/contact'
            onClick={handlerClickOpen}
          >
            {t('contact.pathUrl')}
          </Link>
        </li>
        <li>
          <button className='sidebar-btn' onClick={handleChangeLanguage}>
            {language}
          </button>
        </li>
      </ul>
    </nav>
  );
};
