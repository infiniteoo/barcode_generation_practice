import React, { useState, useEffect, useRef } from 'react';
import JsBarcode from 'jsbarcode';
import './TypingSentenceBarcodeGenerator.css'; // Import the CSS file

const TypingSentenceBarcodeGenerator = ({ sentence }) => {
  const [visibleWords, setVisibleWords] = useState([]);
  const svgRefs = useRef([]);
  const [loopCounter, setLoopCounter] = useState(0);

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
        setLoopCounter(prevLoopCounter => prevLoopCounter + 1);
      }
    }, 1000); // Adjust the interval time as needed

    return () => clearInterval(interval);
  }, [sentence, loopCounter]);

  useEffect(() => {
    svgRefs.current.forEach((ref, index) => {
      if (ref.current) {
        JsBarcode(ref.current, visibleWords[index]);
      }
    });
  }, [visibleWords]);

  useEffect(() => {
    if (loopCounter > 0) {
      // Reset visibleWords after each loop
      setVisibleWords([]);
    }
  }, [loopCounter]);

  return (
    <div className="typewriter-container">
      <h1 className="title">Sentence Barcode Generator</h1>
      <div className="word-row">
        {visibleWords.map((word, index) => (
          <div className={`word fade-animation`} key={index}>
            <p>{word}</p>
            <svg ref={svgRefs.current[index]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TypingSentenceBarcodeGenerator;
