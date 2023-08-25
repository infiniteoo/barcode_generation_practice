import React, { useState, useEffect, useRef } from 'react';
import JsBarcode from 'jsbarcode';
import './TypingSentenceBarcodeGenerator.css'; // Import the CSS file

const TypingSentenceBarcodeGenerator = ({ sentence }) => {
  const [visibleWords, setVisibleWords] = useState([]);
  const svgRefs = useRef([]);

  useEffect(() => {
    const words = sentence.split(' ');

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < words.length) {
        setVisibleWords(prevVisibleWords => [...prevVisibleWords, words[currentIndex]]);
        svgRefs.current[currentIndex] = React.createRef();
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 1000); // Adjust the interval time as needed

    return () => clearInterval(interval);
  }, [sentence]);

  useEffect(() => {
    svgRefs.current.forEach((ref, index) => {
      if (ref.current) {
        JsBarcode(ref.current, visibleWords[index]);
      }
    });
  }, [visibleWords]);

  return (
    <div className="sentence-container">
      <div className="word-row">
        {visibleWords.map((word, index) => (
          <div className="word" key={index}>
            <p>{word}</p>
            <svg ref={svgRefs.current[index]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TypingSentenceBarcodeGenerator;
