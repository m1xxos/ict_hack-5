import React, { useState } from "react";
import { useCookies } from "react-cookie";
import styles from './registrationPage.module.scss'
import api from "../../axios/axios";
import Header from "../Header";
import FirstStep from "./firstStep";
import { Route, Routes } from "react-router-dom";
import SecondStudentStep from "./secondStudentStep";
import ThirdStudentStep from "./thirdStudentStep";
import SecondCompanyStep from "./secondCompanyStep";
import ThirdCompanyStep from "./thirdCompanyStep";
import FourthCompanyStep from "./fourthCompanyStep";

function RegistrationPage () {
  const [stepNumber, setStepNumber] = useState(3)

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
      const [studentAdditionalData, setStudentAdditionalData] = useState({
        interests: "",
        skills: []
      })
      const [companyAdditionalData, setCompanyAdditionalData] = useState({
        interests: "",
        skills: []
      })
      const [companyData, setCompanyData] = useState({
        title: "",
        INN: "",
        email: "",
        password: "",
        passwordConfirm: ""
      });
      const [confidantData, setConfidantData] = useState({
        surname: "",
        name: "",
        middlename: "",
        phone: ""
      });

      function RenderStep(type, step) {
        if (type === "student"){
            return (step === 1 ? <SecondStudentStep studentData={studentData} setStudentData={setStudentData} setStep={setStep}/> : <ThirdStudentStep setStep={setStep} studentAdditionalData={studentAdditionalData} setStudentAdditionalData={setStudentAdditionalData}/>)
        }
        else {
            return (step === 1 ? <SecondCompanyStep companyData={companyData} setCompanyData={setCompanyData} setStep={setStep}/> : step === 2 ? <ThirdCompanyStep setStep={setStep} companyAdditionalData={companyAdditionalData} setCompanyAdditionalData={setCompanyAdditionalData}/> : <FourthCompanyStep setStep={setStep} confidantData={confidantData} setConfidantData={setConfidantData}/>)
        }
      }
    return(
    <div className={styles.main}>
        <Header stepNumber={stepNumber}/>  
        {!type || step === 0 ? <FirstStep setStep={setStep} setType={setType} setStepNumber={setStepNumber}/> : RenderStep(type, step)}
    </div>)
}

export default RegistrationPage;