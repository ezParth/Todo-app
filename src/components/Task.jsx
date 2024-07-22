import React, { useContext, useEffect, useRef } from "react";
import { todoContext } from "../context";

function Task() {
  const addInputRef = useRef("");

  const generateId = () => {
    return Date.now().toString(32);
  };

  const { tasks, setTasks } = useContext(todoContext);

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
    <div className="addTask">
      <div>
        <input type="text" id="input-task" ref={addInputRef} />
        <button id="input-btn" onClick={handleAddTask}>
          Add task...
        </button>
      </div>
    </div>
  );
}

export default Task;
