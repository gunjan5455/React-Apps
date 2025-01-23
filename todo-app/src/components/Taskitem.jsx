import "./taskitem.css";
const Taskitem = () => {
  return (
    <>
      <div className="task-cont">
        <h1>Task list</h1>
        <ul>
          {tasks &&
            !!tasks.length &&
            tasks.map((task) => {
              return (
                <div className="task-item">
                  <li className="task-li" id={task.id} key={task.id}>
                    {task.title}
                  </li>
                  <button className="task-btn">Delete</button>
                </div>
              );
            })}
        </ul>
      </div>
    </>
  );
};
export default Taskitem;
