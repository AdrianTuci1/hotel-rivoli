import React from 'react'
import './section5.scss'
import BoxScrollRev from '../BoxScrollReverse/BoxScrollRev'
import ReveallRev from '../reveallRev/ReveallRev'

function Section5() {
  return (
    <>
    <div className="textsz">
      <ReveallRev sentence="AI GASIT CEVA?"/>
    </div>
    <div className="scroll">
        <BoxScrollRev />
    </div>
    </>
  )
}

export default Section5;