"use client"

import React from 'react';
import JsBarcode from 'jsbarcode';

const SentenceBarcodeGenerator = ({ sentence }) => {
  const words = sentence.split(' ');

  return (
    <div>
      {words.map((word, index) => (
        <div key={index}>
          <p>{word}</p>
          <svg ref={barcodeRef => JsBarcode(barcodeRef, word)} />
        </div>
      ))}
    </div>
  );
};

export default SentenceBarcodeGenerator;
