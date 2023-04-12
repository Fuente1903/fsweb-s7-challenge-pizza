import React from "react";
import * as yup from "yup";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { BrowserRouter, Route, Link, Switch, useNavigate } from "react-router-dom";
import Form from './Components/Form';
import ANASAYFA from "./Components/Anasayfa";
import Anasayfa from "./Components/Anasayfa";
import SUCCESS from "./Components/Success"
import Footer from "./Components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Anasayfa} />
        <Route path="/form" component={Form} />
        <Route path="/Success" component={SUCCESS} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
