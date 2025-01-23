import { useState } from "react";
import "./inputbox.css";
const Inputbox = (addTask) => {
  const [title, setTitle] = useState("");
  const handleTask = (e) => {
    addTask(title);
  };
  const handleChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setTitle(value);
  };
  return (
    <>
      <div className="container">
        <input
          type="text"
          placeholder="Enter your task"
          onChange={handleChange}
          value={title}
        />
        <button onClick={handleTask}>Add task</button>
      </div>
    </>
  );
};
export default Inputbox;
