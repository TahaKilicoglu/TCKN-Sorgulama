import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { openModal, cevap } from "../../store/feature/modal/modal-slide";
import { login } from "../../store/feature/user/user-slide";

import logo from "../../assets/img/logo.png";
import "./home.css";
import { store } from "../../store";

const Home = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [tckn, setTckn] = useState("");
  const [year, setYear] = useState("");

  const array = [];
  for (let i = 1960; i < 2022; i++) {
    array.push(i);
  }
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "https://tckimlik.nvi.gov.tr/Service/KPSPublic.asmx?WSDL";
    axios({
      method: "post",
      url,
    })
      .then((res) => {
        dispatch(cevap(res.data));
        console.log(store.getState().modal.data);
      })
      .catch((err) => {
        console.log(err);
      });

    dispatch(
      login({
        firstName: firstName,
        lastName: lastName,
        tckn: tckn,
        year: year,
      })
    );
  };

  const sendDataToAPI = () => {
    axios
      .post(`https://631cc9a54fa7d3264cb6d2a6.mockapi.io/users`, {
        firstName,
        lastName,
        tckn,
        year,
      })
      .then(() => {});
  };

  return (
    <div className="home">
      <div
        className="position-absolute top-50 start-50 translate-middle"
        data-tor="place.top place.right shift.up(1rem) left(2rem)"
      >
        <img src={logo} alt="" />
        <p className="font">
          <strong> TCKN </strong> Doğrulama
        </p>
        <input
          placeholder="Adı"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          placeholder="Soyadı"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          placeholder="TC Kimlik No"
          type="text"
          value={tckn}
          onChange={(e) => setTckn(e.target.value)}
        />

        <select
          defaultValue={"DEFAULT"}
          onChange={(e) => setYear(e.target.value)}
        >
          <option key={0} value="DEFAULT" disabled>
            Doğum Yılı
          </option>
          {array.map((option, index) => (
            <option className="option" key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button
          className="mt-3 btn btn-light rounded-pill custom"
          type="button"
          onClick={(e) => {
            dispatch(openModal());
            handleSubmit(e);
            sendDataToAPI();
          }}
        >
          <strong>Giriş Yap</strong>
        </button>
      </div>
      <p className="font2 position-absolute bottom-0 start-50 translate-middle-x mb-4">
        {" "}
        &copy; Tüm Hakları Saklıdır | Aile Sosyal Hizmetler Bakanlığı 2022
      </p>
    </div>
  );
};

export default Home;
