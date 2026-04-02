import {TaskItem} from "../task-item/TaskItem.jsx";

export function TaskList({activeTasks, deleteTask, completedTask, overdue}) {
  return (
    <ul className="task-list">
      {activeTasks.map(task =>
        <TaskItem task={task} completedTask={completedTask} deleteTask={deleteTask} key={task.id} isOverdue={overdue > new Date(task.deadLine)}/>)
      }
    </ul>
  );
}
