import { useTranslation } from "react-i18next";
import { CardPolaroid } from "../../components/card/CardPolaroid";
import { Footer } from "../../components/footer/Footer";
import "./bissnes.css";
export const Bissnes = () => {
  const { t } = useTranslation();
  return (
    <main className="family-wrapper">
      <header className="family-header">
        <h1>{t("home.titleSection")}</h1>
        <img
          className="image-rotate"
          src="/assets/resources/arrow-rotate.png"
          alt=""
        />
      </header>
      <div className="family-content">
        <h1 className="">{t("bissnes.titleh1")}</h1>
        <p className="text">{t("bissnes.text1")}</p>
        <h3 className="content-title">1- {t("family.talks.1.title")}</h3>
        <div className="text-center">
          <p className="text-center-bold">{t("family.talks.1.destination")}</p>
          <p className="text-center-blue">{t("family.talks.1.object")}</p>
          <p className="text-center-normal">{t("family.talks.1.objective")}</p>
        </div>
      </div>
      <div className="point-polaroid">
        <img
          className="image-point"
          src="/assets/resources/pointsClaros.png"
          alt=""
        />
        <div className="takes-polaroid-image">
          <CardPolaroid src="/assets/resources/polaroidWhiteRect.png" />
        </div>
      </div>
      <div className="family-content ">
        <h3 className="content-title">2- {t("family.talks.2.title")}</h3>
        <div className="text-center content-variant">
          <p className="text-center-bold">{t("family.talks.2.destination")}</p>
          <p className="text-center-blue">{t("family.talks.1.object")}</p>
          <p className="text-center-normal">{t("family.talks.2.objective")}</p>
          <img
            className="arrow-up-rect"
            src="/assets/resources/arrowUpRect.png"
            alt=""
          />
        </div>
      </div>
      <div className="section-polaroid">
        <div className="takes-polaroid">
          <CardPolaroid src="/assets/resources/polaroidClaraRectaImage.png" />
        </div>
        <div className="takes-polaroid-blue">
          <CardPolaroid src="/assets/resources/polaroidBlueRect.png" />
        </div>
      </div>
      <Footer />
    </main>
  );
};
