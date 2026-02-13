import Task from "./Task";

function TaskList({ tasks }) {

  return (
    <ul className="todo-list">
      {tasks.map(task => (
        <Task
          key={task.id}
          {...task}
        />
      ))}
    </ul>
  );
}

export default TaskList;
