import { useTranslation } from "react-i18next";
import { Navigation } from "../navigator/Navigator";
import "./navbar.css";
export const Navbar = () => {
  const { t } = useTranslation();
  return (
    <header className="navbar">
      <p>{t("home.textHeader")}</p>
      <Navigation />
    </header>
  );
};
