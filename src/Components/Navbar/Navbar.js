import React from "react";
import logo from "../../Assets/image 1.svg";
import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <section className="logo-container">
        <img src={logo} alt="logo" />
      </section>
      <section className={styles["nav-links-container"]}>
        <a href="#" className={styles["hide-mobile"]}>
          My Assignment
        </a>
        <a href="#" className={styles["hide-mobile"]}>
          Chat with Mentor
        </a>
        <a href="#" className={styles["mobile-nav-link"]}>
          ProfileName{" "}
        </a>
      </section>
    </div>
  );
}

// &#8964;
