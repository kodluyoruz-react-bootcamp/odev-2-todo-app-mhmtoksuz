import {useState, useEffect} from 'react';



function UserList({todos,setTodos}) {
    
    const [todo, setTodo] = useState("");

    useEffect(()=>{
        setTodo("");
    },[todos]);
    const handleClick = () =>{
        if(todo){
          setTodos((prev)=>[...prev,{id:2,todo:todo,active:false}]);
          
        }
      };
      const handleChangeTodo = (e)=> setTodo(e.target.value);
      const handleRemove = (todoId) => {
        const filtered = todos.filter(todo=> todo.id!== todoId);
        setTodos(filtered);
      };

        const handleCompleted = (event) => {
          console.log(event.target.checked);
      };
    return (
        <section className="main">
        <input className="new-todo" value={todo} onChange={handleChangeTodo} placeholder="What needs to be done?"></input>
        <button onClick={handleClick}>Ekle</button>
        <ul className="todo-list">
        {todos.map((todo,i)=>(
              <li key={i}> 
              <div className="view">
                  <input className="toggle" type="checkbox" onChange={handleCompleted}></input> <label>
                    <p className={todo.active && "ustcizme"}>{todo.todo}</p>
                  </label> <button className="destroy" onClick={()=>handleRemove(todo.id)}></button>
              </div>
            </li>
          ))}
          </ul>


        </section>
    )
}

export default UserList
