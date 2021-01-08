import {useState, useEffect} from 'react';


function UserList({todos,setTodos}) {
    
    const [todo, setTodo] = useState("");

    useEffect(()=>{
        setTodo("");
    },[todos]);
    const handleClick = () =>{
        if(todo){
          setTodos((prev)=>[...prev,{id:2,todo:todo,active:true}]);
          
        }
      };
      const handleChangeTodo = (e)=> setTodo(e.target.value);
      const handleRemove = (todoId) => {
        const filtered = todos.filter(todo=> todo.id!== todoId);
        setTodos(filtered);
      };
    return (
        <section className="main">
        <ul className="todo-list">
        {todos.map((todo,i)=>(
              <li className="completed" key={i}> 
              <div className="view">
                  <input className="toggle" type="checkbox"></input> <label>{todo.todo}</label> <button className="destroy" onClick={()=>handleRemove(todo.id)}>X</button>
              </div>
            </li>
          ))}
          </ul>

        <input value={todo} onChange={handleChangeTodo} placeholder="What needs to be done?"></input>
        <button onClick={handleClick}>Ekle</button>
        </section>
    )
}

export default UserList
