import React, { useContext, useEffect } from "react";
import { todoContext } from "../context";

function TaskList() {
  const { tasks, setTasks } = useContext(todoContext);

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  
    // Load tasks from local storage when the component mounts
    useEffect(() => {
      const storedUserData = localStorage.getItem("tasks");
      if (storedUserData) {
        console.log("Loading tasks from local storage:", storedUserData);
        setTasks(JSON.parse(storedUserData));
      } else {
        console.log("Todos Not Found :(");
      }
    }, [setTasks]);
  
    // Save tasks to local storage whenever tasks state changes
    useEffect(() => {
      console.log("Saving tasks to local storage:", tasks);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);      

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
