import React from "react";
import styles from './header.module.scss'

function Header () {
    return(
    <div className={styles.main}>
        <div className={styles.itmo}>
            ИТМО
        </div>
        <div className={styles.steps}>
            <div>1</div>
            <div>—</div>
            <div>2</div>
            <div>—</div>
            <div>3</div>
        </div>

        <div className={styles.registration}>
            регистрация
        </div>
    </div>
    )
}

export default Header;