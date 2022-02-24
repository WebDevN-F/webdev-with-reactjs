import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Tasks from './components/tasks';
import AddTask from './components/addTask';
import Footer from './components/footer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/about';

function App() {
  const [tasks, setTasks] = useState([])
  const [showAddTask, setShowAddTask] = useState(false)

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json();
    return data;
  }

  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json();
    return data;
  }

  const removeTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleTask = async (id) => {
    const taskToToggle = await fetchTask(id)
    const taskUpdate = { ...taskToToggle, completed: !taskToToggle.completed }
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(taskUpdate)
    })
    const data = await res.json();
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task))
  }

  const addTask = () => {
    setShowAddTask(prev => !prev)
  }

  const onAddTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await res.json();
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks.push(data);
      return newTasks;
    })
  }

  return (
    <Router>
      <div className="container-sm main border border-primary border-3 rounded-3 mt-4">
        <Header title={`Task Tracker React v.${React.version}`} onAdd={addTask} showAddTask={showAddTask} />
        <Routes>
          <Route path="/" exact element={
            <>
              {showAddTask && <AddTask onAddTask={onAddTask} />}
              {tasks.length > 0 ? <Tasks tasks={tasks} onRemoveTask={removeTask} onReminerTask={toggleTask} /> :
                <h3 className="text-center p-3">No Tasks</h3>}
            </>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
