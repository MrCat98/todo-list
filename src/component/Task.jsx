import {formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'

const Task = ({ onToggle, onEdit, onDelete, ...task }) => {
  const { id, description, completed, editing } = task

  const createdTime = formatDistanceToNow(
    new Date(task.created)
  )

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
            created {createdTime}
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

Task.PropTypes={
  onToggle:PropTypes.func,
  onEdit:PropTypes.func,
  onDelete:PropTypes.func,
  task:PropTypes.array,
}

export default Task
