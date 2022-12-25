import React from "react";

import styles from "./TextInput.module.css";

interface TextInputProps {
  inputName: string;
  labelText?: string;
  inputType?: "text" | "number";
}

const TextInput: React.FC<TextInputProps> = ({
  inputName,
  labelText,
  inputType = "text",
}) => {
  return (
    <div>
      <div className={styles.inputBlock}>
        <input
          className={styles.input}
          type={inputType}
          name={inputName}
          id={inputName}
          required
        />
        <span className={styles.placeholder}>{labelText}</span>
      </div>
    </div>
  );
};

export default TextInput;
