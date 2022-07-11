import React from "react";
import Card from "../Card/Card";
import Button from "../Card/Button";
import styles from "./ErrorModal.module.css";

const ErrorModal = (args) => {
  return (
    <div>
      <div className={styles.backdrop}>
        <Card className={styles.modal}>
          <header className={styles.header}>
            <h2>{args.title}</h2>
          </header>
          <div className={styles.content}>
            <p>{args.message}</p>
          </div>
          <footer className={styles.actions}>
            <Button onClick={args.onDismiss}>okay</Button>
          </footer>
        </Card>
      </div>
    </div>
  );
};

export default ErrorModal;
