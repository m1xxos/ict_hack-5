import React from "react";
import styles from './arrow.module.scss'

function Arrow ({back = false, onClick}) {
    return(
        <button className={styles.arrow} onClick={onClick}>
            {!back && <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#FFFFFF" class="bi bi-chevron-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/> </svg>}
            {back && <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#FFFFFF" class="bi bi-chevron-left" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/> </svg>}
        </button>
    )
}

export default Arrow