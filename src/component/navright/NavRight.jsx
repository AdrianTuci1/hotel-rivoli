import './navRight.scss'
import { Phone, Mail, MessageCircleMore, BedDouble } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function NavRight() {

    useGSAP(() => {
        gsap.from('.sectionu',{
            delay: 0.4,
            y:'-150%',
            duration: 2,
            ease: 'bounce.in',
        })

        gsap.from('.contact',{
            delay: 0.4,
            y:'+150%',
            duration: 2,
            ease: 'bounce.in',
        })
    })

  return (
    <div className="contentz">
        <div className="pachet">
            <div className="altpachet">
    <div className="sectionu">
        <div className="language">
            <a href='/'>EN</a>
        </div>
        <a href={import.meta.env.VITE_BOOK_URL} target="_blank" className="booking book">
            BOOK &nbsp;<BedDouble size={16}/>
        </a>
    </div>
    <div className="nav">
        <a href="/" className="item top">INCEPUT</a>
        <a href="/" className="item camere">CAMERE</a>
        <a href="/" className="item locatie">LOCATIE</a>
        <a href="/" className="item ">CONTACT</a>
    </div>
    </div>
    <div className="contact">
        <span>PUTEM VORBI</span>
        <a href={import.meta.env.VITE_WHATSAPP_URL} target="_blank" className="whapp zip"><MessageCircleMore width={20}/></a>
        <a href="tel:0791644000" className="tel zip"><Phone width={20}/></a>
        <a href="mailto:hotel_rivoli@email.com?subject=pre-filled subject" className="mail zip"><Mail width={20}/></a>
    </div>
    </div>
    </div>
  )
}

export default NavRight