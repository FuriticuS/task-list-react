import {TaskForm} from "./components/task-form/TaskForm.jsx";
import {TaskList} from "./components/task-list/TaskList.jsx";
import {CompletedTaskList} from "./components/completed-task-list/CompletedTaskList.jsx";
import {Footer} from "./components/footer/Footer.jsx";
import {useState} from "react";

function App() {
  const [isOpen, setIsOpen] = useState({
    taskList: false,
    tasks: false,
    completedTasks: false
  })
  const [tasks, setTasks] = useState([])

  function toggleOpen(section) {
    setIsOpen((prev) => ({
      ...prev,
      [section]: !prev[section]
    }));
  }

  function addTasks(tasks) {
    setTasks(prev => [...prev, {...tasks, completed: false, id: (Math.floor(Math.random() * 1000) + 1)}])
  }

  console.log(tasks)

  return (
    <div className="app">
      <div className="task-container">
        <h1>Task List with Priority</h1>
        <button className={`close-button ${isOpen.taskList ? 'open' : ''}`} onClick={() => toggleOpen('taskList')}>+</button>
        {isOpen.taskList && <TaskForm addTasks={addTasks}/>}
      </div>

      <div className="task-container">
        <h2>Tasks</h2>
        <button className={`close-button ${isOpen.tasks ? 'open' : ''}`} onClick={() => toggleOpen('tasks')}>+</button>

        {isOpen.tasks && <>
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
          <TaskList/>
        </>}
      </div>

      <div className="completed-task-container">
        <h2>Completed Task</h2>
        <button className={`close-button ${isOpen.completedTasks ? 'open' : ''}`} onClick={() => toggleOpen('completedTasks')}>+
        </button>

        {isOpen.completedTasks && <CompletedTaskList/>}
      </div>

      <Footer/>
    </div>
  );
}

export default App;
