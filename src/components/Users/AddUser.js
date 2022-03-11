import React, { useState } from "react";
import Card from "../UI/Card.";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();

    // Validate empty input
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0)
      return;

    // Validate 0 and negative age
    // + to change integer
    if (+enteredAge < 1) return;
    const newUser = {
      name: enteredName,
      age: enteredAge,
    };
    props.onAddUser(newUser);
    setEnteredAge("");
    setEnteredName("");
  };

  const nameChangeHandaler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandaler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input
          id="username"
          type="text"
          value={enteredName}
          onChange={nameChangeHandaler}
        ></input>
        <label htmlFor="userage">Age(years)</label>
        <input
          id="userage"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandaler}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
