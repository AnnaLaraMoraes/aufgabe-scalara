import styles from "./home.module.scss";
import { Layout } from "../../components/layout/layout";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  let navigate = useNavigate();

  return (
    <Layout>
      <h1 className={styles.h1}>Online-Rechner</h1>
      <h2 className={styles.h2}>Willkommen</h2>
      <p className={styles.p}>
        Online berechnen von Hypotenuse, Ganzzahligen Rest ausgeben und
        Kreisumfang
      </p>
      <button onClick={() => navigate("/start-page")} className={styles.button}>
        Jetzt starten
      </button>
    </Layout>
  );
};
