import Filter from "./TasksFilter";

const Footer = ({tasks,
  filter,
    setFilter,
  deleteAll}) => {
  return (
      <footer className="footer">
        <span className="todo-count">1 items left</span>
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
