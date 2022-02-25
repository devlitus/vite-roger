import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import "./app.css";
import { Navbar } from "./components/navbar/Navbar";
import { About } from "./pages/about/About";
import { Bissnes } from "./pages/bissnes/bissnes";
import { Contact } from "./pages/contact/Contact";
import { Family } from "./pages/family/Family";
import { Home } from "./pages/home/Home";

function App() {
  const { t } = useTranslation();

  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/family" element={<Family />} />
        <Route path="/bissnes" element={<Bissnes />} />
      </Routes>
    </div>
  );
}

export default App;
