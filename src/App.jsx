import Footer from "./component/Footer";
import NewTaskForm from "./component/NewTaskForm";
import TaskList from "./component/TaskList";



  function App() {
  return (
    <div className="todoapp">
    <NewTaskForm />
  
    <TaskList />
    
    <Footer />
    </div>
    );
}

export default App;
