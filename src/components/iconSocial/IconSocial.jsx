import './iconSocial.css';

export const IconSocial = ({ src, alt }) => {
  return <img loading='lazy' className='social-icon' src={src} alt={alt} />;
};
