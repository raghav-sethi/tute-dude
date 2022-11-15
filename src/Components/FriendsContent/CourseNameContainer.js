import React from "react";
import styles from "./CourseNameContainer.module.css";

export default function CourseNameContainer(props) {
  return (
    <div className={styles["course-name-container"]}>
      <span>{props.courseName}</span>
    </div>
  );
}
