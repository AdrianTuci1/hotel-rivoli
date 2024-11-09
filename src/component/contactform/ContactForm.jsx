import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contactform.scss'
import i18n from '../../translation';
import { useTranslation } from 'react-i18next';

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_MAILER_SERVICE, 'template_q17e3tp', form.current, {
        publicKey: import.meta.env.VITE_MAILER_KEY,
      })
      .then(
        () => {
          alert('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  const { t } = useTranslation();

    return (
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <label htmlFor="name">{t('nume')}</label>
        <input type="text" id="user_name" placeholder={t('num')} required />
        <br />
  
        <label htmlFor="email">EMAIL</label>
        <input type="email" id="user_email" placeholder={t('mail')} name="user_email" required />
        <br />
  
        <label htmlFor="subject">{t('subiect')}</label>
        <input type="text" id="sub" placeholder={t('sub')} name="subject"/>
        <br />
  
        <label htmlFor="message">{t('mesaj')}</label>
        <textarea id="subject" className="mess" placeholder={t('mes')} name="message" required />
        <br />
  
        <button type="submit" className="subm" value="Send" >{t('trimite')}</button>
      </form>
    );
  }
  
  export default ContactForm;
  