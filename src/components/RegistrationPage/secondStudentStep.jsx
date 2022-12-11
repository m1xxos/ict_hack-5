import React, { useState } from "react";
import { useCookies } from "react-cookie";
import api from "../../axios/axios";
import Arrow from "../Arrow";
import TextInput from "../UI/TextInput";
import styles from "./registrationPage.module.scss";

function SecondStudentStep({studentData, setStudentData, setStep}) {
  const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);

  function handle(e) {
    let newData = { ...studentData };
    newData[e.target.id] = e.target.value;
    setStudentData(newData);
  }

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <TextInput
          id="surname"
          placeholder="фамилия"
          value={studentData.surname}
          onChange={(e) => handle(e)}
        />
        <TextInput
          id="name"
          placeholder="имя"
          value={studentData.name}
          onChange={(e) => handle(e)}
        />
        <TextInput
          id="middlename"
          placeholder="отчество"
          value={studentData.middlename}
          onChange={(e) => handle(e)}
        />
        <TextInput
          id="email"
          placeholder="email"
          type = "email"
          value={studentData.email}
          onChange={(e) => handle(e)}
        />
        <TextInput
          id="phone"
          placeholder="телефон"
          value={studentData.phone}
          type = "tel"
          mask="+7\(999) 999 99 99"
          onChange={(e) => handle(e)}
        />
        <TextInput
          id="password"
          placeholder="пароль"
          value={studentData.password}
          type = "password"
          onChange={(e) => handle(e)}
        />
        <TextInput
          id="passwordConfirm"
          placeholder="повторите пароль"
          value={studentData.passwordConfirm}
          type = "password"
          onChange={(e) => handle(e)}
        />
      </div>
      <Arrow onClick={() => setStep(0)} back/>
      <Arrow onClick={() => setStep(2)}/>
    </div>
  );
}

export default SecondStudentStep;
