import { useState } from "react";


const NewTaskForm = ({onAddTask}) => {
    const [value, setValue] = useState('');

        const handleSubmit = (e) =>{
            if(e.key === 'Enter' && value.trim()){
                onAddTask(value);
                setValue('');
            }
        }
    
    return(
        <div>
            <header className="header">
                <h1>todos</h1>
                <input className="new-todo" 
                placeholder="What needs to be done?"
                onKeyDown={handleSubmit}
                autoFocus
                />
            </header>
        </div>
    )
}

export default NewTaskForm;