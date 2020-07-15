import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./slider.css";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

const Navbar = (props) => {
  const [format, setFormat] = useState("hex");
  const [showFeedback, setShowFeedback] = useState(false);
  const handleChange = (event) => {
    setFormat(event.target.value);
    setShowFeedback(true);
    props.handleFormatChange(event.target.value);
  };
  const closeSnackBar = () => {
    setShowFeedback(false);
  };
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link to="/">Picky</Link>
      </div>
      <div className={styles.sliderBox}>
        <span>Level:{props.level}</span>
        <div className={styles.slider}>
          <Slider
            defaultValue={props.level}
            min={100}
            max={900}
            onAfterChange={props.handleLevelChange}
            step={100}
          />
        </div>
      </div>
      <div className={styles.selectContainer}>
        <Select value={format} onChange={handleChange}>
          <MenuItem value="hex">HEX</MenuItem>
          <MenuItem value="rgb">RGB</MenuItem>
          <MenuItem value="rgba">RGBA</MenuItem>
        </Select>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={showFeedback}
        autoHideDuration={3000}
        message={
          <span id="message-id">Format changed to {format.toUpperCase()}</span>
        }
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        onClose={closeSnackBar}
        action={
          <IconButton
            onClick={closeSnackBar}
            color="inherit"
            key="close"
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        }
      />
    </nav>
  );
};

export default Navbar;
