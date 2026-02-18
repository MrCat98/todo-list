import {useState} from 'react'
import Footer from "./component/Footer";
import NewTaskForm from "./component/NewTaskForm";
import TaskList from "./component/TaskList";
import './index.css'



  function App() {

    const onAddTask = (description)=>{
         const newTask = {
        id:tasks.length + 1,
        description: description,
        completed: false,
        created: new Date(),
        editing: false,
      }
      setTasks(tasks => [...tasks, newTask])
    }
    const onDelete = (id) =>{
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
    <NewTaskForm 
    onAddTask = {onAddTask}
    />
  
    <TaskList tasks = {tasks} 
    onToggle = {onToggle} 
    onEdit = {onEdit}
    onDelete = {onDelete}
    
    />
    
    <Footer />
    </div>
    );
}

export default App;
