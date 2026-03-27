import {TaskItem} from "../task-item/TaskItem.jsx";

export function CompletedTaskList({completedTasks}) {
  return (
    <ul className="completed-task-list">
      {completedTasks.map(task => <TaskItem task={task} key={task.id}/>)}
    </ul>
  );
}
