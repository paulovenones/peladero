import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
      <div className="">
        <h1>Que tal um grupo para a sua pelada?</h1>
      </div>
      <div className={styles.homeButtons}>
        <button className={styles.callToAction}>Criar já</button>
        <button className={styles.secondaryButton}>Entrar em existente</button>
      </div>
    </div>
  )
}
