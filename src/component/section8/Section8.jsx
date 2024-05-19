import React from 'react'
import './section8.scss'
import ContactForm from '../contactform/ContactForm'
import { BedDouble } from 'lucide-react'

function Section8() {
  return (
    <div className="content8wrap">
    <div className='content8'>
        <span className="contactt">CONTACT</span>
        <span className="descrieree">
            La noi receptia este deschisa 24/7.
            Va fi mereu cineva sa va intampine si sa 
            va ajute cu indicatii.
        </span>
    </div>
    <div className="formz">
        <ContactForm />
    </div>
    <div className="interesat">
        <span className="inters">INTERESAT?</span>
        <span className="bs">REZERVA O CAMERA ACUM</span>
        <button className='btnn book'>BOOK &nbsp;<BedDouble size={16}/></button>
    </div>
    </div>
  )
}

export default Section8