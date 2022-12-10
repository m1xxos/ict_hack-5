import React, { useState } from "react";
import { useCookies } from "react-cookie";
import styles from './registrationPage.module.scss'
import api from "../../axios/axios";
import Header from "../Header";
import FirstStep from "./firstStep";
import { Route, Routes } from "react-router-dom";
import SecondStudentStep from "./secondStudentStep";
import ThirdStudentStep from "./thirdStudentStep";

function RegistrationPage () {
    const [step, setStep] = useState(0)
    const [type, setType] = useState(undefined)
    const [studentData, setStudentData] = useState({
        name: "",
        middlename: "",
        surname: "",
        email: "",
        phone: "",
        password: "",
        passwordConfirm: ""
      });


      function RenderStep(type, step) {
        if (type === "student"){
            return (step === 1 ? <SecondStudentStep studentData={studentData} setStudentData={setStudentData} setStep={setStep}/> : <ThirdStudentStep/>)
        }
        else {

        }
      }
    return(
    <div className={styles.main}>
        <Header/>  
        {!type || step === 0 ? <FirstStep setStep={setStep} setType={setType}/> : RenderStep(type, step)}
    </div>)
}

export default RegistrationPage;