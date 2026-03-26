export function TaskForm() {
  return (
    <form action="" className="task-form">
      <input
        type="text"
        placeholder="Task title"
        required
      />
      <select>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <input
        type="datetime-local"
        required
      />
      <button type="submit">Add task</button>
    </form>
  );
}
