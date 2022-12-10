import React, { useState } from "react";
import { useCookies } from "react-cookie";
import styles from './registrationPage.module.scss'
import api from "../../axios/axios";
import Header from "../Header";
import FirstStep from "./firstStep";
import { Route, Routes } from "react-router-dom";
import SecondStep from "./secondStep";

function RegistrationPage () {
    let [step, setStep] = useState(0)
    console.log(step)
    return(<div className={styles.main}>
        <Header/>  
        { step === 0 ? <FirstStep setStep={setStep}/> : <SecondStep setStep={setStep}/>}
    </div>)
}

export default RegistrationPage;