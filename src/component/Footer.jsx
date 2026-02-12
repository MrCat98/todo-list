import Filter from "./TasksFilter";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <span className="todo-count">1 items left</span>
        <Filter />
      </footer>
    </div>
  );
};

export default Footer;
