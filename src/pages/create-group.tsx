import React from "react";
import Button from "../ components/Button";
import TextInput from "../ components/TextInput";
import axios from "axios";

import styles from "../styles/CreateGroup.module.css";

const CreateGroup: React.FC = () => {
  return (
    <div className={styles.formPage}>
      <h1>Preencha alguns dados sobre o seu grupo</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const groupName = (
            document.querySelector("#groupName") as HTMLInputElement
          ).value;
          const playersQuantity = (
            document.querySelector("#playersQuantity") as HTMLInputElement
          ).value;

          await axios.post(`/api/create-group`, {
            groupName,
            playersQuantity,
          });
        }}
        action="/api/create-group"
        method="post"
        className={styles.form}
      >
        <TextInput inputName="groupName" labelText="Nome do seu grupo" />
        <TextInput
          inputName="playersQuantity"
          labelText="Jogadores por equipe"
          inputType="number"
        />
        <Button buttonType="submit" onClick={() => {}} priority="primary">
          Confirmar
        </Button>
      </form>
    </div>
  );
};

export default CreateGroup;
