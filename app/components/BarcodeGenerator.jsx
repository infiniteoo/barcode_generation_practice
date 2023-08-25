"use client"

import React, { useRef, useEffect } from 'react';
import JsBarcode from 'jsbarcode';

const BarcodeGenerator = ({ value }) => {
  const barcodeRef = useRef(null);

  useEffect(() => {
    if (barcodeRef.current) {
      JsBarcode(barcodeRef.current, value, {
        format: 'CODE128', // Barcode format (you can change this)
        displayValue: true, // Show the value below the barcode
      });
    }
  }, [value]);

  return <svg ref={barcodeRef} />;
};

export default BarcodeGenerator;
