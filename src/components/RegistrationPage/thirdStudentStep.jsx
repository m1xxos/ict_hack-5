import React, { useRef, useState, useNavigate } from "react";
import { useCookies } from "react-cookie";
import api from "../../axios/axios";
import Arrow from "../Arrow";
import TextInput from "../UI/TextInput";
import styles from "./registrationPage.module.scss";

function ThirdStudentStep({ setStep, studentData, studentAdditionalData, setStudentAdditionalData }) {
  const navigate = useNavigate
  let textInputRef = useRef();
  const [skillInput, setSkillInput] = useState(false)
  const [newSkill, setNewSkill] = useState("")

  function handle(e) {
    let newData = { ...studentAdditionalData };
    newData[e.target.id] = e.target.value;
    setStudentAdditionalData(newData);
  }

  function handleSkill(e) {
    let newSkillInput = newSkill;
    newSkillInput = e.target.value;
    setNewSkill(newSkillInput);
  }

  function addSkill(e = false) {
    if (e && e.keyCode !== 13) return
    if (newSkill === "") return
    let newStudentAdditionalData = { ...studentAdditionalData }
    if (newStudentAdditionalData.skills.indexOf(newSkill) === -1) {
      newStudentAdditionalData.skills.push(newSkill)
      setStudentAdditionalData(newStudentAdditionalData)
      setNewSkill("")
    }
    else alert('уже есть такое еп та')
  }

  function removeSkill(data) {
    let newStudentAdditionalData = { ...studentAdditionalData }
    const id = newStudentAdditionalData.skills.indexOf(data)
    if (id !== -1) newStudentAdditionalData.skills.splice(id, 1)
    setStudentAdditionalData(newStudentAdditionalData)
  }

  async function register(e) {
    e.preventDefault();
    if (studentData.password !== studentData.passwordConfirm) {
      alert('Не совпадают пароль и повторно введенный он же')
      return
    }

    api.register(studentData);
    navigate('/')
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
          placeholder="расскажите об интересах.."
          value={studentAdditionalData.interests}
          onChange={(e) => handle(e)}
        />
        <h1>ключевые навыки:</h1>
        {
          studentAdditionalData.skills &&
          studentAdditionalData.skills.map((data, index) => <button className={styles.role} key={index} onClick={() => removeSkill(data)}>{data}</button>)
        }
        {skillInput && <TextInput
          refProp={textInputRef}
          id="skill"
          type="text"
          value={newSkill}
          onChange={handleSkill}
          onKeyDown={(e) => addSkill(e)}
        />}
        {!skillInput && <button onClick={() => setSkillInput(true)} className={styles.addSkillButton}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#FFFFFF" class="bi bi-plus-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" /> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" /> </svg>
        </button>}
        {skillInput && <button onClick={() => addSkill()} className={styles.addSkillButton} >        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#FFFFFF" class="bi bi-plus-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" /> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" /> </svg>
        </button>}
      </div>
      <Arrow onClick={() => { setStep(1) }} back></Arrow>
      <Arrow onClick={register}></Arrow>
    </div>
  );
}

export default ThirdStudentStep;
