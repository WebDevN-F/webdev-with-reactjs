import React from 'react'

const Task = ({ task, onDelete, onDbClick }) => {
    return (
        <div onDoubleClick={onDbClick} className={`d-flex justify-content-between align-items-center p-3 mb-2 bg-light ${task.completed ? `border-start border-success border-4`: ''}`}>
            <h3 className="d-flex flex-column fs-3">
                {task.name}
                <small className="fs-6">{task.date}</small>
            </h3>
            <span className="btn text-danger fw-bold" onClick={onDelete}>{'\u2715'}</span>
        </div>
    )
}

export default Task