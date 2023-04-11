import React from "react";
import "./Mainpage.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "./Menu.css";
import Menu from "./Menu.js";
import bannerImage from './mvp-banner.png';
import Gallery from "./Gallery";
import Footer from "./Footer.js"


import kart1 from "./food-1.png";
import kart2 from "./food-2.png";
import kart3 from "./food-3.png";

export default function Mainpage() {
  function Banner() {
    return (
      <div className='banner'>
          <img src={bannerImage} alt='banner' />
          <div className='banner-content'>
              <h2>KOD ACIKTIRIR</h2>
              <p>PIZZA, DOYURUR</p>
              <Link to="/form" className="siparis-butonu">SİPARİŞ VER</Link>
          </div>
          <div className='banner-baslik'>
              <h3>Teknolojik Yemekler</h3>
          </div>
      </div>
    );
  }

  return (
    <div className="mainpage">
      <Banner />
      <Menu />
      <Gallery />
      <div className='yeni-alan'>
        <div className='yeni-alan-baslik'>
          <h3>Yeni Alan Başlık</h3>
        </div>
        <div className='yeni-alan-menu'>
          <Menu />
        </div>
        <div className='yeni-alan-gorseller'>
          <div className="gorsel-kutusu">
            <img src={kart1} alt='Gorsel 1' />
            <div className="gorsel-baslik">
              <p>Gorsel 1 Başlık</p>
            </div>
            <div className="gorsel-ozellikler">
              <span className="gorsel-puan">4.9</span>
              <span className="gorsel-yorum">(200)</span>
              <span className="gorsel-fiyat">60TL</span>
            </div>
          </div>
          <div className="gorsel-kutusu">
            <img src={kart2} alt='Gorsel 2' />
            <div className="gorsel-baslik">
              <p>Gorsel 2 Başlık</p>
            </div>
            <div className="gorsel-ozellikler">
              <span className="gorsel-puan">4.9</span>
              <span className="gorsel-yorum">(928)</span>
              <span className="gorsel-fiyat">85TL</span>
            </div>
          </div>
          <div className="gorsel-kutusu">
            <img src={kart3} alt='Gorsel 3' />
            <div className="gorsel-baslik">
              <p>Gorsel 3 Başlık</p>
            </div>
            <div className="gorsel-ozellikler">
              <span className="gorsel-puan">4.9</span>
              <span className="gorsel-yorum">(462)</span>
              <span className="gorsel-fiyat">75TL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
