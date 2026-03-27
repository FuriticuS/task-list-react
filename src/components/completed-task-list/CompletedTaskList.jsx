import {TaskItem} from "../task-item/TaskItem.jsx";

export function CompletedTaskList({completedTasks, deleteTask}) {
  return (
    <ul className="completed-task-list">
      {completedTasks.map(task => <TaskItem deleteTask={deleteTask} task={task} key={task.id}/>)}
    </ul>
  );
}
