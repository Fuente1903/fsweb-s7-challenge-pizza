import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Form.css";
import axios from "axios";
import * as yup from "yup";
import Footer from "./Footer";


import {
  FormGroup,
  CardTitle,
  Card,
  CardText,
  ButtonToolbar,
  ButtonGroup,
  Button,
  Input,
  Label,
  Col,
  FormFeedback,
} from "reactstrap";

const initialValues = {
  name: "",
  boyut: "",
  hamur: "",
  secenekler: [],
  instructions: "",
  adet: 1,
  ücret: 85.5,
  ekücret: "",
  rate: 8.9,
  comments: 200,
};

const initialErrors = {
  name: "",
  boyut: "",
  hamur: "",
  secenekler: [],
  instructions: "",
};

const secenekler = [
  "Pepperoni",
  "Sosis",
  "Knada Jambonu",
  "Tavuk Izgara",
  "Soğan",
  "Domates",
  "Mısır",
  "Sucuk",
  "Jalepeno",
  "Sarımsak",
  "Biber",
  "Sucuk",
  "Ananas",
  "Kabak",
];

const Form = async => {
  const [data, setData] = useState(initialValues);
  const [malzemeSayısı, setMalzemeSayısı] = useState(0);
  const [price, setPrice] = useState(data.ücret);

  const [errors, setErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(true);
  const [submit, setSubmit] = useState(false);

  const [counter, setCounter] = useState(1);
  const perCost = 5;
  const ekücret = perCost * malzemeSayısı;
  const totalPrice = price * counter;

  useEffect(() => {
    axios
      .post("https://reqres.in/api/users", initialValues)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    setSubmit(true);
  };

  const kontrol = (e) => {
    setData({ ...data, [e.target.name]: e.target.checked });
    if (e.target.checked === true) {
      setMalzemeSayısı(malzemeSayısı + 1);
      setPrice(price + perCost);
    } else {
      setMalzemeSayısı(malzemeSayısı - 1);
      setPrice(price - perCost);
    }
  };

  const arttır = (e) => {
    setCounter(counter + 1);
  };

  const azalt = (e) => {
    if (counter >= 1) setCounter(counter - 1);
    if (counter <= 1) setCounter(1);
  };

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Bu alanı doldurmak zorunludur.")
      .min(2, "İsim en az 2 karakter olmalıdır.")
      .default(data.name),
    secenekler: yup
      .array()
      .max(10, "En fazla 10 adet seçim yapılmaktadır.")
      .default(data.secenekler),
    instructions: yup
      .string()
      .required("Bu alanı doldurmak zorunludur.")
      .default(data.instructions),
    adet: yup.number().required().default(data.adet),
    ücret: yup.number().required().default(data.ücret),
    ekücret: yup.number().required().default(data.ekücret),
    rate: yup.number().required().default(data.rate),
    comments: yup.number().required().default(data.comments),
    boyut: yup.string().default(data.boyut),
  });
  


  const changeHandler = async (e) => {
    try {
      setData({ ...data, [e.target.name]: e.target.value });
      await yup.reach(schema, e.target.name).validate(e.target.value);
      setErrors({ ...errors, [e.target.name]: "" });
    } catch (err) {
      setErrors({ ...errors, [e.target.name]: err.errors ? err.errors[0] : "" });
    }
  };
  
  

  useEffect(() => {
    schema.isValid(data).then((valid) => setDisabled(!valid));
  }, [data, schema]);

  useEffect(() => {
    setData({ ...data, count: counter });
  }, [counter]);

  useEffect(() => {
    setData({
      ...data,
      price: price,
      ekücret: malzemeSayısı * perCost,
    });
  }, [totalPrice]);

  useEffect(() => {
    console.log("errors >", errors);
  }, [errors]);

  return (
    <form id="pizza-form" className="form-container" onSubmit={onSubmit}>
      <div className="navbar">
        <img className="logo.svg" src="./logo.svg" alt="TEKNOLOJİK YEMEKLER" />
        <div className="direction">
          <NavLink className="links" to="/">
            Anasayfa
          </NavLink>

          <NavLink className="secenekler" to="/pizza">
            Seçenekler
          </NavLink>

          <NavLink id="order-pizza" className="links" to="/pizza">
            Sipariş oluştur
          </NavLink>
        </div>
      </div>

      <div className="icerik-container">
        <h2> Position Absolute Acı Pizza</h2>
        <div className="pizza-info">
          <span>{data.ücret} TL</span>
          <div className="ek">
            <span>{data.rate}</span>
            <span>({data.comments})</span>
          </div>
        </div>
        <p>
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre.Pizza, domates, peynir ve genellikle çeşitli diğer
          malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir
          fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşanİtalyan kökenli
          lezzetli bir yemektir. Küçük bir pizzaya bazen pizetta denir.{" "}
        </p>

        <FormGroup>
      
          <FormFeedback>{errors.name}</FormFeedback>
        </FormGroup>

        <div className="seçimler">
          <div className="seçim-1">
            <Label htmlFor="size-dropdown" sm={2}>
              <h3>Boy:</h3>
            </Label>

            <FormGroup check htmlFor="size-dropdown">
              <Label check>
                <Input
                  type="radio"
                  name="boyut"
                  id="size-dropdown"
                  value="Küçük"
                  data-cy="size-dropdown"
                  invalid={errors.boyut}
                  onChange={changeHandler}
                />{" "}
                Küçük
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check htmlFor="size-dropdown">
                <Input
                  type="radio"
                  name="boyut"
                  id="size-dropdown"
                  value="Orta"
                  data-cy="size-dropdown"
                  invalid={errors.boyut}
                  onChange={changeHandler}
                />{" "}
                Orta
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check htmlFor="size-dropdown">
                <Input
                  type="radio"
                  name="boyut"
                  id="size-dropdown"
                  value="Büyük"
                  data-cy="size-dropdown"
                  invalid={errors.boyut}
                  onChange={changeHandler}
                />{" "}
                Büyük
              </Label>
              <FormFeedback>{errors.boyut}</FormFeedback>
            </FormGroup>
          </div>

          <FormGroup>
  <Label htmlFor="dough-dropdown" sm={2}>
    <h3>Hamur: </h3>
  </Label>
  <Col sm={20}>
    <Input
      id="dough-dropdown"
      name="hamur"
      type="select"
      value={data.hamur}
      onChange={changeHandler}
      data-cy="dough-dropdown"
    >
      <option value="">Hamur Kalınlığı Seç</option>
      <option value="ince">ince</option>
      <option value="orta">orta</option>
      <option value="kalın">kalın</option>
    </Input>
    <FormFeedback>{errors.hamur}</FormFeedback>
  </Col>
</FormGroup>

        </div>

        <FormGroup>
          <h3>Ek Malzemeler:</h3>
          <p>En Fazla 10 malzeme seçebilirsiniz.</p>

          {secenekler.map((e, index) => {
            return (
              <div key={index} className="checkbox-group">
                <FormGroup check inline>
                  <Input type="checkbox" name={e} onChange={kontrol} />

                  <Label check>{e} </Label>
                  <FormFeedback>{errors.secenekler}</FormFeedback>
                </FormGroup>
              </div>
            );
          })}

<form>
  <label>
    <h3>İsim: </h3>
    <input
      name="name"
      placeholder="Ad-Soyad"
      type="text"
      onChange={changeHandler}
      value={data.name}
      className={errors.name ? "is-invalid" : ""}
      data-cy="name-input"
    />
    {errors.name && (
      <div className="invalid-feedback">{errors.name}</div>
    )}
  </label>
</form>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="special-text">
            <h3>Sipariş Notu : </h3>
          </Label>
          <Input
            id="special-text"
            name="instructions"
            placeholder="Not"
            type="text"
            onChange={changeHandler}
            value={data.instructions}
            invalid={errors.instructions}
            data-cy="special-text"
            
          />
          <FormFeedback>{errors.instructions}</FormFeedback>
          <button type="submit">Gönder</button>
        </FormGroup>

        <hr style={{ size: "2", border: "solid", width: "100%" }} />

        <div className="sayısal">
          <ButtonToolbar>
            <ButtonGroup>
              <Button onClick={azalt}>-</Button>{" "}
              <Input id="count" type="number" value={counter} />{" "}
              <Button onClick={arttır}>+</Button>
            </ButtonGroup>
          </ButtonToolbar>

          <div className="seçim-2">
            <FormGroup>
              <Card
                className="my-5"
                style={{
                  width: "8rem",
                }}
              >
                <CardTitle>
                  {" "}
                  <h4 style={{ marginTop: 0 }}>Sipariş Toplamı</h4>
                </CardTitle>
                <CardText>
                  <h5>Seçimler: {ekücret * counter} TL </h5>

                  <h5>Toplam: {totalPrice} TL </h5>
                </CardText>
              </Card>

                
              <Link to="/Success">
                <button
                  id="order-button"
                  data-cy="order-button"
                  disabled={disabled}
                  className="btn btn-primary"
                >
                  Sipariş ver!
                </button>
              </Link>
            </FormGroup>
          </div>
        </div>
      </div>
    </form>

    
  );
};

export default Form;