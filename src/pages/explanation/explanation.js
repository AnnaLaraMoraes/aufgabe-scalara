import styles from "./explanation.module.scss";
import { Layout } from "../../components/layout/layout";

export const Explanation = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div>
          <h1>Hypotenuse berechnen</h1>
          <a href="https://de.wikipedia.org/wiki/Hypotenuse#:~:text=In%20der%20Geometrie%20ist%20Hypotenuse,der%20beiden%20anderen%20Seiten%20ist.">
            In der Geometrie ist Hypotenuse die Seite gegenüber dem rechten
            Winkel eines Dreiecks. Die Länge der Hypotenuse eines rechtwinkligen
            Dreiecks kann mit dem Satz des Pythagoras ermittelt werden, der
            besagt, dass das Quadrat der Länge der Hypotenuse gleich der Summe
            der Quadrate der Längen der beiden anderen Seiten ist. Wenn zum
            Beispiel eine der Katheten eine Länge von 3 cm (im Quadrat 9 cm²)
            und die andere eine Länge von 4 cm (im Quadrat 16 cm²) hat, addieren
            sich ihre Quadrate zu 25 cm². Die Länge der Hypotenuse ist die
            Quadratwurzel von 25 cm², das sind 5 cm.
          </a>
        </div>
        <div>
          <h1>Ganzzahligen Rest ausgeben</h1>
          <a href="https://de.wikipedia.org/wiki/Division_mit_Rest">
            Die Division mit Rest oder der Divisionsalgorithmus ist ein
            mathematischer Satz aus der Algebra und der Zahlentheorie. Er
            besagt, dass es zu zwei Zahlen n und m\neq 0 eindeutig bestimmte
            Zahlen a und b gibt, für die gilt. Die Zahlen a und b lassen sich
            durch die schriftliche Division ermitteln. Die Division mit Rest ist
            auch für Polynome definiert. Die allgemeinste mathematische
            Struktur, in der es eine Division mit Rest gibt, ist der euklidische
            Ring.
          </a>
        </div>
        <div>
          <h1>Kreisumfang berechnen</h1>
          <a href="https://de.wikipedia.org/wiki/Kreis">
            Ein Kreis ist eine ebene geometrische Figur. Er wird definiert als
            die Menge aller Punkte einer Ebene, die den gleichen Abstand zu
            einem bestimmten Punkt dieser Ebene (dem Mittelpunkt) haben. Der
            Abstand der Kreispunkte zum Mittelpunkt ist der Radius oder
            Halbmesser des Kreises, er ist eine positive reelle Zahl. Der Kreis
            gehört zu den klassischen und grundlegenden Objekten der
            euklidischen Geometrie. Umgangssprachlich wird mit dem Begriff Kreis
            häufig auch eine Kreisfläche oder eine runde Scheibe bezeichnet.
            Bereits die alten Ägypter und Babylonier versuchten, den
            Flächeninhalt des Kreises näherungsweise zu bestimmen. In der
            griechischen Antike stieß der Kreis wegen seiner Vollkommenheit auf
            Interesse. Archimedes versuchte erfolglos, den Kreis mit den
            Werkzeugen Zirkel und Lineal in ein Quadrat mit gleichem
            Flächeninhalt zu überführen, um so den Flächeninhalt des Kreises
            bestimmen zu können (siehe Quadratur des Kreises). Erst 1882 konnte
            Ferdinand von Lindemann durch den Nachweis einer besonderen
            Eigenschaft der Kreiszahl, nämlich der Transzendenz, zeigen, dass
            diese Aufgabe unlösbar ist.
          </a>
        </div>
      </div>
    </Layout>
  );
};
