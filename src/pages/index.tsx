import Button from "../ components/Button";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <h1>Que tal um grupo para a sua pelada?</h1>

      <div className={styles.homeButtons}>
        <Button href="/create-group" priority="primary">
          Criar já
        </Button>
        <Button href="#" priority="secondary">
          Entrar em existente
        </Button>
      </div>
    </div>
  );
}
