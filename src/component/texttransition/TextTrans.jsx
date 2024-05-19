import React, { useState, useEffect } from 'react';
import './texttrans.scss'

const TextTrans = ({ text = "hello" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [revealedLetters, setRevealedLetters] = useState('');

  const revealLetters = (text) => {
    let revealed = '';
    for (let i = 0; i < text.length; i++) {
      revealed += isVisible ? text[i] : ' ';
    }
    setRevealedLetters(revealed);
  };

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('letter-reveal');
      const rect = element.getBoundingClientRect();
      const isInViewport = rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
      setIsVisible(isInViewport);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    revealLetters(text);
  }, [text, isVisible]);

  return (
    <div id="letter-reveal" className="letter-reveal">
      {revealedLetters}
    </div>
  );
};

export default TextTrans;
