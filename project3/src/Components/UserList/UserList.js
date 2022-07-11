import Card from "../Card/Card";
import UserItem from "./UserItem";
import styles from "./UserList.module.css"

function UserList(args) {
  const usersList = args.listToRender.map((user) => (
    <UserItem key={user.id} userName={user.userName} age={user.age}></UserItem>
  ));

  let content = <p></p>;

  if (usersList.length > 0) {
    content = usersList;
  } else {
    <p></p>;
  }
  return (
    <Card className={styles.users}>
      <ul>{content}</ul>
    </Card>
  );
}

export default UserList;
