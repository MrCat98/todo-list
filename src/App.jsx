import {useState} from 'react'
import Footer from "./component/Footer";
import NewTaskForm from "./component/NewTaskForm";
import TaskList from "./component/TaskList";
import './index.css'



  function App() {
    const onDalete = (id) =>{
      setTasks(tasks =>
        tasks.filter(task => task.id !== id)
      )
    }

    const onEdit = (id) => {
      setTasks(tasks =>
        tasks.map(task =>
          task.id === id ? {...task, editing: !task.editing}
          :task
        )
      )
    }

    const onToggle = (id) =>{
      setTasks(tasks=>
        tasks.map(task=>
          task.id === id ? {...task, completed: !task.completed} : task
        )
      )
    }

    
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
  
    <TaskList tasks = {tasks} 
    onToggle = {onToggle} 
    onEdit = {onEdit}
    onDelete = {onDalete}
    
    />
    
    <Footer />
    </div>
    );
}

export default App;
