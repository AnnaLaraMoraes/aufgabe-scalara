import { useState, useEffect } from "react";
import styles from "./historic.module.scss";
import { Layout } from "../../components/layout/layout";

export const Historic = () => {
  const [mod, setMod] = useState(JSON.parse(localStorage.getItem("Mod")));
  const [circumference, setCircumference] = useState(
    JSON.parse(localStorage.getItem("Circumference"))
  );
  const [hypotenuse, setHypotenuse] = useState(
    JSON.parse(localStorage.getItem("Hypotenuse"))
  );

  useEffect(() => {
    setMod(JSON.parse(localStorage.getItem("Mod")));
    setCircumference(JSON.parse(localStorage.getItem("Circumference")));
    setHypotenuse(JSON.parse(localStorage.getItem("Hypotenuse")));
  }, [localStorage]);

  return (
    <Layout>
      <div className={styles.container}>
        <h1>Geschichte Ihrer Berechnungen</h1>
        {hypotenuse && hypotenuse.length > 0 && (
          <div>
            <h2>Hypotenuse berechnen</h2>
            <table>
              <tr>
                <th>Ankathete</th>
                <th>Gegenkathete</th>
                <th>Ergebnis</th>
              </tr>
              {hypotenuse.map((value) => (
                <tr>
                  <td> {value.inputA}</td>
                  <td> {value.inputB}</td>
                  <td> {value.result.toFixed(2)}</td>
                </tr>
              ))}
            </table>
          </div>
        )}
        {mod && mod.length > 0 && (
          <div>
            <h2>Ganzzahligen Rest ausgeben</h2>
            <table>
              <tr>
                <th>Zahl</th>
                <th>Divisor</th>
                <th>Ergebnis</th>
              </tr>
              {mod.map((value) => (
                <tr>
                  <td> {value.inputA}</td>
                  <td> {value.inputB}</td>
                  <td> {value.result}</td>
                </tr>
              ))}
            </table>
          </div>
        )}
        {circumference && circumference.length > 0 && (
          <div>
            <h2>Kreisumfang berechnen</h2>
            <table>
              <tr>
                <th>Durchmesser</th>
                <th>Ergebnis</th>
              </tr>
              {circumference.map((value) => (
                <tr>
                  <td> {value.inputA}</td>
                  <td> {value.result.toFixed(2)}</td>
                </tr>
              ))}
            </table>
          </div>
        )}
      </div>
    </Layout>
  );
};
