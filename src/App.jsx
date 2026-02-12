import Footer from "./component/Footer";
import NewTaskForm from "./component/NewTaskForm";
import TaskList from "./component/TaskList";

const appStyle = {
   margin: '0 auto',
  padding: 0,
  font: "14px 'Helvetica Neue', Helvetica, Arial, sans-serif",
  lineHeight: 1.4,
  background: "#f5f5f5",
  color: "#111111",
  minWidth: 230,
  maxWidth: 550,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  fontWeight: 300,
}

  function App() {
  return (
    <div className="todoapp" style={appStyle}>
     <NewTaskForm />
      <ul>
       <TaskList />
      </ul>
    
      <Footer />
    </div>
    );
}

export default App;
