import styles from "./button.module.scss";

export const Button = ({ selectedMenu, handleMenu, urlId, name }) => {
  return (
    <button
      className={[
        styles[selectedMenu === urlId ? "selectedButton" : "notSelectedButton"],
        styles.menuButton,
      ].join(" ")}
      onClick={() => handleMenu(urlId)}
    >
      {name}
    </button>
  );
};
