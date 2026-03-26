import {TaskForm} from "./components/task-form/TaskForm.jsx";
import {TaskList} from "./components/task-list/TaskList.jsx";
import {CompletedTaskList} from "./components/completed-task-list/CompletedTaskList.jsx";
import {Footer} from "./components/footer/Footer.jsx";
import {useState} from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="app">
      <div className="task-container">
        <h1>Task List with Priority</h1>
        <button className="close-button" onClick={() => setIsOpen(prev => !prev)}>+</button>
        {isOpen && <TaskForm/>}
      </div>

      <div className="task-container">
        <h2>Tasks</h2>
        <button
          className="close-button">
          +
        </button>

        <div className="sort-controls">
          <button
            className={`sort-button`}
          >
            By Date
          </button>
          <button
            className={`sort-button`}
          >
            By Priority
          </button>
        </div>
          <TaskList />
      </div>

      <div className="completed-task-container">
        <h2>Completed Task</h2>
        <button
          className={`close-button`}
        >
          +
        </button>
          <CompletedTaskList />
      </div>

      <Footer/>
    </div>
  );
}
export default App;
