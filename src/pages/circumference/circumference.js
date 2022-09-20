import { useRef, useState } from "react";
import styles from "./circumference.module.scss";
import { Layout } from "../../components/layout/layout";
import { Input } from "../../components/input/input";
import { Button } from "../../components/button/button";
import circumferenceImg from "../../images/circumference.png";

export const Circumference = () => {
  const inputA = useRef(null);
  const [resultCalcule, setResultCalcule] = useState(null);

  const handleStorage = (data) => {
    let newArray = [];
    newArray = JSON.parse(localStorage.getItem("Circumference")) || [];
    newArray.push(data);
    localStorage.setItem("Circumference", JSON.stringify(newArray));
  };

  const calculate = () => {
    if (inputA.current.value) {
      setResultCalcule(inputA.current.value * 3.1415);

      const newCalc = {
        inputA: inputA.current.value,
        result: inputA.current.value * 3.1415,
      };

      handleStorage(newCalc);

      inputA.current.value = null;
    } else {
      alert("Sie müssen den Durchmesser eingeben");
    }
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h1>Kreisumfang berechnen</h1>
        <label>
          Mit dem Durchmesser eines Kreises kann hier der Umfang berechnet
          werden.
        </label>
        <img alt="" src={circumferenceImg} />
        <Input type="number" reference={inputA} title="Durchmesser" />
        <Button title="kalkuliert" onClick={calculate} />
        {resultCalcule && <h2>Ergebnis: {resultCalcule}</h2>}
      </div>
    </Layout>
  );
};
