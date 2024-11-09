import React from 'react'
import './section8.scss'
import ContactForm from '../contactform/ContactForm'
import { BedDouble } from 'lucide-react'
import i18n from '../../translation';
import { useTranslation } from 'react-i18next';

function Section8() {
  const { t } = useTranslation();

  return (
    <div className="content8wrap">
    <div className='content8'>
        <span className="contactt">CONTACT</span>
        <span className="descrieree">
            {t('section8')}
        </span>
    </div>
    <div className="formz">
        <ContactForm />
    </div>
    <div className="interesat">
        <span className="inters">{t('interesat')}</span>
        <span className="bs">{t('rezerva')}</span>
        <a className='btnn book' href={import.meta.env.VITE_BOOK_URL} target='_blank'>BOOK &nbsp;<BedDouble size={16}/></a>
    </div>
    </div>
  )
}

export default Section8