"use client"

import SentenceBarcodeGenerator from "./components/SentenceBarcodeGenerator";
import BarcodeGenerator from "./components/BarcodeGenerator";
import TypingSentenceBarcodeGenerator from "./components/TypingSentenceBarcodeGenerator";



const sentence = "Hello Travis! I can now generate barcodes";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     
   
      <TypingSentenceBarcodeGenerator sentence={sentence} />
    </main>
  );
}
