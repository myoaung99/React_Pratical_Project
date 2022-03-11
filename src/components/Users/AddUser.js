import React, { useState, useRef } from "react";
import Card from "../UI/Card.";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    // fetch input value using useRef hook
    const inputedUsername = nameInputRef.current.value;
    const inputedUserage = ageInputRef.current.value;

    // Validate empty input
    if (
      inputedUsername.trim().length === 0 ||
      inputedUserage.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    // Validate 0 and negative age
    // + to change integer
    if (+inputedUserage < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    const newUser = {
      id: Math.random().toString(),
      name: inputedUsername,
      age: inputedUserage,
    };
    props.onAddUser(newUser);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input id="username" type="text" ref={nameInputRef}></input>
          <label htmlFor="userage">Age(years)</label>
          <input id="userage" type="number" ref={ageInputRef}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
