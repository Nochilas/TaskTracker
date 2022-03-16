import Task from "./Task"

const Tasks = ({
  tasks,
  onDelete,
  onToggle,
  onUpdate,
  onUpdateOver
}) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id}
          task={task}
          editing={task.editing}
          onDelete={onDelete}
          onToggle={onToggle}
          onUpdate={onUpdate}
          onUpdateOver = {onUpdateOver}
        />
      ))}
    </>
  )
}

export default Tasks