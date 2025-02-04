import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../redux/slice/todoSlice";

const TodoList = () => {
  const [value, setValue] = useState("");
  const todoListTask = useSelector((state) => state.todoState.todoList);
  const distpatch = useDispatch();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    distpatch(addTask(value));
    alert("submitted");
    setValue("");
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <h1>TODO LIST</h1>
        <input
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
          type="text"
          placeholder="ENTER YOUR TASK"
        />
        <button type="submit">ADD TASK</button>
      </form>
      <div>
        <h2>YOUR TASKS</h2>
        <div>
          {todoListTask.map((todo) => {
            return <p>{todo}</p>;
          })}
        </div>
      </div>
    </div>
  );
};
export default TodoList;
