import React, { useState, useEffect } from 'react';
import './risingtext.css';

const BoxRow = ({ text }) => { // Pass text prop to the component
  const [boxesy, setBoxesy] = useState([]);
  const [textIndex, setTextIndex] = useState(0); // Track the index of the letter in the text

  useEffect(() => {
    const newBoxesy = [];
    for (let i = 0; i < text.length; i++) { // Use text.length for the loop
      newBoxesy.push({ delay: i * 250, risen: false, letter: text[i] }); // Add letter property
    }
    setBoxesy(newBoxesy);
  }, [text]); // Update boxes on text change

  const handleRiseAnimationEnd = (index) => {
    setTextIndex(prevIndex => Math.min(prevIndex + 1, text.length - 1)); // Update textIndex after animation ends
  };

  return (
    <div className="caseta">
    <div style={{ display: 'flex' }}>
      {boxesy.map((boxy, index) => (
        <div
          key={index}
          style={{
            width: 'auto',
            height: 'auto',
            backgroundColor: 'transparent',
            marginLeft: '5px',
            animation: `rise ${boxy.delay}ms ease-in-out forwards`,
            transform: boxy.risen ? 'translateY(0)' : 'translateY(-50%)',
          }}
          onAnimationEnd={() => handleRiseAnimationEnd(index)} // Call handleRiseAnimationEnd on animation end
        >
          <span style={{display: 'flex', justifyContent: 'center'}}>{boxy.letter}</span> {/* Display the letter inside the box */}
        </div>
      ))}
    </div>
    </div>
  );
};

const riseAnimation = (delay) => `
  transform: translateY(-50%) translateY(0) ease-in-out ${delay}ms forwards;
`;

export default BoxRow;


