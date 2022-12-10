import React, { useState } from "react";
import { useCookies } from "react-cookie";
import api from "../../axios/axios";
import Input from "../UI/input";
import styles from "./registrationPage.module.scss";
function SecondStep() {
  const [registrationData, setRegistrationData] = useState({
    name: "",
    middlename: "",
    surname: "",
    email: "",
    phone: "",
    password: "",
  });
  const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);

  function handle(e) {
    let newData = { ...registrationData };
    newData[e.target.id] = e.target.value;
    setRegistrationData(newData);
    console.log(newData, registrationData);
  }
  function register(e) {
    e.preventDefault();
    api.register(registrationData);
  }

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <Input
          id="name"
          type="text"
          placeholder="фамилия"
          value={registrationData.name}
          onChange={(e) => handle(e)}
        />
        <Input
          id="name"
          type="text"
          placeholder="имя"
          value={registrationData.name}
          onChange={(e) => handle(e)}
        />
        <Input
          id="name"
          type="text"
          placeholder="отчество"
          value={registrationData.name}
          onChange={(e) => handle(e)}
        />
        <Input
          id="name"
          type="text"
          placeholder="отчество"
          value={registrationData.name}
          onChange={(e) => handle(e)}
        />
        <Input
          id="name"
          type="text"
          placeholder="отчество"
          value={registrationData.name}
          onChange={(e) => handle(e)}
        />
        <Input
          id="name"
          type="text"
          placeholder="отчество"
          value={registrationData.name}
          onChange={(e) => handle(e)}
        />
        <Input
          id="name"
          type="text"
          placeholder="отчество"
          value={registrationData.name}
          onChange={(e) => handle(e)}
        />
      </div>
    </div>
  );
}

export default SecondStep;
