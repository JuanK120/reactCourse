import React from "react";
import styles from "./UserItem.module.css";

function UserItem(args) {
  const userInfo = `${args.userName} (${args.age} years old)`;
  return (
    <li>
      <p>
        <strong>{userInfo}</strong>
      </p>
    </li>
  );
}

export default UserItem;
