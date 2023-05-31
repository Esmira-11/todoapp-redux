import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


function MainComp() {

    let {todoReducer} = useSelector(state => state)
    let dispatch = useDispatch()

    console.log(todoReducer)

    const removeToDo = (id) => {
        dispatch({type:'REMOVE', payload:id})
    }

    const handleClick = (id) => {
      let upd_obj = todoReducer.findIndex((item => item.id == id));
      todoReducer[upd_obj].status = !todoReducer[upd_obj].status;
      console.log(todoReducer)
    }
   

    return (
        <>
        <div className="main">
            <input className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
                {
                    todoReducer && todoReducer.map((item) => <li key={item.id} onClick={() => handleClick(item.id)}>
                        {/* completed */}
                            <div className="view">
                                <input className="toggle" type="checkbox" />
                                <label>{item.todos}</label>
                                <button className="destroy" onClick={() => removeToDo(item.id)} />
                            </div>
                            
                        </li>)
                }
            </ul>
        </div>
        {/* <li className="completed">
    <div className="view">
      <input className="toggle" type="checkbox" />
      <label>Learn JavaScript</label>
      <button className="destroy" />
    </div>
  </li> */}
    </>
  )
}

export default MainComp