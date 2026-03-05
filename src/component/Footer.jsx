import Filter from "./TasksFilter"
import PropTypes from "prop-types"

const Footer = ({tasks,
  filter,
    setFilter,
  deleteAll,
countTasks}) => {
  return (
      <footer className="footer">
        <span className="todo-count">
          {countTasks} items left 
        </span>
        <Filter 
        tasks = {tasks}
        filter ={filter}
        setFilter={setFilter}
    />
        <button 
        className="clear-completed"
        onClick = {deleteAll}
        >
          Clear completed
          </button>
      </footer>

  );
};

Footer.propTypes = {
  tasks:PropTypes.array.isRequired,
  filter:PropTypes.string.isRequired,
  countTasks:PropTypes.number.isRequired,
  setFilter:PropTypes.func.isRequired,
  deleteAll:PropTypes.func.isRequired,
}

export default Footer;
