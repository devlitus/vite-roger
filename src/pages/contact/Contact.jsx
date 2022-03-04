import { useTranslation } from 'react-i18next';
import { IconSocial } from '../../components/iconSocial/IconSocial';
import './contact.css';
export const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className='contact-wrapper'>
      <img
        className='logo'
        src='/assets/logo/logo.png'
        alt='logo Roger Llopart'
      />
      <div className='contact-content'>
        <div className='content-icons-social'>
          <a
            href='https://www.linkedin.com/in/roger-llopart-09bb6926/'
            target='_blank'
            rel='noreferrer'
          >
            <IconSocial
              className='icon-linkedin'
              src='/assets/resources/linkedin.png'
            />
          </a>
          <a
            href='https://www.youtube.com/channel/UCudooYnD51UpQA8ayh64JMA'
            target='_blank'
            rel='noreferrer'
          >
            <IconSocial
              className='icon-linkedin'
              src='/assets/resources/youtube.png'
            />
          </a>
          <a
            href='https://www.instagram.com/rogerllopart/'
            target='_blank'
            rel='noreferrer'
          >
            <IconSocial
              className='icon-linkedin'
              src='/assets/resources/instagram.png'
            />
          </a>
        </div>
        <div>
          <div className='animate__animated animate__backInDown content-phone-email'>
            <img
              loading='lazy'
              className='image-phone'
              src='/assets/resources/phone.png'
              alt=''
            />
            <a href='mailto:rogerllopart@rogerllopart.net'>
              <img
                className='image-email'
                src='/assets/resources/emailBlue.png'
                alt=''
              />
            </a>
          </div>
        </div>
        <div className='contact-cite'>
          <p>{t('contact.cite')}</p>
        </div>
      </div>
      <div className='box-point'>
        <img className='iamge-point' src='/assets/resources/point.png' alt='' />
      </div>
    </div>
  );
};
