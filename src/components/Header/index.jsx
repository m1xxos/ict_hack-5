import React from "react";
import { useNavigate } from "react-router-dom";
import ItmoButton from "../ItmoButton";
import styles from './header.module.scss'

function Header ({popupHidden, setPopupHidden}) {
    const navigate = useNavigate()
    return(
        <div class={styles.header}>
                <ItmoButton onClick={() => navigate('/')}/>
                <div className={styles.header_title} onClick={() => navigate('/students')}>[СТУДЕНТЫ]</div>
                <div className={styles.header_title} onClick={() => navigate('/projects')}>[ПРОЕКТЫ]</div>
                <div className={styles.header_title} onClick={() => navigate('/burse')}>[БИРЖА]</div>
                <button className={styles.lkButton} onClick={() => {setPopupHidden(!popupHidden)}}>Войти в ЛК</button>
            </div>
    )
}
export default Header;