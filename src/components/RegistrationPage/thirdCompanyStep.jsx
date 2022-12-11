import React, { useRef, useState } from "react";
import { useCookies } from "react-cookie";
import api from "../../axios/axios";
import Arrow from "../Arrow";
import TextInput from "../UI/TextInput";
import styles from "./registrationPage.module.scss";

function ThirdCompanyStep({setStep, companyAdditionalData, setCompanyAdditionalData}) {
    let textInputRef = useRef();
    const [skillInput, setSkillInput] = useState(false)
    const [newSkill, setNewSkill] = useState("")

  function handle(e) {
    let newData = { ...companyAdditionalData };
    newData[e.target.id] = e.target.value;
    setCompanyAdditionalData(newData);
  }

  function handleSkill(e) {
    let newSkillInput = newSkill;
    newSkillInput = e.target.value;
    setNewSkill(newSkillInput);
  }

  function addSkill(e = false) {
    if (e && e.keyCode !== 13) return
    if (newSkill === "") return
    let newStudentAdditionalData = {...companyAdditionalData}
    if (newStudentAdditionalData.skills.indexOf(newSkill) === -1) {
        newStudentAdditionalData.skills.push(newSkill)
        setCompanyAdditionalData(newStudentAdditionalData)
        setNewSkill("")
    }
    else alert('уже есть такое еп та')
  }

  function removeSkill (data) {
    let newStudentAdditionalData = {...companyAdditionalData}
    const id = newStudentAdditionalData.skills.indexOf(data)
    if (id !== -1) newStudentAdditionalData.skills.splice(id, 1)
    setCompanyAdditionalData(newStudentAdditionalData)
  }

  function postAdditionalData(e) {
    e.preventDefault();

    //const res = api.register(studentData);

  }

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <textarea
        id="interests"
          placeholder="расскажите о деятельности компании..."
          value={companyAdditionalData.interests}
          onChange={(e) => handle(e)}
        />
        <h1>ключевые направления работы:</h1>
        {
        companyAdditionalData.skills &&
        companyAdditionalData.skills.map((data, index) => <button className={styles.role} key={index} onClick={() => removeSkill(data)}>{data}</button>)
        }
        {skillInput && <TextInput
        refProp={textInputRef}
        id="skill"
        type="text"
        value={newSkill}
        onChange={handleSkill}
        onKeyDown={(e)=>addSkill(e)}
        />}
        {!skillInput && <button onClick={() => setSkillInput(true)} className={styles.addSkillButton}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#FFFFFF" class="bi bi-plus-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/> </svg>
</button>}
        {skillInput && <button onClick={() => addSkill()} className={styles.addSkillButton} >        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#FFFFFF" class="bi bi-plus-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/> </svg>
</button>}
      </div>
      <Arrow onClick={() => {setStep(1)}} back></Arrow>
      <Arrow onClick={() => {setStep(3)}}></Arrow>
    </div>
  );
}

export default ThirdCompanyStep;
