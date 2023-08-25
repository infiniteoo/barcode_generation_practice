import JsBarcode from "jsbarcode";
import { createCanvas } from "canvas";
import BarcodeGenerator from "./components/BarcodeGenerator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Barcode Generator</h1>
      <BarcodeGenerator value="123456789" />
    </main>
  );
}
