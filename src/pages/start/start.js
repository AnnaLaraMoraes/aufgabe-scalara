import styles from "./start.module.scss";
import { Layout } from "../../components/layout/layout";
import { Button } from "../../components/button/button";
import { useNavigate } from "react-router-dom";

export const Start = () => {
  let navigate = useNavigate();
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Wählen Sie, was Sie berechnen möchten</h1>
        <label>Bei welcher Berechnung wollen Sie unterstützt werden?</label>
        <Button
          title="Hypotenuse berechnen"
          onClick={() => navigate("/hypotenuse")}
        />
        <Button
          title="Ganzzahligen Rest ausgeben"
          onClick={() => navigate("/mod")}
        />
        <Button
          title="Kreisumfang berechnen"
          onClick={() => navigate("/circumference")}
        />
      </div>
    </Layout>
  );
};
