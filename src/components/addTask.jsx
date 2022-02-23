
import { useState } from 'react'

const AddTask = ({onAddTask}) => {
    const [task, setTask] = useState({
        name: '',
        date: '',
        completed: false,
    })

    const handleChange = (e) => {
        if (e.target.type === 'checkbox') {
            setTask({ ...task, completed: e.target.checked })
        } else {
            setTask({
                ...task,
                [e.target.name]: e.target.value
            })
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        onAddTask(task)
        setTask({
            name: '',
            date: '',
            completed: false,
        })
    }

    return (
        <form className="mb-3" onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Task</label>
                <input type="text" required className="form-control" name="name" placeholder="Add Task" value={task.name} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="date" className="form-label">Date</label>
                <input type="text" required className="form-control" name="date" placeholder="Add Date & time" value={task.date} onChange={handleChange} />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="completed" checked={task.completed} onChange={handleChange} />
                <label className="form-check-label" htmlFor="completed">Set Reminder</label>
            </div>
            <div className="d-grid gap-1">
                <button type="submit" className="btn d-grid btn-primary">Save Task</button>
            </div>
        </form>
    )
}

export default AddTask