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
        <input className="new-todo" value={todo} onChange={handleChangeTodo} placeholder="What needs to be done?"></input>
        <button onClick={handleClick}>Ekle</button>
        <ul className="todo-list">
        {todos.map((todo,i)=>(
              <li className="completed" key={i}> 
              <div className="view">
                  <input className="toggle" type="checkbox"></input> <label>{todo.todo}</label> <button className="destroy" onClick={()=>handleRemove(todo.id)}></button>
              </div>
            </li>
          ))}
          </ul>


        </section>
    )
}

export default UserList
