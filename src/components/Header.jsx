import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Header() {

    const [todos, settodos] = useState('')

    let dispatch = useDispatch();

    const add = () => {
        let newTodo = {
            id: Math.floor(Math.random() * 1000),
            todos: todos
        }
        dispatch({type: 'ADD', payload:newTodo})
    }

return (
    
  
    <>
    <div className="header">
        <form onSubmit={add}>
            <input
            className="new-todo"
            placeholder="What needs to be done?"
            autofocus=""
            onChange={(e) => settodos(e.target.value)}
            />
        </form>
    </div>
    <h1>Todos</h1>
    </>
  )
}

export default Header