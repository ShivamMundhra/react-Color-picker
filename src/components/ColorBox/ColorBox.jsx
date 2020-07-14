import React from "react";
import styles from "./ColorBox.module.css";

const ColorBox = (props) => {
  const { name, background } = props;
  return (
    <div style={{ background: background }} className={styles.ColorBox}>
      <button className={styles.copyBtn}>copy</button>
      <span className={styles.name}>{name}</span>
      <span className={styles.more}>More</span>
    </div>
  );
};

export default ColorBox;
