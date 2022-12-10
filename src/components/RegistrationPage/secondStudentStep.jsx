import React, { useState } from "react";
import { useCookies } from "react-cookie";
import api from "../../axios/axios";
import TextInput from "../UI/TextInput";
import styles from "./registrationPage.module.scss";

function SecondStudentStep({studentData, setStudentData, setStep}) {
  const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);

  function handle(e) {
    let newData = { ...studentData };
    newData[e.target.id] = e.target.value;
    setStudentData(newData);
  }

  function register(e) {
    e.preventDefault();
    if (studentData.password !== studentData.passwordConfirm){
      alert('Не совпадают пароль и повторно введенный он же')
      return
    }

    const res = api.register(studentData);

    setStep(2)
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
          value={studentData.email}
          onChange={(e) => handle(e)}
        />
        <TextInput
          id="phone"
          placeholder="телефон"
          value={studentData.phone}
          mask="+7\(999) 999 99 99"
          onChange={(e) => handle(e)}
        />
        <TextInput
          id="password"
          placeholder="пароль"
          value={studentData.password}
          password
          onChange={(e) => handle(e)}
        />
        <TextInput
          id="passwordConfirm"
          placeholder="повторите пароль"
          value={studentData.passwordConfirm}
          password
          onChange={(e) => handle(e)}
        />
      </div>
      <button onClick={() => setStep(0)}></button>
      <button onClick={register}></button>
    </div>
  );
}

export default SecondStudentStep;
