import styles from "./side-bar.module.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const SideBar = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    setSelectedMenu(window.location.pathname);
  }, [window.location.pathname]);

  const handleMenu = (url) => {
    setSelectedMenu(window.location.pathname);
    navigate(url);
  };

  return (
    <div className={styles.container}>
      <h2>Optionen</h2>
      <div className={styles.menuItens}>
        <button
          className={[
            styles[
              selectedMenu === "/historic"
                ? "selectedButton"
                : "notSelectedButton"
            ],
            styles.menuButton,
          ].join(" ")}
          onClick={() => handleMenu("/historic")}
        >
          Geschichte
        </button>
        <button
          className={[
            styles[
              selectedMenu === "/explanation"
                ? "selectedButton"
                : "notSelectedButton"
            ],
            styles.menuButton,
          ].join(" ")}
          onClick={() => handleMenu("/explanation")}
        >
          Erklärungen
        </button>
      </div>
    </div>
  );
};
