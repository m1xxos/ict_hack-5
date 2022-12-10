import React from "react";
import styles from './registrationPage.module.scss'
function FirstStep ({setStep, setType}) {
    return(
        <div className={styles.first_step}>
            <h1 className={styles.title}>кто вы?</h1>
            <button className={styles.role} onClick={() => {setType("student");setStep(1)}}>студент</button>
            <button className={styles.role} onClick={() => {setType("company");setStep(1)}}>компания</button>
        </div>
    )
}

export default FirstStep;