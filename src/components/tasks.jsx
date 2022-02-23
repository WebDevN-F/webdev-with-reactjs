import React from 'react'
import Task from './task'

const Tasks = ({ tasks, onRemoveTask, onReminerTask }) => {
    return (
        tasks.map(item =>
            <Task key={item.id} task={item}
                onDelete={() => onRemoveTask(item.id)}
                onDbClick={() => onReminerTask(item.id)} />)
    )
}

export default Tasks