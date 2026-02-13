import {useState} from 'react'
import Footer from "./component/Footer";
import NewTaskForm from "./component/NewTaskForm";
import TaskList from "./component/TaskList";
import './index.css'



  function App() {
    const[tasks, setTasks] = useState([
       {
        id:2,
        description: 'Walk the dog',
        completed: true,
        created: new Date(),
        editing: false,
      },
      {
        id: 1,
        description: 'Buy groceries',
        completed: false,
        created: new Date(),
        editing: true,
      },
      {
        id: 3,
        description: 'Read a book',
        completed: false,
        created: new Date(),
        editing: false,
        
      }
      
     
    ])

  return (
    <div className="todoapp">
    <NewTaskForm />
  
    <TaskList tasks = {tasks} />
    
    <Footer />
    </div>
    );
}

export default App;
