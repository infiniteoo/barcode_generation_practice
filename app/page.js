"use client"

import SentenceBarcodeGenerator from "./components/SentenceBarcodeGenerator";
import BarcodeGenerator from "./components/BarcodeGenerator";
import TypingSentenceBarcodeGenerator from "./components/TypingSentenceBarcodeGenerator";

const sentence = "Hello world! This is a test sentence.";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1>Sentence Barcode Generator</h1>
      <TypingSentenceBarcodeGenerator sentence={sentence} />
    </main>
  );
}
