import React from 'react'
import './section6.scss'
import MyMap from '../Map/Map';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ControlPanel from '../Map/control-panel';

function Section6() {

useGSAP(() =>{
  gsap.to('.contmap', {
    scrollTrigger:{
      trigger: '.contmap',
      scrub: 0,
      start: '40% bottom',
      end: '+=700',
      toggleActions: 'restart pause reverse pause',
    },
    duration: 2,
    scale: 1.4,
    y: +270,
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
        <MyMap/>
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