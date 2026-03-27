import {TaskItem} from "../task-item/TaskItem.jsx";

export function TaskList({activeTasks, deleteTask, completedTask}) {
  return (
    <ul className="task-list">
      {activeTasks.map(task => <TaskItem task={task} completedTask={completedTask} deleteTask={deleteTask} key={task.id}/>)}
    </ul>
  );
}
