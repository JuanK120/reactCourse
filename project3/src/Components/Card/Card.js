import React from "react";
import styles from "./Card.module.css";

function Card(args) {
  const classes = `${styles.card} ${args.className} `;
  return <div className={classes}>{args.children}</div>;
}

export default Card;
