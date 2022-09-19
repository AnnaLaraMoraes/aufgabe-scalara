import { useRef, useState } from "react";
import styles from "./hypotenuse.module.scss";
import { Layout } from "../../components/layout/layout";
import { Input } from "../../components/input/input";
import { Button } from "../../components/button/button";
import hypotenuseImg from "../../images/hypotenuse.png";

export const Hypotenuse = () => {
  const inputA = useRef(null);
  const inputB = useRef(null);
  const [resultCalcule, setResultCalcule] = useState(null);

  const handleStorage = (data) => {
    let newArray = [];
    newArray = JSON.parse(localStorage.getItem("Hypotenuse")) || [];
    newArray.push(data);
    localStorage.setItem("Hypotenuse", JSON.stringify(newArray));
  };

  const calculate = () => {
    setResultCalcule(
      Math.sqrt(
        inputA.current.value * inputA.current.value +
          inputB.current.value * inputB.current.value
      )
    );

    const newCalc = {
      inputA: inputA.current.value,
      inputB: inputB.current.value,
      result: Math.sqrt(
        inputA.current.value * inputA.current.value +
          inputB.current.value * inputB.current.value
      ),
    };

    handleStorage(newCalc);

    inputA.current.value = null;
    inputB.current.value = null;
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h1>Hypotenuse</h1>
        <label>
          Anhand von Ankathete und Gegenkathete die Länge der Hypotenuse
          berechnen.
        </label>
        <img alt="" src={hypotenuseImg} />
        <Input type="number" reference={inputA} title="Ankathete" />
        <Input type="number" reference={inputB} title="Gegenkathete" />
        <Button title="kalkuliert" onClick={calculate} />
        {resultCalcule && <h2>Ergebnis: {resultCalcule}</h2>}
      </div>
    </Layout>
  );
};
