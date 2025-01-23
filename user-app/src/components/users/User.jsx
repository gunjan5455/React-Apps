import "./user.css";
import { Link } from "react-router-dom";
const User = (props) => {
  const userdata = props.userdata;
  console.log(props);
  return (
    <Link to={`/user/${userdata.id}`}>
      <div className="user-card">
        <img src={userdata.image}></img>
        <div>ID: {userdata.id}</div>
        <div>FirstName: {userdata.firstName}</div>
        <div>LastNmae: {userdata.lastName}</div>
        <div>Age: {userdata.age}</div>
        <div>Gender: {userdata.gender}</div>
        <button onClick={(e) => props.onDeleteuser(e, userdata.id)}>
          Delete
        </button>
      </div>
    </Link>
  );
};

export default User;
