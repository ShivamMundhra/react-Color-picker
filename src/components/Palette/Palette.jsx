import React, { useState } from "react";
import ColorBox from "../ColorBox/ColorBox";
import styles from "./Palette.module.css";
import Navbar from "../Navbar/Navbar";

const Palette = (props) => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");
  const handleFormatChange = (val) => {
    setFormat(val);
  };
  const handleLevelChange = (newLevel) => {
    setLevel(newLevel);
  };
  const renderColorBox = () =>
    props.palette.colors[level].map((color, i) => (
      <ColorBox background={color[format]} name={color.name} />
    ));
  return (
    <div className={styles.Palette}>
      <Navbar
        level={level}
        handleLevelChange={handleLevelChange}
        handleFormatChange={handleFormatChange}
      />
      <div className={styles.PaletteBoxes}>{renderColorBox()}</div>
    </div>
  );
};

export default Palette;
