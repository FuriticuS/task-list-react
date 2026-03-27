import {TaskItem} from "../task-item/TaskItem.jsx";

export function TaskList({activeTasks}) {
  return (
    <ul className="task-list">
      {activeTasks.map(task => <TaskItem task={task} key={task.id}/>)}
    </ul>
  );
}
