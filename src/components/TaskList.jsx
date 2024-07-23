import React, { useContext, useEffect, useRef } from "react";
import { todoContext } from "../context";

function TaskList() {
  const { tasks, setTasks } = useContext(todoContext);

  const handleDelete = (id) => {
    setTasks(tasks.filter((Task) => Task.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const storedUserData = localStorage.getItem("tasks")
    if(storedUserData) {
      setTasks(JSON.parse(storedUserData))
    }else{
      console.log("Todos Not Found :(");
    }
  }, [setTasks])

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
