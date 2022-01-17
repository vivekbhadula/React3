import React from "react";
import Card from "../UI/Card";
import styles from './AddUser.module.css';

function AddUser(props) {
  function addUserHandler(event) {
    event.preventDefault();
  }

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"></input>
        <label htmlFor="age">Age</label>
        <input id="age" type="number"></input>
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
}

export default AddUser;
