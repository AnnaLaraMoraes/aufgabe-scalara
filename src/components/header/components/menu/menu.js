import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./menu.module.scss";
import { ButtonMenu } from "./button-menu";

export const Menu = ({ isLateralMenu, handleOpenMenuLateral }) => {
  const [selectedMenu, setSelectedMenu] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    setSelectedMenu(window.location.pathname);
  }, [window.location.pathname]);

  const handleMenu = (url) => {
    navigate(url);

    if (isLateralMenu) {
      handleOpenMenuLateral();
    }
  };
  return (
    <div className={styles[isLateralMenu ? "menuMobile" : "menuDesktop"]}>
      <ButtonMenu
        selectedMenu={selectedMenu}
        handleMenu={handleMenu}
        idUrl="/hypotenuse"
        name="Hypotenuse"
      />

      <ButtonMenu
        selectedMenu={selectedMenu}
        handleMenu={handleMenu}
        idUrl="/mod"
        name="Ganzzahligen Rest ausgeben"
      />

      <ButtonMenu
        selectedMenu={selectedMenu}
        handleMenu={handleMenu}
        idUrl="/circumference"
        name="Kreisumfang"
      />

      {isLateralMenu && (
        <>
          <ButtonMenu
            selectedMenu={selectedMenu}
            handleMenu={handleMenu}
            idUrl="/historic"
            name="Geschichte"
          />

          <ButtonMenu
            selectedMenu={selectedMenu}
            handleMenu={handleMenu}
            idUrl="/explanation"
            name="Erklärungen"
          />
        </>
      )}
    </div>
  );
};
