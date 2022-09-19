import styles from "./button.module.scss";

export const Button = ({ title, onClick }) => {
  return (
    <button className={styles.button} onClick={() => onClick()}>
      {title}
    </button>
  );
};
