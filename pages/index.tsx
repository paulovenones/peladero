import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.title}>
        <h1>Que tal um grupo para a sua pelada?</h1>
      </div>
      <div className={styles.homeButtons}>
        <Link href="#" className={styles.callToAction}>Criar já</Link>
        <Link href="#" className={styles.secondaryButton}>Entrar em existente</Link>
      </div>
    </div>
  )
}
