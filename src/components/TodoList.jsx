import React from 'react'
import { useState } from 'react'
import Todo from './Todo'

const TodoList = () => {
    const [values, setValues] = useState([])
    const [value, setValue] = useState('')
    const [editingIndex, setEditingIndex] = useState(null)

    const add = () => {
        setValues([...values, value])
        setValue('')
    }

    const remove = (id) => {
        values.splice(id, 1)
        setValues([...values])
    }

    const update = (index, text) => {
        const newValues = [...values];
        newValues[index] = text;
        setValues(newValues);
        setEditingIndex(null);
    }

    return (
        <div className="todo-container">
            <div className="todo-header">
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                <button onClick={add}>Add</button>
            </div>
            <ul className="todo-list">
                {values.map((t, i) => (
                    <Todo task={t} key={i} index={i} remove={remove} update={update} editingIndex={editingIndex} setEditingIndex={setEditingIndex}/>
                ))}
            </ul>
        </div>
    )
}
    

export default TodoList