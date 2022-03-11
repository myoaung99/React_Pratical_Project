import React from "react";
import Card from "./Card.";
import Button from "./Button";

import ReactDOM from "react-dom";

import styles from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>

      <div className={styles.content}>
        <p>{props.message}</p>
      </div>

      <footer className={styles.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

// ReactDOM portal လုပ်နည်းက တံခါးပေါက်(portal)၊ ပို့မဲ့ကောင်(JSX component)၊ ပို့မဲ့နေရာ(public html DOM) ရှိရမယ်

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onClick={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
