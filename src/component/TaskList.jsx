import Task from "./Task";

const buttonStyle = {
    margin: 0,
  padding: 0,
  border: 0,
  background: "none",
  fontSize: "100%",
  verticalAlign: "baseline",
  fontFamily: "inherit",
  fontWeight: "inherit",
  color: "inherit",
  WebkitAppearance: "none",
  appearance: "none",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
};

const TaskList = () => {
  return (
    <>
      <li className="editing">
        <div className="view">
          <input className="toggle" type="checkbox" />
          <Task />
          <button className="icon icon-edit" style={buttonStyle}></button>
          <button className="icon icon-destroy" style={buttonStyle}></button>
        </div>
        <input type="text" className="edit" value="Editing task" />
      </li>
    </>
  );
};

export default TaskList;
