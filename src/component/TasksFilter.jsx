 const TasksFilter = () => {
    return(
        <div>
          <ul className="filters">
        <li>
          <button className="selected">All</button>
        </li>
        <li>
          <button>Active</button>
        </li>
        <li>
          <button>Completed</button>
        </li>
      </ul>
      <button className="clear-completed">Clear completed</button>
        </div>
    )
 }

    export default TasksFilter;