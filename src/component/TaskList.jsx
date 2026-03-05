import PropTypes from "prop-types";
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

TaskList.PropTypes = {
tasks:PropTypes.array, 
onToggle:PropTypes.func.isRequired,
onEdit:PropTypes.func.isRequired,
onDelete:PropTypes.func.isRequired,
}

export default TaskList;
