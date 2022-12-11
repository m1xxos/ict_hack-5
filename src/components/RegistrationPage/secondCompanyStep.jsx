import React, { useState } from "react";
import { useCookies } from "react-cookie";
import api from "../../axios/axios";
import Arrow from "../Arrow";
import TextInput from "../UI/TextInput";
import styles from "./registrationPage.module.scss";

function SecondCompanyStep({companyData, setCompanyData, setStep}) {
  const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);

  function handle(e) {
    let newData = { ...companyData };
    newData[e.target.id] = e.target.value;
    setCompanyData(newData);
  }

  function register(e) {
    e.preventDefault();
    if (companyData.password !== companyData.passwordConfirm){
      alert('Не совпадают пароль и повторно введенный он же')
      return
    }

    const res = api.register(companyData);

    setStep(2)
  }

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <TextInput
          id="title"
          placeholder="название"
          value={companyData.title}
          onChange={(e) => handle(e)}
        />
        <TextInput
          id="INN"
          placeholder="ИНН"
          value={companyData.INN}
          onChange={(e) => handle(e)}
        />
        <TextInput
          id="email"
          placeholder="email"
          type = "email"
          value={companyData.email}
          onChange={(e) => handle(e)}
        />
        <TextInput
          id="password"
          placeholder="пароль"
          value={companyData.password}
          type = "password"
          onChange={(e) => handle(e)}
        />
        <TextInput
          id="passwordConfirm"
          placeholder="повторите пароль"
          value={companyData.passwordConfirm}
          type = "password"
          onChange={(e) => handle(e)}
        />
      </div>
      <Arrow onClick={() => setStep(0)} back/>
      <Arrow onClick={register}/>
    </div>
  );
}

export default SecondCompanyStep;
