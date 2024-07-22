import { useState } from "react";
import todoContext from "./context";
import Task from "./components/Task";

const [tasks, setTasks] = useState("");

return (
  <div>
    <div>
      <todoContext.Provider value={{tasks, setTasks}}>
        <Task />
      </todoContext.Provider>
    </div>
  </div>
);
