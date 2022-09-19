import styles from "./input.module.scss";

export const Input = ({ title, reference, type }) => {
  return (
    <div className={styles.container}>
      <label>{title}</label>
      <input type={type.toString()} ref={reference} />
    </div>
  );
};
