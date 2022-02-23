import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Navigation } from "../navigator/Navigator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";
import { Sidebar } from "../sidebar/sidebar";

export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isVisibility, setIsVisibility] = useState(false);
  const { t } = useTranslation();
  const handlerClickOpen = () => {
    setIsVisibility(true);
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <header className="navbar">
      <p className="navbar-title">{t("home.textHeader")}</p>
      <FontAwesomeIcon
        icon={faBars}
        className="navbar-icon"
        onClick={handlerClickOpen}
      />
      {isVisibility && (
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          handlerClickOpen={handlerClickOpen}
        />
      )}
      <div className="navbar-movile">
        <Navigation />
      </div>
    </header>
  );
};
