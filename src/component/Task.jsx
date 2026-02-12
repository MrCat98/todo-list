

const Task=()=>{
    return(
        <>
            <li className="editing">
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>
              <span class="description">Active task</span>
              <span class="created">created 5 minutes ago</span>
            </label>
          <button className="icon icon-edit" ></button>
          <button className="icon icon-destroy" ></button>
        </div>
        <input type="text" className="edit" value="Editing task" />
      </li>
        </>
    )
}

export default Task;