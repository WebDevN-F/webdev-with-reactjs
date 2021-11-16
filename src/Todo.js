import React from 'react';

function Todo({ todo, toggleTodo }) {
    function handlerClickTodo() {
        toggleTodo(todo.id)
    }
    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.complete} onChange={handlerClickTodo} />
                {todo.name}
            </label>
        </div>
    );
}

export default Todo;