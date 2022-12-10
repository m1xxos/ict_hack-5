import React from "react";
import styles from './textInput.module.scss'
import InputMask from "react-input-mask";

function TextInput({id, placeholder, value, onChange, mask = undefined, password = false}) {
    return(
        <InputMask
          id={id}
          type={password ? "password" : "text"}
          placeholder={placeholder}
          value={value}
            onChange={onChange}
            mask={mask}
            className={styles.input}
        />
    )
}

export default TextInput;