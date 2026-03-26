import {useState} from "react";

export function TaskForm({addTasks}) {
  const [title, setTitle] = useState("")
  const [priority, setPriority] = useState("Low")
  const [deadLine, setDeadLine] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    if (title.trim() && deadLine) {
      addTasks({
        title,
        priority,
        deadLine
      })
      setTitle("")
      setPriority("Low")
      setDeadLine("")
    }
  }

  return (
    <form action="" className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task title"
        required
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
      <select value={priority} onChange={event => setPriority(event.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <input
        type="datetime-local"
        required
        value={deadLine}
        onChange={event => setDeadLine(event.target.value)}
      />
      <button type="submit">Add task</button>
    </form>
  );
}
