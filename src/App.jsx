import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Contact } from "./pages/contact/Contact";
import "./app.css";

function App() {
  const { t } = useTranslation();

  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
