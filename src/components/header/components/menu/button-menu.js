import styles from "./button-menu.module.scss";

export const ButtonMenu = ({ selectedMenu, handleMenu, idUrl, name }) => {
  return (
    <button
      className={[
        styles[selectedMenu === idUrl ? "selectedButton" : "notSelectedButton"],
        styles.menuButton,
      ].join(" ")}
      onClick={() => handleMenu(idUrl)}
    >
      {name}
    </button>
  );
};
