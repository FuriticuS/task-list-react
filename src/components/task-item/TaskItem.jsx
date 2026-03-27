export function TaskItem({task, deleteTask, completedTask}) {
  console.log(task.completed)
  return (
    <li className={`task-item ${task.priority.toLowerCase()}`}>
      <div className="task-info">
        <div>
          {task.title} <strong>{task.priority}</strong>
        </div>
        <div
          className="task-deadline">Due: {new Date(task.deadLine).toLocaleDateString()} {new Date(task.deadLine).toLocaleTimeString()}</div>
      </div>
      <div className="task-buttons">
        {!task.completed &&
          <button className="complete-button" onClick={() => completedTask(task.id)}>
            Complete
          </button>}
        <button className="delete-button" onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}