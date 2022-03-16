import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 1:30pm',
      reminder: true,
      //For editing
      textBeforeEdit: '',
      editing: false,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 2:30pm',
      reminder: true,
      //For editing
      textBeforeEdit: '',
      editing: false,
    },
    {
      id: 3,
      text: 'Food shopping',
      day: 'Feb 7th at 3:30pm',
      reminder: false,
      //For editing
      textBeforeEdit: '',
      editing: false,
    },
  ])

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Update Task
  const updateTask = (task) => {
    console.log(task.textBeforeEdit)
    console.log(task.text)
    task.textBeforeEdit = task.text
    task.editing = true
    console.log(task.editing)
  }
  const endUpdate = (task) => {
    if(task.text.trim().length === 0){
      task.title = task.textBeforeEdit
      return
    }
    task.editing = false
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? { ...task, reminder: !task.reminder} : task
      )
    )
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {/*Shortcut for ternary operator*/}
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
          onUpdate={updateTask}
          onUpdateOver={endUpdate}
        />
      ) : (
        'No tasks to show'
      )}
    </div>
  );
}

export default App;
