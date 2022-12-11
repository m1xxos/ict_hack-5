import React from "react";
import styles from './textInput.module.scss'
import InputMask from "react-input-mask";

function TextInput({id, placeholder, value, onChange, mask = undefined, type = "text", refProp = undefined, ...otherProps}) {
 
    return(
        <InputMask
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
            onChange={onChange}
            onKeyDown = {otherProps.onKeyDown || undefined}
            mask={mask}
            ref = {refProp}
            className={styles.input}
        />
    )
}

export default TextInput;