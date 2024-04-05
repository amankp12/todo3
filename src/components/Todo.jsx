import React, { useState } from 'react'

const Todo = ({ task, index, update, remove, editingIndex, setEditingIndex }) => {
    const [isDone, setIsDone] = useState(false);

    const toggleDone = () => {
        setIsDone(!isDone);
    }

    return (
        <div>
            <li className="todo-item" key={index}>
                <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>{task}</span>
                {editingIndex === index ? (
                    <div>
                        <input type="text" defaultValue={task} onBlur={(e) => update(index, e.target.value)} />
                        <button onClick={() => setEditingIndex(null)}>Save</button>
                    </div>
                ) : (
                    <div>
                        <button className="edit-btn" onClick={toggleDone}>Done</button>
                        <button className="edit-btn" onClick={() => setEditingIndex(index)}>🖌</button>
                        <button className="delete-btn" onClick={() => remove(index)}>❎</button>
                    </div>
                )}
            </li>
        </div>
    )    
}

export default Todo