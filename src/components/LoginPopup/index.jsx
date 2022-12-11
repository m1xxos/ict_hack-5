import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import api from "../../axios/axios";
import ItmoButton from "../ItmoButton";
import TextInput from "../UI/TextInput";
import styles from './popup.module.scss'

function LoginPopup ({setPopupHidden, hidden = false}) {

    const [loginData, setLoginData] = useState(
        {
            email: "",
            password: ""
        }
    )

    function handle(e) {
        let newData = { ...loginData };
        newData[e.target.id] = e.target.value;
        setLoginData(newData);
      }
      
      async function login() {
          api.login(loginData.email, loginData.password)
          setPopupHidden(true)
      }
    const navigate = useNavigate()
    return(
    <>
    {!hidden && 
        <div className={styles.main}>
            <h1>авторизация</h1>
            <TextInput
            id="email"
            placeholder="email"
            value={loginData.email}
            onChange={(e) => handle(e)}
            />
            <TextInput
            id="password"
            placeholder="password"
            type="password"
            value={loginData.password}
            onChange={(e) => handle(e)}
            />
            <button className={styles.loginButton} onClick={login}>войти</button>
        </div>
    }
    </>
    )
}
export default LoginPopup;