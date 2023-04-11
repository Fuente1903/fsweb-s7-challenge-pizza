import React from "react";
import "./Anasayfa.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Mainpage from "./Mainpage.js"; 
import { useNavigate } from 'react-router-dom';
import Banner from "./banner.png";

export default function Anasayfa() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div className="AnaSayfaContainer">
            <div className="header">
              <h1>Teknolojik Yemekler</h1>
              <p>KOD ACIKTIRIR</p>
              <p>PIZZA, DOYURUR</p>
              <Link to="/Mainpage" className="siparis-butonu">ACIKTIM</Link>
            </div>
            <img className="imageke"
              src={Banner}
              alt="sliderke"
            />
          </div>
        </Route>
        <Route exact path="/Mainpage">
          <Mainpage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
