import image from "../../assets/images/image17.png";
// import image from "../../assets/images/header-prueba.png";
import section from "../../assets/images/section.png";
import learning from "../../assets/images/learning.jpg";
import team from "../../assets/images/team.jpg";
import "./home.css";
import { useTranslation } from "react-i18next";
export const Home = () => {
  const { t } = useTranslation();
  return (
    <main className="home-wrapper">
      <header className="home-header">
        <img className="home-image" src={image} alt="" />
      </header>
      <section className="home-section">
        <img className="home-image-section" src={section} alt="" />
        <p className="home-section-title">Serveis</p>
      </section>
      <div className="home-content">
        <p>{t("home.paragraf1")}</p>
        <p>{t("home.paragraf2")}</p>
        <p>{t("home.paragraf3")}</p>
        <div className="home-service">
          <div className="home-service-item">
            <img className="home-service-image" src={team} alt="tallers" />
            <p className="home-service-title">Xarrades i Tallers</p>
          </div>
          <div className="home-service-item">
            <img className="home-service-image" src={learning} alt="cursos" />
            <p className="home-service-title">Cursos</p>
          </div>
          <div className="home-service-item">
            <img className="home-service-image" src={team} alt="empresases" />
            <p className="home-service-title">Bonificació per empresas</p>
          </div>
        </div>
      </div>
    </main>
  );
};
