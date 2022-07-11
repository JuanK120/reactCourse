import React from "react";
import styles from "./Button.module.css";

function Button(args) {
  return (
    <button
      className={styles.button}
      type={args.type || "button"}
      onClick={args.onClick}
    >
      {args.children}
    </button>
  );
}

export default Button;
