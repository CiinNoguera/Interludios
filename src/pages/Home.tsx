import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home() {
  return (
    <main className={styles.homeContainer}>
      <h1 className={styles.title}>Bienvenido a Interludios</h1>
      <p className={styles.intro}>
        En <strong>Interludios</strong> cada historia es una puerta, y cada decisión, un nuevo universo.
        Sumergite en relatos que te invitan a elegir, explorar y sentir. 
        Leé historias creadas por otros soñadores, o animate a escribir la tuya y guiar a otros a través de los caminos que inventás.
        Tu aventura comienza aquí.
      </p>
      <div className={styles.homeButtons}>
        <Link to="/historias">
          <button className={styles.button}>Leer historias</button>
        </Link>
        <Link to="/crear">
          <button className={styles.button}>Crear tu historia</button>
        </Link>
      </div>
    </main>
  )
}