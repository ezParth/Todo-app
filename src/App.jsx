import { useEffect, useState } from "react";
import { todoContext } from "./context";
import Task from "./components/Task";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

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
