import React, { useState } from "react";
import { useCookies } from "react-cookie";
import styles from './registrationPage.module.scss'
import api from "../../axios/axios";

function RegistrationPage () {
    return(<div class={styles.main}>
        <div class={styles.header}></div>
        <div class={styles.bottom}></div>
    </div>)
}

export default RegistrationPage;