import "./footer.css";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img
          className="image-social"
          src="/assets/resources/emailClar.png"
          alt="email"
        />
        <img
          className="image-social"
          src="/assets/resources/linkedinClar.png"
          alt="linkedin"
        />
        <img
          className="image-social"
          src="/assets/resources/youtubeClar.png"
          alt="youtube"
        />
        <img
          className="image-social"
          src="/assets/resources/instagramClar.png"
          alt="instagram"
        />
        <p className="text-service">Serveis</p>
      </div>
    </footer>
  );
};
