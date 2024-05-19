import React from 'react'
import './section6.scss'
import MyMap from '../Map/Map';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ControlPanel from '../Map/control-panel';

function Section6() {

useGSAP(() =>{
  gsap.to('.contmap', {
    scrollTrigger:{
      trigger: '.contmap',
      scrub: '2',
      start: '50% bottom',
      end: '+=650',
      toggleActions: 'restart pause reverse pause',
    },
    duration: 2,
    zoom: 1.3,
    y: +180,
    ease: 'power3.in',
  })
}, [])

  return (
    <>
    <div className="pachete">
    <div className='continut'>
        <span className="locatie">LOCATIE</span>
        <span className="descriere">
        Hotelul nostru este in sectorul 3,
        in partea de vest a bucurestiului.
        Este o zona buna, se poate ajunge rapid oriunde si sunt
        2 centre comerciale in zona.
        </span>
    </div>
    <div className="mapz">
      <div className="contmap">
        <MyMap />
        </div>
    </div>
    <div className="panou-c">
      <ControlPanel />
        </div>
    </div>
    </>
  )
}

export default Section6;