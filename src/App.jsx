import { useEffect, useState } from "react";
import{ todoContext } from "./context";
import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState("");

  return (
    <div>
      <div>
        <todoContext.Provider value={{ tasks, setTasks }}>
          <Task />
        </todoContext.Provider>
      </div>
    </div>
  );
}

export default App;
