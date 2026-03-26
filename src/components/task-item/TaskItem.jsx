export function TaskItem() {
  return (
    <li className={`task-item`}>
      <div className="task-info">
        <div>
          Заголовок <strong>Приоритет</strong>
        </div>
        <div className="task-deadline">Due: Дата</div>
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