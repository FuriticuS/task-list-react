export function TaskItem({task}) {
  return (
    <li className={`task-item ${task.priority.toLowerCase()}`}>
      <div className="task-info">
        <div>
          {task.title} <strong>{task.priority}</strong>
        </div>
        <div className="task-deadline">Due: {new Date(task.deadLine).toLocaleDateString()} {new Date(task.deadLine).toLocaleTimeString()}</div>
      </div>
      <div className="task-buttons">
        <button className="complete-button">
          Complete
        </button>
        <button className="delete-button">
          Delete
        </button>
      </div>
    </li>
  );
}