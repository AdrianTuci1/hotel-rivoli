import React from 'react'
import './section3.scss'
import BoxScroll from '../BoxScroll/BoxScroll'
import Reveall from '../reveall/Reveall'

function Section3() {
  return (
    <>
    <div className="scroll">
      <BoxScroll />
    </div>
    <div className="texts">
      <Reveall sentence="CONVINGE-TE SINGUR!"/>
    </div>
    </>
  )
}

export default Section3
