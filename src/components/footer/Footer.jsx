import { IconSocial } from "../iconSocial/IconSocial";
import "./footer.css";

export const Footer = ({ background }) => {
  return (
    <footer className="footer" style={{ backgroundColor: background }}>
      <div className="footer-content">
        <IconSocial
          className="image-social"
          src="/assets/resources/emailClar.png"
          alt="email"
        />
        <IconSocial
          className="image-social"
          src="/assets/resources/linkedinClar.png"
          alt="linkedin"
        />
        <IconSocial
          className="image-social"
          src="/assets/resources/youtubeClar.png"
          alt="youtube"
        />
        <IconSocial
          className="image-social"
          src="/assets/resources/instagramClar.png"
          alt="instagram"
        />
        <p className="text-service">Serveis</p>
      </div>
    </footer>
  );
};
