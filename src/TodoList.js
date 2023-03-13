import React from 'react'

const TodoList = ({todolist,deleteHandler}) => {
    return (
        <div>
            {todolist.map((todo,index) =>
            <div key={index}>
                <h5>{todo} &nbsp; <button className='btn' onClick={() => deleteHandler(index)}></button></h5>
            </div>)}
        </div>
    )
}

export default TodoList