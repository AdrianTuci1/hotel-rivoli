import React from 'react'
import './loader.scss'
import { PulseLoader } from 'react-spinners'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function Loaderz() {
    useGSAP(() => {
        gsap.to('.boxo',{
            delay: 1.3,
            y:'-300%',
            duration: 2,
            ease: 'back.in',
            stagger: 0,
        })

        gsap.to('.loder',{
            delay: 2,
            y:'140%',
            duration: 1,
            ease: 'power1.out',
        })

        gsap.to('.anime',{
            delay: 2,
            y:'140%',
            duration: 1,
            ease: 'power1.out',
        })
    },[])

  return (
    <div className='pges'>
        <div className="bxs-cont">
        <div className="boxo"></div>
        <div className="boxo"></div>
        <div className="boxo"></div>
        </div>
        <div className="wripe">
        <div className="loder">
            <PulseLoader color="#161514" />
        </div>
        <div className="logo">
            <img src="./hrlogo.png" alt="" className='anime'/>
        </div>
        </div>
    </div>
  )
}

export default Loaderz