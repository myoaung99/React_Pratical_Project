import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

const USER_LIST = [];

function App() {
  const [userList, setUserList] = useState(USER_LIST);
  const addUserHandler = (newUser) => {
    setUserList((prev) => {
      const pervState = [...prev];
      pervState.unshift(newUser);
      return pervState;
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
