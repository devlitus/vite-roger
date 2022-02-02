import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import i18n from "../../i18n";
import "./navigator.css";

export const Navigation = () => {
  const { language, changeLanguage } = i18n;
  const { t } = useTranslation();
  const handleClick = () => {
    changeLanguage(language === "ca" ? "es" : "ca");
  };
  return (
    <nav className="navigator">
      <ul className="navigator-items">
        <li className="navigator-item">
          <Link className="navigator-link" to="/">
            {t("home.pathUrl")}
          </Link>
        </li>
        <li className="navigator-item">
          <Link className="navigator-link" to="/about">
            {t("about.pathUrl")}
          </Link>
        </li>
        <li className="navigator-item">
          <Link className="navigator-link" to="/">
            Campus
          </Link>
        </li>
        <li className="navigator-item">
          <Link className="navigator-link" to="/">
            Blog
          </Link>
        </li>
        <li className="navigator-item">
          <Link className="navigator-link" to="/contact">
            {t("contact.pathUrl")}
          </Link>
        </li>
        <li>
          <button className="navigator-btn" onClick={handleClick}>
            {language}
          </button>
        </li>
      </ul>
    </nav>
  );
};
