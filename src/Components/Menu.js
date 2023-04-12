import React from "react";
import "./Menu.css";

import pizzaIcon from "./2.png.svg";
import burgerIcon from "./3.png.svg";
import kizartmaIcon from "./4.png.svg";
import fastfoodIcon from "./5.png.svg";
import icecekIcon from "./6.png.svg";
import koreIcon from "./1.png.svg";

export default function Menu() {
  const menuItems = [
    { title: "YENİ! Kore", icon: koreIcon },
    { title: "Pizza", icon: pizzaIcon },
    { title: "Burger", icon: burgerIcon },
    { title: "Kızartmalar", icon: kizartmaIcon },
    { title: "Fast Food", icon: fastfoodIcon },
    { title: "Gazlı İçecekler", icon: icecekIcon },
   
  ];

  return (
    <div className="menu">
      {menuItems.map((item) => (
        <div key={item.title} className="menu-item">
          <img src={item.icon} alt={item.title} />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}
