import styles from "./side-bar.module.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./components/button/button";

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
        <Button
          selectedMenu={selectedMenu}
          handleMenu={handleMenu}
          urlId="/historic"
          name="Geschichte"
        />

        <Button
          selectedMenu={selectedMenu}
          handleMenu={handleMenu}
          urlId="/explanation"
          name="Erklärungen"
        />
      </div>
    </div>
  );
};
