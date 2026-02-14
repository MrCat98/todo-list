
import { format } from 'date-fns'


const Task=({description, completed, created, editing})=>{
    return(
        <li className={`${completed ? "completed" : ""} ${editing ? "editing" : ""}`}>
          <div className={"view"}>
            <input className="toggle" 
            type="checkbox" 
            checked={completed}
            readOnly
            />
            <label>
              <span className="description">{description}</span>
              <span className="created">
                created 
                {format(created, 'MMM d, yyyy h:mm a')}
              </span>
            </label>
            <button className="icon icon-edit" />
            <button className="icon icon-destroy" />
            </div> 
            {editing && (
              <input type="text" className="edit" defaultValue={description} />
            )}
          
        </li>
    )
}

export default Task;