import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask } from "../../redux/slice/todoSlice";

const TodoList = () => {
  const [value, setValue] = useState("");
  const todoListTask = useSelector((state) => state.todoState.todoList);
  const distpatch = useDispatch();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    const newTask = { id: Date.now(), text: value };
    distpatch(addTask(newTask));
    alert("submitted");
    setValue("");
  };
  const handleDelete = (id) => {
    console.log("deleted", id);
    distpatch(removeTask(id));
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
            return (
              <div
                key={todo.id}
                className="flex flex-wrap justify-center items-center"
              >
                <p className="h-40 w-60 p-5 m-3 bg-green-400 rounded-lg">
                  {todo.text}
                </p>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="mx-4 bg-blue-400 h-[3rem] w-[9rem] flex justify-center items-center text-white text-bold rounded-lg cursor-pointer"
                >
                  DELETE
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default TodoList;
