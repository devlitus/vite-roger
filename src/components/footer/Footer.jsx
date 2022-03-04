import { useTranslation } from 'react-i18next';
import { IconSocial } from '../iconSocial/IconSocial';
import './footer.css';

export const Footer = ({ background }) => {
  const { t } = useTranslation();
  return (
    <footer className='footer' style={{ backgroundColor: background }}>
      <div className='footer-content'>
        <a href='mailto:rogerllopart@rogerllopart.net' target='_blank' rel='noreferrer'>
          <IconSocial
            src='/assets/resources/emailClar.png'
            alt='email'
          />
        </a>
        <a href=''>
          <IconSocial
            src='/assets/resources/linkedinClar.png'
            alt='linkedin'
          />
        </a>
        <a href=''>
          <IconSocial
            src='/assets/resources/youtubeClar.png'
            alt='youtube'
          />
        </a>
        <a href=''>
          <IconSocial
            src='/assets/resources/instagramClar.png'
            alt='instagram'
          />
        </a>
        <div className='footer-title'>
          <p className='text-service'>{t('home.titleSection')}</p>
        </div>
      </div>
    </footer>
  );
};
