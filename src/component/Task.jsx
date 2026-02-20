import { format } from 'date-fns'

const Task = ({ onToggle, onEdit, onDelete, ...task }) => {
  const { id, description, completed, created, editing } = task

  const handleSubmit = (e) => {
    if (e.key === 'Enter' ){
      const newText = e.target.value.trim()
      if(newText){
        onEdit(id, newText)
      } else{
        onDelete(id)
      }
    }
    }

  return (
    <li className={`${completed ? 'completed' : ''} ${editing ? 'editing' : ''}`}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
        />

        <label>
          <span className="description">{description}</span>
          <span className="created">
            created {format(created, 'MMM d, yyyy h:mm a')}
          </span>
        </label>

        <button
          className="icon icon-edit"
          onClick={() => onEdit(id)}
        />

        <button
          className="icon icon-destroy"
          onClick={() => onDelete(id)}
        />
      </div>

      {editing && (
        <input
          type="text"
          className="edit"
          defaultValue={description}
          onKeyDown={handleSubmit}
          autoFocus
        />
      )}
    </li>
  )
}

export default Task
