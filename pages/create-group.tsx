import React from "react";
import Button from "../ components/Button";
import TextInput from "../ components/TextInput";

import styles from "../styles/CreateGroup.module.css";

const CreateGroup: React.FC = () => {
  return (
    <div>
      <h1>Qual nome você quer dar para seu grupo?</h1>
      <form action="/api/create-group" method="post" className={styles.form}>
        <TextInput inputName="groupName" />
        <Button onClick={() => {}} priority="primary">
          Confirmar
        </Button>
      </form>
    </div>
  );
};

export default CreateGroup;
