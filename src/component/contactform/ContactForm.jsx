import { useState } from "react";
import './contactform.scss'

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Implement form submission logic here (e.g., send data to server)
      alert(`Name: ${name}, Email: ${email}, Subject: ${subject}, Message: ${message}`);
  
      // Clear form after submission (optional)
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    };
  
    return (
        <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">NUME</label>
        <input type="text" id="name" placeholder="Nume" value={name} onChange={(e) => setName(e.target.value)} required />
        <br />
  
        <label htmlFor="email">EMAIL</label>
        <input type="email" id="email" placeholder="oaspete@mail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <br />
  
        <label htmlFor="subject">SUBIECT</label>
        <input type="text" id="subject" placeholder="Rezervare pentru 2 persoane..." value={subject} onChange={(e) => setSubject(e.target.value)} />
        <br />
  
        <label htmlFor="message">MESAJ</label>
        <textarea id="message" className="mess" placeholder="Buna ziua, as dori sa stiu daca aveti disponibilitate..." value={message} onChange={(e) => setMessage(e.target.value)} required />
        <br />
  
        <button type="submit">TRIMITE</button>
      </form>
    );
  }
  
  export default ContactForm;
  