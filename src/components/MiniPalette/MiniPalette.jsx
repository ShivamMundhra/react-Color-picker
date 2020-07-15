import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "white",
    width: "31.5%",
    height: "25vh",
    borderRadius: "5px",
    margin: ".8vw 0",
    cursor: "pointer",
    textDecoration: "none",
    color: "black",
  },
  color: {
    width: "20%",
    height: "25%",
  },
  colorBox: {
    width: "95%",
    height: "80%",
    margin: "2.5% auto",
    backgroundColor: "#bbb",
    display: "flex",
    flexWrap: "wrap",
  },
  title: {
    margin: "0 3%",
    display: "flex",
    justifyContent: "space-between",
  },
});

const MiniPalette = (props) => {
  const styles = useStyles();
  return (
    <Link to={`/palette/${props.id}`} className={styles.root}>
      <div className={styles.colorBox}>
        {props.colors.map((color, i) => (
          <div
            className={styles.color}
            style={{ backgroundColor: color.color }}
          />
        ))}
      </div>
      <h5 className={styles.title}>
        {props.paletteName} <span>{props.emoji}</span>
      </h5>
    </Link>
  );
};

export default MiniPalette;
