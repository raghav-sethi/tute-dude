import React from "react";
import styles from "./PathLinkCont.module.css";

export default function PathLinkCont() {
  return (
    <div className={styles["path-link-container"]}>
      <a href="#">UI/UX</a> <span> &#707; </span>
      <a href="#">Refer & Earn</a> <span> &#707; </span>
      <a href="#">Friends Referred</a>
    </div>
  );
}
