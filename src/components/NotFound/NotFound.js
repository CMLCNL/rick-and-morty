import React from "react";
import styles from "./NotFound.module.scss";

export default function NotFound() {
  return (
    <center>
      <div className={styles.container}>
        <h1>404!</h1>
        <div className={styles.rick}>
          <div className={styles.eyebrow}></div>
          <div className={styles.eyeCover}></div>
          <div className={`${styles.eye} ${styles.left}`}></div>
          <div className={`${styles.eye} ${styles.right}`}></div>
          <div className={styles.nose}></div>
          <div className={styles.mouth}></div>
          <svg
            className={styles.saliva}
            width="50px"
            height="90px"
            viewBox="0 0 49.13 90.16"
          >
            <path className={styles.cls} />
          </svg>
          <div className={styles.saliva2}></div>
        </div>
      </div>
    </center>
  );
}
