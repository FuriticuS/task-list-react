import {TaskForm} from "./components/task-form/TaskForm.jsx";
import {TaskList} from "./components/task-list/TaskList.jsx";
import {CompletedTaskList} from "./components/completed-task-list/CompletedTaskList.jsx";
import {Footer} from "./components/footer/Footer.jsx";
import {useEffect, useState} from "react";

function App() {
  const [isOpen, setIsOpen] = useState({
    taskList: false,
    tasks: false,
    completedTasks: false
  })
  const [tasks, setTasks] = useState([])
  const [sortType, setSortType] = useState("date")
  const [sortOrder, setSortOrder] = useState("asc")
  const [nowStr, setNowStr] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNowStr(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function toggleOpen(section) {
    setIsOpen((prev) => ({
      ...prev,
      [section]: !prev[section]
    }));
  }

  function addTasks(tasks) {
    setTasks(prev => [...prev,
      {...tasks,
        completed: false,
        id: (Math.floor(Math.random() * 1000) + 1)
      }
    ])
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  function completedTask(taskId){
    setTasks(tasks.map(task => task.id === taskId ? {...task, completed: true} : task))
  }

  function sortTasks(tasks) {
    return tasks.slice().sort((a,b) => {
      if(sortType === "priority"){
        const priorityOrder = {Low: 3, Medium: 2, High: 1};
        return sortOrder === 'asc' ? priorityOrder[a.priority] - priorityOrder[b.priority] : priorityOrder[b.priority] - priorityOrder[a.priority];
      } else{
        return sortOrder === 'asc' ? new Date(a.deadLine) - new Date(b.deadLine) : new Date(b.deadLine) - new Date(a.deadLine);
      }
    })
  }

  function toggleSortOrder(type){
    if(sortType === type){
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortType(type)
      setSortOrder('asc')
    }
  }

  const activeTasks = sortTasks(tasks.filter(task => !task.completed))
  const completedTasks = sortTasks(tasks.filter(task => task.completed))

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
              className={`sort-button ${sortType === "date" ? 'active' : ''}`}
              onClick={() => toggleSortOrder("date")}
            >
              By Date {sortType === "date" && (sortOrder === 'asc' ? '\u2191' : '\u2193')}
            </button>
            <button
              className={`sort-button ${sortType === "priority" ? 'active' : ''}`}
              onClick={() => toggleSortOrder("priority")}
            >
              By Priority {sortType === "priority" && (sortOrder === 'asc' ? '\u2191' : '\u2193')}
            </button>
          </div>
          <TaskList activeTasks={activeTasks} deleteTask={deleteTask} completedTask={completedTask} overdue={nowStr}/>
        </>}
      </div>

      <div className="completed-task-container">
        <h2>Completed Task</h2>
        <button className={`close-button ${isOpen.completedTasks ? 'open' : ''}`} onClick={() => toggleOpen('completedTasks')}>+
        </button>

        {isOpen.completedTasks && <CompletedTaskList completedTasks={completedTasks} deleteTask={deleteTask}/>}
      </div>

      <Footer/>
    </div>
  );
}

export default App;
