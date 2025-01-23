import "./userlist.css";
import User from "../users/user";
import NavBar from "../navbar/Navbar";

const UserList = (props) => {
  const { users, setUsers } = props;
  function handleSortAge() {
    const sortedUsers = [...users];

    sortedUsers.sort(function (user1, user2) {
      return user1.age - user2.age;
    });

    setUsers(sortedUsers);
    // const sortedUsers = users.sort((a, b) => a.age - b.age);
    // setUsers(sortedUsers);
  }
  function onDelete(e, id) {
    console.log("clicked for", id);
    const filteredUsers = users.filter((user) => {
      return user.id != id;
    });
    setUsers(filteredUsers);
  }
  return (
    <div className="userlist">
      <NavBar />
      <button onClick={handleSortAge}>sort by age</button>
      <div className="users">
        {users.map((user) => {
          return (
            <>
              <User onDeleteuser={onDelete} key={user.id} userdata={user} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default UserList;
