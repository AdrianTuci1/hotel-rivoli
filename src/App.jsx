import './App.scss'
import React,{ useState, useEffect } from 'react';
import Loaderz from './loader/Loader';
import Section6 from './component/Section6/Section6.jsx'
import Carousel from './component/carousel/Carousel'
import Footer from './component/footer/Footer.jsx'
import NavRight from './component/navright/NavRight'
import Section1 from './component/section1/section1'
import Section2 from './component/section2/Section2'
import Section3 from './component/section3/Section3'
import Section4 from './component/section4/Section4.jsx'
import Section5 from './component/section5/Section5.jsx'
import Section7 from './component/section7/Section7.jsx'
import Section8 from './component/section8/Section8.jsx'
import ControlPanel from './component/Map/control-panel.jsx';

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])

  return (
    <>
    {
      loading ?
      <div className="cv-1">
      <Loaderz />
      </div>
      :
    (
      <div className="bdy">
    <div className="navii">
    <NavRight />
    </div>
    <div className="wrapall">
    <div className="section1">
      <div className="inside2">
      <Section1 />
      </div>
      <div className="inside3">
      <Carousel />
      </div>
    </div>
    <div className="section2">
      <div className="inside first">
        <Section2 />
        </div>
    </div>
    <div className="section3">
        <Section3 />
    </div>
    <div className="section4">
        <Section4 />
    </div>
    <div className="section5">
        <Section5 />
    </div>
    <div className="section6">
        <Section6 />
        <div className="ctr-p">
          <ControlPanel />
        </div>
    </div>
    <div className="section7">
        <Section7 />
    </div>
    <div className="section8">
      <Section8 />
    </div>
    <div className="footer">
      <Footer />
    </div>
    </div>
    </div>
    )}
    </>
  )
}

export default App
