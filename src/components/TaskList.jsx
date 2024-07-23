import React, { useContext, useState } from "react";
import { todoContext } from "../context";

function TaskList() {
  const { tasks, setTasks } = useContext(todoContext);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState({});

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleEdit = (task) => {
    setIsEditing(true);
    setCurrentTask(task);
  };

  const handleEditInputChange = (e) => {
    setCurrentTask({ ...currentTask, task: e.target.value });
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    const updatedTasks = tasks.map((task) => 
    task.id === currentTask.id ? currentTask : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setIsEditing(false);
  };

  return (
    <div>
      <h3>Your Todos</h3>
      <div>
        <ul>
          {tasks.map((task) => (
            <li key={task.id} id="list">
              {isEditing && currentTask.id === task.id ? (
                <form onSubmit={handleEditFormSubmit}>
                  <input
                    type="text"
                    value={currentTask.task}
                    onChange={handleEditInputChange}
                  />
                  <button id="edit-btn" type="submit">
                    ✔️
                  </button>
                  <button id="delete-btn" onClick={() => setIsEditing(false)}>
                    ❌
                  </button>
                </form>
              ) : (
                <>
                  <span>🫵 {task.task}</span>
                  <div className="button-container">
                    <button
                      id="delete-btn"
                      onClick={() => handleDelete(task.id)}
                    >
                      ❌
                    </button>
                    <button id="edit-btn" onClick={() => handleEdit(task)}>
                      ✏️
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskList;
