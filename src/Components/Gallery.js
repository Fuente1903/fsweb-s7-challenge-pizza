import React from "react";
import "./Galeri.css";

import yemek1 from "./kart-1.png";
import yemek2 from "./kart-2.png";
import yemek3 from "./kart-3.png";

export default function Galeri() {
  return (
    <div className="galeri">
      <img src={yemek1} alt="Özel Karışım Burger" />
      <img src={yemek2} alt="Pizza" />
      <img src={yemek3} alt="Spesiyal Kızartmalar" />
    </div>
  );
}
