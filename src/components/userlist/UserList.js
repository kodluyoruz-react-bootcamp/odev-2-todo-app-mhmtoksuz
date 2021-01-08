import {useState} from 'react';

function UserList({todos,setTodos}) {
    
      const handleRemove = (todoId) => {
        const filtered = todos.filter(todo=> todo.id!== todoId);
        setTodos(filtered);
      };
    return (
        <section className="main">
        <ul className="todo-list">
        {todos.map((todo,i)=>(
              <li key={i}> 
              <div className="view">
                  <input className="toggle" type="checkbox" ></input> <label>
                    <p className={`${todo.active && "ustcizme"}`}>{todo.todo}</p>
                  </label> <button className="destroy" onClick={()=>handleRemove(todo.id)}></button>
              </div>
            </li>
          ))}
          </ul>


        </section>
    )
}

export default UserList
