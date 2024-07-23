import React, { useContext } from "react";
import { todoContext } from "../context";

function TaskList() {
  const { tasks, setTasks } = useContext(todoContext);

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleEdit = (id) => {

  }

  return (
    <div>
      <h3>Your Todos</h3>
      <div>
        <ul>
          {tasks.map((task) => (
            <li key={task.id} id="list">
              <span>🫵 {task.task}</span>
              <div className="button-container">
                <button id="delete-btn" onClick={() => handleDelete(task.id)}>
                  ❌
                </button>
                <button id="edit-btn" onClick={() => handleEdit(task.id)}>
                  ✏️
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskList;
