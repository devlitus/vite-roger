import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { Navigation } from "../navigator/Navigator";
import { Sidebar } from "../sidebar/sidebar";
import "./navbar.css";

export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isVisibility, setIsVisibility] = useState(false);
  const { t } = useTranslation();
  const handlerClickOpen = () => {
    setIsVisibility(true);
    setIsSidebarOpen(!isSidebarOpen);
  };
  const location = useLocation();
  const backgroundColor =
    location.pathname === "/training"
      ? "#E18A30"
      : location.pathname === "/bissnes"
      ? "#50B9D0"
      : "#005F94";
  return (
    <header className="navbar" style={{ backgroundColor: backgroundColor }}>
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
