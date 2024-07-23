import { useEffect, useState } from "react";
import { todoContext } from "./context";
import Task from "./components/Task";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTask = localStorage.getItem("tasks");
    return storedTask ? JSON.parse(storedTask) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="todo-app-container">
      <div>
        <todoContext.Provider value={{ tasks, setTasks }}>
          <Task />
          <TaskList />
        </todoContext.Provider>
      </div>
    </div>
  );
}

export default App;

//--Very Important Notes--//
//--> the .map only works when the tasks is an array so make useState([]) instead of useState("") because map method requires an array otherwise it will give an eroor like tasks.map is not a function



/**
 * from local storage. This can cause the empty array to overwrite the stored tasks.
   It seems like the issue might be related to the timing of state 
   updates and how React processes them. When the component mounts,
   the state might be getting set to an empty array before the tasks are loaded 

 *To address this, you can initialize the state directly from local 
  storage when the component mounts. This ensures that the state is 
  set correctly before any other operations. Here’s how you can modify 
  your App.jsx to achieve this:
 */