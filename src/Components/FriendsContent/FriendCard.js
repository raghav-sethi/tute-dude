import React from "react";
import CourseNameContainer from "./CourseNameContainer";
import styles from "./FriendCard.module.css";

export default function FriendCard(props) {
  return (
    <div className={styles["card-container"]}>
      <section className={styles["name-date-section"]}>
        <h4>{props.friendName}</h4>
        <p>{props.enrollmentDate}</p>
      </section>
      <section className={styles["course-enrollment-section"]}>
        <h6>Courses Enrolled({props.coursesEnrolledFor})</h6>
        <div className={styles["course-list"]}>
          <CourseNameContainer courseName="UI/UX" />
          <CourseNameContainer courseName="Photoshop" />
          <CourseNameContainer courseName="Illustrator" />
          <CourseNameContainer courseName="Python" />
          <CourseNameContainer courseName="MERN" />
          <CourseNameContainer courseName="Java" />
        </div>
      </section>
      <p>
        Referral Amount{" "}
        <span className={styles["amount-span"]}>₹{props.referralAmount}</span>
      </p>
    </div>
  );
}
