import './App.scss';
import React, { useState, useEffect, lazy } from 'react';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import Loaderz from './loader/Loader';
import NavRight from './component/navright/NavRight';

const Section1 = lazy(() => import('./component/section1/section1'));
const Section2 = lazy(() => import('./component/section2/Section2'));
const Section3 = lazy(() => import('./component/section3/Section3'));
const Section4 = lazy(() => import('./component/section4/Section4.jsx'));
const Section5 = lazy(() => import('./component/section5/Section5.jsx'));
const Section6 = lazy(() => import('./component/Section6/Section6.jsx'));
const Section7 = lazy(() => import('./component/section7/Section7.jsx'));
const Section8 = lazy(() => import('./component/section8/Section8.jsx'));
const Footer = lazy(() => import('./component/footer/Footer.jsx'));
const ControlPanel = lazy(() => import('./component/Map/control-panel.jsx'));

function App() {
  gsap.registerPlugin(ScrollToPlugin);

  const [loading, setLoading] = useState(true);
  const [currentLng, setCurrentLng] = useState('ro');

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000); // Reduced loading time for performance
  }, []);

  const handleLanguageChange = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000); // Adjust timeout to optimize language switch performance
  };

  useEffect(() => {
    window.addEventListener('languageChange', handleLanguageChange);
    return () => window.removeEventListener('languageChange', handleLanguageChange);
  }, []);

  const handleScrollToSection = (sectionId) => {
    gsap.to(window, { duration: 1, scrollTo: { y: sectionId, offsetY: 70 } });
  };

  return (
    <>
      {loading ? (
        <div className="cv-1">
          <Loaderz />
        </div>
      ) : (
        <div className="bdy">
          <NavRight onNavClick={handleScrollToSection} />
            <div id="section1">
              <Section1 />
            </div>
            <div id="section2">
              <Section2 />
            </div>
            <div id="section3">
              <Section3 />
            </div>
            <div id="camere">
              <Section4 />
            </div>
            <div id="section5">
              <Section5 />
            </div>
            <div id="locatie">
              <Section6 />
            </div>
            <div id="panel" className='panel'>
              <ControlPanel />
            </div>
            <div id="section7">
              <Section7 />
            </div>
            <div id="contact">
              <Section8 />
            </div>
            <div className="footer">
            <Footer />
            </div>
        </div>
      )}
    </>
  );
}

export default App;
