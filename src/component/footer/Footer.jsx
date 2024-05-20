import React from 'react'
import './footer.scss'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function Footer() {
    const items = document.querySelectorAll('.item')

    useGSAP(() => {
        gsap.from('.primrand', {
            scrollTrigger:{
                trigger: ".stickyy",
                pin: true,
                scrub: 2,
                start: '60% bottom',
                end: 'bottom bottom',
                toggleActions: "restart pause reverse pause"
            },
            y: window.innerHeight * -0.18,
            duration: 2,
            ease: "back.inOut",
        })

        gsap.from('.foocontainer', {
            scrollTrigger:{
                trigger: ".stickyy",
                pin: true,
                scrub: 2,
                start: 'bottom bottom',
                end: 'bottom bottom',
                toggleActions: "restart pause reverse pause"
            },
            y: window.innerHeight * -0.14,
            duration: 4,
            ease: "power1.in",
        })
    }, [])

  return (
    <div className='foocontainer'>
        <div className="stickyy">
        <span className="primrand">
            RIVOLI
        </span>
        <span className="doirand itemm">        
            <ul className='nobullets'>
                <li className='d'>IMPRINT</li>
                <li>HOTEL RIVOLI</li>
                <li>STRADA POSTAVARUL NR 98A</li>
                <li>BUCURESTI, SECTOR 3</li>
                <li>hotel-rivoli@yahoo.com</li>
                <li>TEL: 0000000000</li>
            </ul>
        </span>
        <span className="treirand itemm" >
            <ul className='nobullets'>
                <li className='d'>LINKS</li>
                <li>CONDITIONS</li>
                <li>WEBSITE BY</li>
            </ul>
        </span>
        </div>
    </div>
  )
}

export default Footer