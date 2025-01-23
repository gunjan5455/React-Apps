import Inputbox from "./inputBox";
import Taskitem from "./Taskitem";
const TodoContainer = () => {
  const [task, settask] = useState([]);
  const addTask = (task) => {};
  // const Taskitem = () => {
  //   const tasks = [
  //     { id: Date.now() + 1, title: "Task-1" },
  //     { id: Date.now() + 2, title: "Task-2" },
  //     { id: Date.now() + 3, title: "Task-3" },
  //     { id: Date.now() + 4, title: "Task-4" },
  //   ];
  return (
    <>
      {}
      <Inputbox addTask={addTask} />
      <Taskitem tasks={tasks} />
    </>
  );
};

export default TodoContainer;
