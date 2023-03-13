import React,{useState} from 'react'
import TodoList from './TodoList';
import './Todo.css'

const Main = () => {
  const [task,setTask] = useState("");
  const [todos,setTodos] = useState([]);


  const submitHandler = e =>{
    e.preventDefault();
    const newTodos = [...todos,task];
    setTodos(newTodos);
    setTask("");
  }
  const deleteHandler = (indexValue) =>{
    const newTodos = todos.filter((todo,index) => index !== indexValue);
    setTodos(newTodos);
  }
  return (
    <div>
      <center>
        <div className="car">
          <div className="carb">
            <form onSubmit={submitHandler}>
              <input type="submit" value="Add card"  name="Add "/>
            </form>
            <TodoList todolist={todos} deleteHandler={deleteHandler}/>
          </div>
        </div>
      </center>
    </div>
  )
}

export default Main