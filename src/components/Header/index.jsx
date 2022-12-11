import React, { useEffect } from "react";
import styles from './header.module.scss'

function RegistrationHeader ({stepNumber}) {
    
    return(
    <div className={styles.main}>
        <div className={styles.itmo}>
            ИТМО
        </div>
        <div className={styles.steps}>
            {stepNumber === 3 ? <><div>1</div><div>—</div><div>2</div><div>—</div><div>3</div></> : <><div>1</div><div>—</div><div>2</div><div>—</div><div>3</div><div>—</div><div>4</div></>}
        </div>

        <div className={styles.registration}>
            регистрация
        </div>
    </div>
    )
}

export default RegistrationHeader;