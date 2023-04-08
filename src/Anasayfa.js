import React from "react";
import "./Anasayfa.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

export default function Anasayfa() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div className="AnaSayfaContainer">
            <div className="header">
              <h1>YEMEK DEPOSU</h1>
              <p>DOLU DOLU DEPO</p>
              <p>HEMEN SİPARİŞ VER!</p>
              <Link to="/orderpizza" className="siparis-butonu">TIKLA GELSİN</Link>
            </div>
            <img
              src="https://www.tastypizza.ca/static/img-1-1470491652f0d6757b0554096ca10e69.jpg"
              alt="pizza"
            />
          </div>
        </Route>
        <Route exact path="/orderpizza">
          <Anasayfa />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
