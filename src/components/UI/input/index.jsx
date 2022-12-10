import React from "react";
import styles from './input.module.scss'

function Input({placeholder}) {
    return(
        <input
          id="name"
          type="text"
          placeholder={placeholder}
            className={styles.input}
        />
    )
}

export default Input;