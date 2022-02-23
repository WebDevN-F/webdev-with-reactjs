import React, { useState } from 'react';
import Header from './components/header';
import Tasks from './components/tasks';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Doctors Appointment', date: 'Fed 23 at 2:30pm', completed: true },
    { id: 2, name: 'Laundry', date: 'Fed 23 at 2:30pm', completed: true },
    { id: 3, name: 'Groceries', date: 'Fed 23 at 2:30pm', completed: false },
    { id: 4, name: 'Coffee', date: 'Fed 23 at 2:30pm', completed: false },
  ])
  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }
  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task))
  }
  const addTask = () => {
    console.log('addTask')
  }
  return (
    <>
      <div className="container-sm main border border-primary border-3 rounded-3 mt-4">
        <Header title={`Task Tracker React v.${React.version}`} onAdd={addTask} />
        { tasks.length > 0 ? <Tasks tasks={tasks} onRemoveTask={removeTask} onReminerTask={toggleTask} /> : <h3 className="text-center p-3">No Tasks</h3> }
        <footer className="d-flex justify-content-center mt-2">
          <p>React v. {React.version}</p>
        </footer>
      </div>
    </>
  );
}

export default App;
