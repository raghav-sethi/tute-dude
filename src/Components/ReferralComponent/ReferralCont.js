import React from "react";
import styles from "./ReferralCont.module.css";

export default function ReferralCont(props) {
  return (
    <div className={styles["referral-wallet-cont"]}>
      <div>
        <h4 className={styles["referral-code-heading"]}>Your Referral Code</h4>
        <div className={styles["referral-code-container"]}>
          <p className={styles["referral-code"]}>{props.referralCode}</p>
        </div>
      </div>
      <div className={styles["wallet-container"]}>
        <h4 className={styles["wallet-balance-heading"]}>Wallet Balance</h4>
        <p>₹ {props.balance}</p>
      </div>
    </div>
  );
}
