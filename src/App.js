import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Navigation } from "./components/Navigation/Navigation";
import { Header } from "./components/Header/Header";
import { About } from "./components/About/About";
import { Sertificates } from "./components/Sertificates/Sertificates";
import { Gallery } from "./components/Gallery/Gallery";
import { Slider } from "./components/Slider/Slider";
import { Models3D } from "./components/Models3D/Models3D";
import { MediaVideo } from "./components/MediaVideo/MediaVideo";
import { Contact } from "./components/Contact/Contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { useTranslation } from "react-i18next"
import './i18n'




export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  const lngs = {
    arm: {nativeName:'Հայերեն', title:'AM', marg:"4px", flag:'https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Armenia.png'},
    ru: {nativeName: 'Русский', title:'РУС', flag:'https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Russia.png'}
  }

  const {t, i18n} = useTranslation()

  return (
    <div>
      <Navbar lngs={lngs} t={t} i18n={i18n}/>
      <Navigation t={t}/>
      <Header data={landingPageData.Header} t={t}/>
      <About t={t} />
      <Sertificates data={landingPageData.Sertificates} t={t}/>
      <Gallery data={landingPageData.Gallery} t={t}/>
      <Slider t={t}/>
      <Models3D data={landingPageData.Team} t={t}/>
      <MediaVideo t={t}/>
      <Contact data={landingPageData.Contact} t={t}/>
    </div>
  );
};

export default App;
