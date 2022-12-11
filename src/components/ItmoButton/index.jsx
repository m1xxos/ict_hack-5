import React from 'react'
import styles from './itmoButton.module.scss'
function ItmoButton ({onClick}) {
    return(
        <button className={styles.itmo} onClick={onClick}>
            ИТМО
        </button>
    )
}

export default ItmoButton;