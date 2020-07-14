import React, { useState } from "react";
import styles from "./ColorBox.module.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ColorBox = (props) => {
  const { name, background } = props;
  const [copied, setCopied] = useState(false);
  const toggleCopyFalse = () => {
    setTimeout(() => setCopied(false), 1500);
  };
  const changeCopyState = () => {
    setCopied(true);
    toggleCopyFalse();
  };
  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <div style={{ background: background }} className={styles.ColorBox}>
        <div
          className={`${styles.overlay} ${copied ? styles.showOverlay : ""}`}
          style={{ background: background }}
        />
        <div
          className={`${styles.copyMsg} ${copied ? styles.showCopyMsg : ""}`}
        >
          <span className={styles.copyMsgTitile}>Copied!</span>
          <span className={styles.copyMsgColor}>{background}</span>
        </div>
        <button className={styles.copyBtn}>copy</button>
        <span className={styles.name}>{name}</span>
        <span className={styles.more}>More</span>
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;
