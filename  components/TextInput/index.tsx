import React from "react";

import styles from "./TextInput.module.css";

interface TextInputProps {
  inputName: string;
  labelText?: string;
}

const TextInput: React.FC<TextInputProps> = ({ inputName, labelText }) => {
  return (
    <div>
      <label htmlFor={inputName}>{labelText}</label>
      <input
        className={styles.textInput}
        type="text"
        id={inputName}
        name={inputName}
      />
    </div>
  );
};

export default TextInput;
