import React, { useContext } from "react";
import { todoContext } from "../context";

function TaskList() {
  const { tasks, setTasks } = useContext(todoContext);

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div>
      <h3>Your Todos</h3>
      <div>
        <ul>
          {tasks.map((task) => (
            <li key={task.id} id="list">
              {task.task}
              <button id="delete-btn" onClick={() => handleDelete(task.id)}>
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskList;
