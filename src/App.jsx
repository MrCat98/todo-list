import {useState} from 'react'
import Footer from "./component/Footer";
import NewTaskForm from "./component/NewTaskForm";
import TaskList from "./component/TaskList";
import './index.css'



  function App() {
    
    const[tasks, setTasks] = useState(
      [
              {
        id: crypto.randomUUID(),
        description: 'Buy groceries',
        completed: false,
        created: new Date(),
        editing: false,
      }
      ]
    )
    
    const onAddTask = (description)=>{
      const newTask = {
        id:crypto.randomUUID(),
        description,
        completed: false,
        created: new Date(),
        editing: false,
      }
     setTasks(prevTasks => [...prevTasks, newTask])
    }
    
    

    const onDelete = (id) =>{
      setTasks(tasks =>
        tasks.filter(task => task.id !== id)
      )
    }

  const onEdit = (id, newDescription = null) => {
  setTasks(tasks =>
    tasks.map(task => {
      if (task.id !== id) return task;
      if (newDescription !== null) {
        return {
          ...task,
          description: newDescription,
          editing: false,
        };
      }
      return {
        ...task,
        editing: true,
      };
    })
  );
};



    const onToggle = (id) =>{
      setTasks(tasks=>
        tasks.map(task=>
          task.id === id 
          ? {...task, completed: !task.completed} 
        : task
        )
      )
    }


    

    
   
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
