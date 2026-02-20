import Task from "./Task";

function TaskList({ 
  tasks, 
  onToggle,
  onEdit,
 onDelete,
}) {

  return (
    <ul className="todo-list">
      {tasks.map(task => (
        <Task
          key={task.id}
          {...task}
          onToggle = {onToggle}
          onEdit = {onEdit}
          onDelete = {onDelete}
        />
      ))}
    </ul>
  );
}

export default TaskList;
