import { FaTimes, FaPencilAlt } from 'react-icons/fa'

const Task = ({
  task,
  editing,
  onDelete,
  onToggle,
  onUpdate,
  onUpdateOver }) => {
  console.log(editing)

  return (
    <div>
      {!editing ?
      <div className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(task.id)}>
        <h3>
        {task.text}
          <div>
            <FaPencilAlt style={{marginRight: '10px'}}
            onClick={() => onUpdate(task)}
            />
            <FaTimes style={{color: 'red', cursor: 'pointer'}}
            onClick={() => onDelete(task.id)}/>
          </div>
        </h3>
        <p>{task.day}</p>
      </div> :
        <>
        <input className='taskEdit' type="text" value={task.text}
        onChange={() => onUpdate(task)}
        onKeyDown={() => onUpdateOver(task)}
        />
        <input className='taskEdit' type="text" placeholder={task.day}
        />
      </>
      }
    </div>
  )
}

export default Task