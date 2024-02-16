import React from "react";
import styles from "../styles/mainComp.module.css";

function Error({ error }) {
  return (
    <div className={styles.error}>
      <h1>Error...{error}</h1>
    </div>
  );
}

export default Error;
