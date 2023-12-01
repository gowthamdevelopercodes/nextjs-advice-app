import React from "react";
import styles from "../components/Card.module.css";
function Card(props) {
  return (
    <div className={styles.card}>
      <h1 className={styles.heading}>{props.advice}</h1>
      <button className={styles.button} onClick={props.fetchAdvice}>
        <span>GIVE ME ADVICE!</span>
      </button>
    </div>
  );
}
export default Card;
