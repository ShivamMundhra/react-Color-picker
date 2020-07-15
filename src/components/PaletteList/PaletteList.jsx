import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import MiniPalette from "../MiniPalette/MiniPalette";
import bg from "../../assets/bg.svg";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#394bad",
    height: "100vh",
    justifyContent: "space-between",
    padding: "1vh 0",
  },
  paletteBoxes: {
    display: "flex",
    flexWrap: "wrap",
    width: "55%",
    justifyContent: "space-between",
  },
  footer: {
    color: "#fff",
    fontSize: "20px",
  },
  heading: {
    color: "#fff",
    fontSize: "36px",
  },
});

const PaltteList = (props) => {
  const styles = useStyles();
  return (
    <div className={styles.root} style={{ backgroundImage: `url(${bg})` }}>
      <div className={styles.heading}>Picky</div>
      <div className={styles.paletteBoxes}>
        {props.palettes.map((palette, i) => (
          // <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
          <MiniPalette {...palette} />
        ))}
      </div>
      <div className={styles.footer}>
        Made with{" "}
        <span role="img" aria-label="love">
          ❤️
        </span>{" "}
        By Shivam Mundhra
      </div>
    </div>
  );
};

export default PaltteList;
