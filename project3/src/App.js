import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import AddUserForm from "./Components/AddUser/AddUserForm";
import UserList from "./Components/UserList/UserList";

const StartUsers = [];

function App() {
  const [users, setUsers] = useState(StartUsers);

  const saveUsersHandler = (newUser) => {
    let usersList = [...users];
    usersList.push(newUser);
    setUsers(usersList);
  };

  let usersToRender = <div></div>;

  if (users.length > 0) {
    usersToRender = <UserList listToRender={users}></UserList>;
  }

  return (
    <div>
      <AddUserForm onSaveUser={saveUsersHandler}></AddUserForm>
      {usersToRender}
    </div>
  );
}

export default App;
