import React from "react";
import ColorBox from "../ColorBox/ColorBox";
import styles from "./Palette.module.css";

const Palette = (props) => {
  const renderColorBox = () =>
    props.colors.map((color, i) => (
      <ColorBox background={color.color} name={color.name} />
    ));
  return (
    <div className={styles.Palette}>
      <div className={styles.PaletteBoxes}>{renderColorBox()}</div>
    </div>
  );
};

export default Palette;
