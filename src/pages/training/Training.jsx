import { useTranslation } from "react-i18next";
import { Footer } from "../../components/footer/Footer";
import "./training.css";

export const Training = () => {
  const { t } = useTranslation();
  return (
    <main className="family-wrapper">
      <header className="training-header">
        <h1>{t("home.titleSection")}</h1>
        <img
          className="image-rotate"
          src="/assets/resources/arrow-rotate.png"
          alt=""
        />
      </header>
      <div className="training-content">
        <h1 className="">{t("trining.titleh1")}</h1>
        <p className="text">{t("trining.text1")}</p>
        <h3 className="training-content-title">
          1- {t("trining.talks.1.title")}
        </h3>
        <div className="text-center content-variant">
          <p className="text-center-bold">{t("trining.talks.1.destination")}</p>
          <p className="text-center-blue">{t("trining.talks.1.object")}</p>
          <p className="text-center-normal">{t("trining.talks.1.objective")}</p>
        </div>
      </div>
      <img
        className="image-point"
        src="/assets/resources/pointBrow.png"
        alt=""
      />
      <div className="training-content">
        <div className="group1-image">
          <img src="/assets/resources/polaroidBrownImage.png" alt="" />
          <img src="/assets/resources/polaroidClaraRectaImage.png" alt="" />
        </div>
        <div className="group2-image">
          <img src="/assets/resources/polaroidWhiteRect.png" alt="" />
          <img src="/assets/resources/polaroidWhiteRect.png" alt="" />
        </div>
        <div className="group3-image">
          <img src="/assets/resources/grafica.png" alt="" />
          <img src="/assets/resources/polaroidWhiteRect.png" alt="" />
        </div>
      </div>
      <section className="home-footer">
        <Footer background="#e18a30" />
        <img
          className="home-image-footer"
          src="/assets/resources/arrow-rotate.png"
          alt=""
        />
      </section>
    </main>
  );
};
