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
    const [filter,setFilter] = useState('all')

  const filterTasks =(()=>{
    switch (filter) {
      case 'active':
        return tasks.filter(task => !task.completed)

      case 'completed':
        return tasks.filter(task => task.completed)

      case 'all':
      default:
        return tasks
  }
})()
    
    
    
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

    const deleteAll = ()=>{
      setTasks(tasks=>
        tasks.filter(task => !task.completed)
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
    <div className="todoApp">

    <NewTaskForm 
    onAddTask = {onAddTask}
    />
  
    <TaskList 
    tasks = {filterTasks}
    onToggle = {onToggle} 
    onEdit = {onEdit}
    onDelete = {onDelete}
    />
    
    <Footer 
    deleteAll ={deleteAll}
    tasks = {filterTasks}
    filter= {filterTasks}
    setFilter={setFilter}

    />
    </div>
    );
}

export default App;
