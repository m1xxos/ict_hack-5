import React, { useState } from "react";
import { useCookies } from "react-cookie";
import api from "../../axios/axios";
import Arrow from "../Arrow";
import TextInput from "../UI/TextInput";
import styles from "./registrationPage.module.scss";

function FourthCompanyStep({confidantData, setConfidantData, setStep}) {

  function handle(e) {
    let newData = { ...confidantData };
    newData[e.target.id] = e.target.value;
    setConfidantData(newData);
  }

  function register(e) {
    e.preventDefault();

    //const res = api.register(companyData);
  }

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1>Контактное лицо:</h1>
        <TextInput
          id="surname"
          placeholder="фамилия"
          value={confidantData.surname}
          onChange={(e) => handle(e)}
        />
        <TextInput
          id="name"
          placeholder="имя"
          value={confidantData.name}
          onChange={(e) => handle(e)}
        />
        <TextInput
          id="middlename"
          placeholder="отчество"
          value={confidantData.middlename}
          onChange={(e) => handle(e)}
        />
        <TextInput
          id="phone"
          placeholder="телефон"
          value={confidantData.phone}
          type = "tel"
          mask="+7\(999) 999 99 99"
          onChange={(e) => handle(e)}
        />
      </div>
      <Arrow onClick={() => setStep(2)} back/>
      <Arrow onClick={register}/>
    </div>
  );
}

export default FourthCompanyStep;
