import React from "react";
import "./Order.css";
import * as yup from "yup";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const formSchema = yup.object().shape({
    pizzatype: yup.string().required("Seçim yapınız"),
    pizzasize: yup
      .string()
      .oneOf(["small", "medium", "big"], "Boyutlardan birini seçmelisiniz.")
      .required(),
    doughsize: yup
      .string()
      .oneOf(
        ["thin", "medium", "thick"],
        "Hamur boyutlarından birini seçmelisiniz."
      )
      .required(),
    cheddar: yup.boolean().oneOf([true, false], ""),
    pepper: yup.boolean().oneOf([true, false], ""),
    tomato: yup.boolean().oneOf([true, false], ""),
    sucuk: yup.boolean().oneOf([true, false], ""),
    onion: yup.boolean().oneOf([true, false], ""),
    chicken: yup.boolean().oneOf([true, false], ""),
    corn: yup.boolean().oneOf([true, false], ""),
    pineapple: yup.boolean().oneOf([true, false], ""),
    courgette: yup.boolean().oneOf([true, false], ""),
    mushroom: yup.boolean().oneOf([true, false], ""),
    tuna: yup.boolean().oneOf([true, false], ""),
    mint: yup.boolean().oneOf([true, false], ""),
    oregano: yup.boolean().oneOf([true, false], ""),
    sausage: yup.boolean().oneOf([true, false], ""),
    ham: yup.boolean().oneOf([true, false], ""),
    olive: yup.boolean().oneOf([true, false], ""),
    namesurname: yup
      .string()
      .min(2, "İsminiz en az 2 karakterden oluşmalıdır.")
      .required("İsim alanını doldurmak zorunludur."),
    address: yup
      .string()
      .required("Adres alanını doldurmak zorunludur")
      .min(10, "En az 10 karakter girilmelidir."),
    email: yup
      .string()
      .email()
      .required("Geçerli bir email giriniz."),
    quantity: yup.number().required("Lütfen sipariş adedini girin!"),
    ordernote: yup.string(),
  });
  
  export default function Form() {
    const [form, setForm] = useState({
      pizzatype: "",
      pizzasize: "",
      doughsize: "",
      cheddar: false,
      pepper: false,
      tomato: false,
      sucuk: false,
      onion: false,
      chicken: false,
      corn: false,
      pineapple: false,
      courgette: false,
      mushroom: false,
      tuna: false,
      mint: false,
      oregano: false,
      sausage: false,
      ham: false,
      olive: false,
      quantity: "",
      namesurname: "",
      address: "",
      email: "",
      ordernote: "",
    });
  
    const [error, setError] = useState({
      pizzatype: "",
      pizzasize: "",
      doughsize: "",
      cheddar: false,
      pepper: false,
      tomato: false,
      sucuk: false,
      onion: false,
      chicken: false,
      corn: false,
      pineapple: false,
      courgette: false,
      mushroom: false,
      tuna: false,
      mint: false,
      oregano: false,
      sausage: false,
      ham: false,
      olive: false,
      quantity: "",
      namesurname: "",
      address: "",
      email: "",
      ordernote: "",
    });
  
    const [buttonDisabledMi, setButtonDisabledMi] = useState(true);
    const [alreadyOrdered, setAlreadyOrdered] = useState();
  
    const checkFormError = (name, value) => {
      yup
        .reach(formSchema, name)
        .validate(value)
        .then(() => {
          setError({
            ...error,
            [name]: "",
          });
        })
        .catch((err) => {
          setError({
            ...error,
            [name]: err.message,
          });
        });
    };
  
    function handleChange(event) {
      const { name, value } = event.target;
      checkFormError(name, value);
      setForm({
        ...form,
        [name]: value,
      });
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      axios
        .post("https://reqres.in/api/users", form)
        .then((response) => {
          console.log(response.data);
          setAlreadyOrdered([...alreadyOrdered, response.data]);
          setForm({
            pizzatype: "",
            pizzasize: "",
            doughsize: "",
            cheddar: false,
            pepper: false,
            tomato: false,
            sucuk: false,
            onion: false,
            chicken: false,
            corn: false,
            pineapple: false,
            courgette: false,
            mushroom: false,
            tuna: false,
            mint: false,
            oregano: false,
            sausage: false,
            ham: false,
            olive: false,
            quantity: "",
            namesurname: "",
            address: "",
            email: "",
            ordernote: "",
          });
        })
        .catch((err) => console.log(err));
    }
  
    useEffect(() => {
      formSchema.isValid(form).then((valid) => setButtonDisabledMi(!valid));
    }, [form]);
  
    const history = useHistory();
    const toSuccessPage = () => {
      history.push("/success");
    };
    return (
      <>
        <div className="formPart">
          <h1 className="formHeading">SİPARİŞİNİZİ OLUŞTURUN</h1>
          <form onSubmit={handleSubmit}>
            <div className="formContent">
              <div className="pizza_type">
                <h3>
                  Pizza Çeşitini Seçiniz <span style={{ color: "red" }}>*</span>
                </h3>
                <label>
                  {" "}
                  <select
                    id="type_dropdown"
                    name="pizzatype"
                    value={form.pizzatype}
                    onChange={handleChange}
                    class="select"
                  >
                    <option value="">Seçiniz</option>
                    <option value="margarita">Margarita</option>
                    <option value="sucuklu">Sucuklu Pizza</option>
                    <option value="sebzeli">Sebzeli Pizza</option>
                    <option value="ucpeynirli">Üç Peynirli Pizza</option>
                    <option value="tavuklu">Tavuklu & Sebzeli Pizza</option>
                  </select>
                </label>
                {error.pizzatype && <p>{error.pizzatype}</p>}
              </div>
              <div className="radio">
                <div className="pizza_size">
                  <h3>
                    Pizza Boyutu<span style={{ color: "red" }}>*</span>
                  </h3>
                  <label>
                    <input
                      type="radio"
                      value="small"
                      name="pizzasize"
                      checked={form.pizzasize === "small"}
                      onChange={handleChange}
                    />{" "}
                    Küçük Boy
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="medium"
                      name="pizzasize"
                      checked={form.pizzasize === "medium"}
                      onChange={handleChange}
                    />{" "}
                    Orta Boy
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="big"
                      name="pizzasize"
                      checked={form.pizzasize === "big"}
                      onChange={handleChange}
                    />{" "}
                    Büyük Boy
                  </label>
                  {error.pizzasize && <p>{error.pizzasize}</p>}
                </div>
                <div className="dough_size">
                  <h3>
                    Hamur Kalınlığı<span style={{ color: "red" }}>*</span>
                  </h3>
  
                  <label>
                    <input
                      type="radio"
                      value="thin"
                      name="doughsize"
                      checked={form.doughsize === "thin"}
                      onChange={handleChange}
                    />{" "}
                    İnce
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="medium"
                      name="doughsize"
                      checked={form.doughsize === "medium"}
                      onChange={handleChange}
                    />{" "}
                    Orta
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="thick"
                      name="doughsize"
                      checked={form.doughsize === "thick"}
                      onChange={handleChange}
                    />{" "}
                    Kalın
                  </label>
                  {error.doughsize && <p>{error.doughsize}</p>}
                </div>
              </div>
              <div className="ingredients">
                <h3 className="headingIngredients">Ek Malzemeleri Seçiniz</h3>
                <div className="ingredientsContent">
                  <label>
                    <input
                      type="checkbox"
                      name="cheddar"
                      value={form.cheddar}
                      onChange={handleChange}
                      class="check"
                    />{" "}
                    Cheddar
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="pepper"
                      value={form.pepper}
                      onChange={handleChange}
                      class="check"
                    />{" "}
                    Biber
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="tomato"
                      value={form.tomato}
                      onChange={handleChange}
                      class="check"
                    />{" "}
                    Domates
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="sucuk"
                      value={form.sucuk}
                      onChange={handleChange}
                      class="check"
                    />{" "}
                    Sucuk
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="onion"
                      value={form.onion}
                      onChange={handleChange}
                      class="check"
                    />{" "}
                    Soğan
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="chicken"
                      value={form.chicken}
                      onChange={handleChange}
                      class="check"
                    />{" "}
                    Tavuk
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="corn"
                      value={form.corn}
                      onChange={handleChange}
                      class="check"
                    />{" "}
                    Mısır
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="pineapple"
                      value={form.pineapple}
                      onChange={handleChange}
                      class="check"
                    />{" "}
                    Ananas
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="courgette"
                      value={form.courgette}
                      onChange={handleChange}
                      class="check"
                    />{" "}
                    Kabak
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="mushroom"
                      value={form.mushroom}
                      onChange={handleChange}
                      class="check"
                    />{" "}
                    Mantar
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="tuna"
                      value={form.tuna}
                      onChange={handleChange}
                      class="check"
                    />{" "}
                    Ton
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="mint"
                      value={form.mint}
                      onChange={handleChange}
                      class="check"
                    />{" "}
                    Nane
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="oregano"
                      value={form.oregano}
                      onChange={handleChange}
                      class="check"
                    />{" "}
                    Kekik
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="sausage"
                      value={form.sausage}
                      onChange={handleChange}
                      class="check"
                    />{" "}
                    Sosis
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="ham"
                      value={form.ham}
                      onChange={handleChange}
                      class="check"
                    />{" "}
                    Jambon
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="olive"
                      value={form.olive}
                      onChange={handleChange}
                      class="check"
                    />{" "}
                    Zeytin
                  </label>{" "}
                </div>
              </div>
              <div className="quantity">
                <h3>
                  Sipariş Adedini Seçiniz <span style={{ color: "red" }}>*</span>
                </h3>
                <label>
                  {" "}
                  <input
                    type="number"
                    name="quantity"
                    min="1"
                    max="5"
                    value={form.quantity}
                    onChange={handleChange}
                  />
                </label>
                {error.quantity && <p>{error.quantity}</p>}
              </div>
              <div className="contact">
                <h3>
                  İletişim Bilgilerinizi Giriniz{" "}
                  <span style={{ color: "red" }}>*</span>
                </h3>
  
                <label>
                  İsim Soyisim:
                  <br />
                  <input
                    type="text"
                    name="namesurname"
                    value={form.namesurname}
                    onChange={handleChange}
                    placeholder="İsim Soyisim"
                  />
                </label>
                {error.namesurname && <p>{error.namesurname}</p>}
  
                <label>
                  Adres:
                  <br />
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Adres"
                  />
                </label>
                {error.address && <p>{error.address}</p>}
  
                <label>
                  Email:
                  <br />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                </label>
                {error.email && <p>{error.email}</p>}
              </div>
              <div className="order_note">
                <h3>Sipariş Notunuzu Giriniz</h3>
                <label>
                  <input
                    type="text"
                    name="ordernote"
                    value={form.ordernote}
                    onChange={handleChange}
                    placeholder="Sipariş Notunuz"
                  />
                </label>
              </div>
  
              <button
                className="order_button"
                type="submit"
                disabled={buttonDisabledMi}
                onClick={toSuccessPage}
              >
                SİPARİŞİ GÖNDER
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }