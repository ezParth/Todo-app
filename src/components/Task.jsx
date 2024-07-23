import React, { useContext, useEffect, useRef } from "react";
import { todoContext } from "../context";

function Task() {
  const addInputRef = useRef(null);

  const generateId = () => {
    return Date.now().toString(32);
  };

  const { tasks, setTasks } = useContext(todoContext);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      document.getElementById("input-btn").click();
    }
  };

  useEffect(() => {
    if (addInputRef.current) {
      addInputRef.current.addEventListener("keypress", handleKeyPress);
    }
    return () => {
      if (addInputRef.current) {
        addInputRef.current.removeEventListener("keypress", handleKeyPress);
      }
    };
  }, []);

  const handleAddTask = () => {
    const inputTask = {
      task: addInputRef.current.value,
      id: generateId(),
    };
    setTasks((prevTasks) => [...prevTasks, inputTask]);
    addInputRef.current.value = "";
    addInputRef.current.focus();
  };     

  useEffect(() => {
    if (tasks.length > 0) {
      console.log("Your Task Id is: " + tasks[tasks.length - 1].id); // using indexing to the last task's id
    }
  }, [tasks]);

  return (
    <div className="top-nav">
      <div className="input-container">
        <input type="text" id="task-Input" ref={addInputRef} placeholder="Add a new task" />
        <button id="input-btn" onClick={handleAddTask}>
        ✔️
        </button>
      </div>
    </div>
  );
}

export default Task;
