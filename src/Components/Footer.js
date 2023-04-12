import React from "react";
import "./Footer.css";
import instagram1 from "./li-0.png";
import instagram2 from "./li-1.png";
import instagram3 from "./li-2.png";
import instagram4 from "./li-3.png";
import instagram5 from "./li-4.png";
import instagram6 from "./li-5.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer-ust">
        <h3>TEKNOLOJİK YEMEKLER</h3>
        <ul>
          <li>Adres: Bakırköy, İstanbul </li>
          <li>E-posta: info@kodaciktirirpizza.com</li>
          <li>Telefon: +90 (555) 555 55 55</li>
        </ul>
      </div>
      <div className="footer-orta">
        <h3>Menüler</h3>
        <ul>
          <li>Terminal Pizza</li>
          <li>5 Kişilik Hackathlon Pizza</li>
          <li>useEffect Tavuklu Pizza</li>
          <li>Beyaz Console Frosty</li>
          <li>Testler Geçti Mutlu Burger</li>
          <li>Position Absolute Acı Burger</li>
        </ul>
      </div>
      <div className="footer-sag">
        <h3>Instagram</h3>
        <div className="instagram-kutulari">
          <img src={instagram1} alt="instagram1" />
          <img src={instagram2} alt="instagram2" />
          <img src={instagram3} alt="instagram3" />
          <img src={instagram4} alt="instagram4" />
          <img src={instagram5} alt="instagram5" />
          <img src={instagram6} alt="instagram6" />
        </div>
      </div>
      <div className="footer-alt">
        <hr />
        <p>&copy; 2023 Teknolojik Yemekler.</p>
      </div>
    </footer>
  );
}
