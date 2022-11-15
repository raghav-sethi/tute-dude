import React from "react";
import FriendCard from "./FriendCard";
import styles from "./FriendsEnrolled.module.css";

export default function FriendsEnrolled(props) {
  return (
    <>
      <h3>
        Friends who enrolled<span>({props.friendsEnrolled})</span>
      </h3>
      <div className={styles["friends-carousel-container"]}>
        <FriendCard
          friendName="Dhiraj Saxsena"
          enrollmentDate="14 Sep, 2022"
          coursesEnrolledFor="6"
          courseNames={[]}
          referralAmount="185"
        />
        <FriendCard
          friendName="Subhash Mishra"
          enrollmentDate="15 Sep, 2022"
          coursesEnrolledFor="23"
          courseNames={[]}
          referralAmount="485"
        />
        <FriendCard
          friendName="Prafull Kumar"
          enrollmentDate="15 Sep, 2022"
          coursesEnrolledFor="23"
          courseNames={[]}
          referralAmount="485"
        />
      </div>
      <h4 className={styles["terms-heading"]}>Terms & Conditions</h4>
    </>
  );
}
