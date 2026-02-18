import Task from "./Task";

function TaskList({ tasks, 
  onToggle,
  onEdit,
 onDelete}) {

  return (
    <ul className="todo-list">
      {tasks.map(task => (
        <Task
          key={task.id}
          {...task}
          onToggle = {()=> onToggle(task.id)}
          onEdit ={()=> onEdit(task.id)}
          onDelete = {()=> onDelete(task.id)}
        />
      ))}
    </ul>
  );
}

export default TaskList;
