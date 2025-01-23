import { useState } from "react";
import "./userform.css";
import { useNavigate } from "react-router";
const UserForm = (props) => {
  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();
  function handleFirst(e) {
    setFirst(e.target.value);
  }
  function handleLast(e) {
    setLast(e.target.value);
  }
  function handleGender(e) {
    setGender(e.target.value);
  }
  function handleAge(e) {
    setAge(e.target.value);
  }

  function hndleSubmit(e) {
    e.preventDefault();

    alert([firstName, lastName, gender, age, "Form submitted"]);
    const newuser = {
      firstName,
      lastName,
      gender,
      age,
      image: "https://dummyjson.com/icon/michaelw/128",
      id: Math.random().toString(),
    };
    setFirst("");
    setLast("");
    setGender("");
    setAge("");
    // window.location.href = "/";
    props.onFormSubmit(newuser);
    navigate("/");
  }
  return (
    <div className="form-container">
      <form onSubmit={hndleSubmit}>
        <label>firstname:</label>
        <input
          onChange={handleFirst}
          type="text"
          name="first"
          value={firstName}
        />
        <label>lastname:</label>
        <input onChange={handleLast} type="text" name="last" value={lastName} />
        <label>gender:</label>
        <input
          onChange={handleGender}
          type="text"
          name="gender"
          value={gender}
        />
        <label>Age:</label>
        <input onChange={handleAge} type="number" name="age" value={age} />

        <button>Submit</button>
      </form>
    </div>
  );
};
export default UserForm;
