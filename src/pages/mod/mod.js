import { useRef, useState } from "react";
import styles from "./mod.module.scss";
import { Layout } from "../../components/layout/layout";
import { Input } from "../../components/input/input";
import { Button } from "../../components/button/button";
import modImg from "../../images/mod.png";

export const Mod = () => {
  const inputA = useRef(null);
  const inputB = useRef(null);
  const [resultCalcule, setResultCalcule] = useState(null);

  const handleStorage = (data) => {
    let newArray = [];
    newArray = JSON.parse(localStorage.getItem("Mod")) || [];
    newArray.push(data);
    localStorage.setItem("Mod", JSON.stringify(newArray));
  };

  const calculate = () => {
    if (inputA.current.value && inputB.current.value) {
      setResultCalcule(inputA.current.value % inputB.current.value);

      const newCalc = {
        inputA: inputA.current.value,
        inputB: inputB.current.value,
        result: inputA.current.value % inputB.current.value,
      };

      handleStorage(newCalc);

      inputA.current.value = null;
      inputB.current.value = null;
    } else {
      alert("Sie müssen den Zahl und Divisor eingeben");
    }
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h1>Ganzzahligen Rest ausgeben</h1>
        <label>
          Ausgehend von einer Zahl wird der ganzzahlige Rest einer Division
          berechnet.
        </label>
        <img alt="" src={modImg} />
        <Input type="number" reference={inputA} title="Zahl" />
        <Input type="number" reference={inputB} title="Divisor" />
        <Button title="kalkuliert" onClick={calculate} />
        {resultCalcule && <h2>Ergebnis: {resultCalcule}</h2>}
      </div>
    </Layout>
  );
};
