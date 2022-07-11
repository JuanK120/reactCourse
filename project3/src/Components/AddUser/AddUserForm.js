import React, { useState } from "react";
import Card from "../Card/Card";
import Button from "../Card/Button";
import styles from "./AddUserForm.module.css";
import ErrorModal from "../ErrorModal/ErrorModal";

const AddUserForm = (args) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  const errorDismissHandler= () => {
    setError();
  }

  const userNameHandler = (event) => {
    let name = event.target.value;
    setUserName(name);
  };

  const userAgeHandler = (event) => {
    let age = event.target.value;
    setUserAge(age);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length < 1) {
      setError({title:"Invalid Name",message:"Name Cannot Be Empty!!"})
      return;
    } else if (userAge.trim().length < 1) {
      setError({title:"Invalid Age",message:"Age Cannot Be Empty!!"})
      return;
    } else if (+userAge < 0) {
      setError({title:"Invalid Age",message:"Name Cannot Be Less Than 0!!"})
      return;
    }
    const newUser = {
      id: Math.random().toString(),
      userName: userName,
      age: userAge,
    };
    args.onSaveUser(newUser);
    setUserName("");
    setUserAge("");
  };

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onDismiss={errorDismissHandler}></ErrorModal>}
      <Card className={styles.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="userName" className="">
          UserName
        </label>
        <input
          id="userName"
          type="text"
          value={userName}
          onChange={userNameHandler}
        ></input>
        <label htmlFor="userAge" className="">
          Age(Years)
        </label>
        <input
          id="userAge"
          type="text"
          value={userAge}
          onChange={userAgeHandler}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
    
  );
};

export default AddUserForm;
