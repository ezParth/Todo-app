import React, { useContext, useEffect, useRef } from "react";
import { todoContext } from "../context";

function TaskList() {
  const { tasks, setTasks } = useContext(todoContext);

  const handleDelete = (id) => {
    setTasks(tasks.filter((Task) => Task.id !== id));
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
