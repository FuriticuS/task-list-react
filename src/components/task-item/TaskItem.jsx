export function TaskItem({task, deleteTask, completedTask, isOverdue}) {
  return (
    <li className={`task-item ${task.priority.toLowerCase()} ${isOverdue ? 'overdue':''}`}>
      <div className="task-info">
        <div>
          {task.title} {!isOverdue ? <strong>{task.priority}</strong> : <strong>Task over</strong>}
        </div>
        <div
          className="task-deadline">Due: {new Date(task.deadLine).toLocaleDateString()} {new Date(task.deadLine).toLocaleTimeString()}</div>
      </div>
      <div className="task-buttons">
        {!task.completed &&
          <button className={`complete-button ${isOverdue ? 'none-display':''}`} onClick={() => completedTask(task.id)}>
            Complete
          </button>}
        <button className={`delete-button`} onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}