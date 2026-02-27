import Filter from "./TasksFilter";

const Footer = ({tasks,
  filter,
    setFilter,
  deleteAll,
countTasks}) => {
  return (
      <footer className="footer">
        <span className="todo-count">
          {countTasks} items left return 
        </span>
        <Filter 
        tasks = {tasks}
    filter ={filter}
    setFilter={setFilter}
    />
        <button 
        className="clear-completed"
        onClick = {()=> deleteAll()}
        >
          Clear completed
          </button>
      </footer>

  );
};

export default Footer;
