import React from "react";
import "./Galeri.css";

import yemek1 from "./kart-1.png";
import yemek2 from "./kart-2.png";
import yemek3 from "./kart-3.png";

export default function Galeri() {
  const galeriItems = [
    {
      img: yemek1,
      title: "Özel Karışım Burger",
      text: "Farklı sosları ile eşsiz bir lezzet",
    },
    {
      img: yemek2,
      title: "Pizza",
      text: "Taze malzemeler ile hazırlanmış enfes pizza",
    },
    {
      img: yemek3,
      title: "Spesiyal Kızartmalar",
      text: "Özel baharatları ile mükemmel bir kıvama sahip",
    },
  ];

  return (
    <div className="galeri">
      <div className="galeri-item">
        <img src={yemek1} alt="Özel Karışım Burger" />
        <div className="galeri-content">
          <h3>Özel Karışım Burger</h3>
          <p>Farklı sosları ile eşsiz bir lezzet</p>
          <button>Sipariş Ver</button>
        </div>
      </div>
      <div className="galeri-item">
        <img src={yemek2} alt="Pizza" />
        <div className="galeri-content">
          <h3>Pizza</h3>
          <p>Taze malzemeler ile hazırlanmış enfes pizza</p>
          <button>Sipariş Ver</button>
        </div>
      </div>
      <div className="galeri-item">
        <img src={yemek3} alt="Spesiyal Kızartmalar" />
        <div className="galeri-content">
          <h3>Spesiyal Kızartmalar</h3>
          <p>Özel baharatları ile mükemmel bir kıvama sahip</p>
          <button>Sipariş Ver</button>
        </div>
      </div>
    </div>
  );
}
