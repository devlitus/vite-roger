import { IconSocial } from "../iconSocial/IconSocial";
import "./footer.css";

export const Footer = ({ background }) => {
  return (
    <footer className="footer" style={{ backgroundColor: background }}>
      <div className="footer-content">
        <a href="mailto:rogerllopart@rogerllopart.net" target="_blank">
          <IconSocial
            className="image-social"
            src="/assets/resources/emailClar.png"
            alt="email"
          />
        </a>
        <a href="">
          <IconSocial
            className="image-social"
            src="/assets/resources/linkedinClar.png"
            alt="linkedin"
          />
        </a>
        <a href="">
          <IconSocial
            className="image-social"
            src="/assets/resources/youtubeClar.png"
            alt="youtube"
          />
        </a>
        <a href="">
          <IconSocial
            className="image-social"
            src="/assets/resources/instagramClar.png"
            alt="instagram"
          />
        </a>
        <p className="text-service">Serveis</p>
      </div>
    </footer>
  );
};
