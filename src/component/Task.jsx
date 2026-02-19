
import { format } from 'date-fns'
import {useState} from 'react'





const Task=({
  description,
   completed,
    created,
     editing,
      onToggle,
      onEdit,
      onDelete,
     }) => {

          const [value, setValue] = useState('');

          const hendelSubmit = (e) =>{
            if (e.key === 'Enter' && value.trim(){
              
            })
          }

    return(
        <li className={`${completed ? "completed" : ""} 
        ${editing ? "editing" : ""}`}
        >

          <div className={"view"}>
            <input className="toggle" 
            type="checkbox" 
            checked={completed}
            onChange={onToggle}
            />


            <label>
              <span className="description">{description}</span>
              <span className="created">
                created 
                {format(created, 'MMM d, yyyy h:mm a')}
              </span>
            </label>
            <button className="icon icon-edit" 
            onClick={()=> onEdit(Task.id)}/>
            <button className="icon icon-destroy" 
            onClick={()=> onDelete(Task.id)}/>
            </div> 
            {editing && (
              <input type="text" 
              className="edit" 
              value={description}
              onKeyDown={handelSubmit}
              autoFocus
              />
            )}
          
        </li>
    )
}

export default Task;