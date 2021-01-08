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
        <>
        <ul>
            {todos.map((todo,i)=>(
            <li key={i}>{i+1} - {todo.todo} <span onClick={()=>handleRemove(todo.id)} style={{color:"blue", cursor:'pointer'}}>(x)</span>
            </li>
            ))}
          </ul>
        <input value={todo} onChange={handleChangeTodo} ></input>
        <button onClick={handleClick}>Ekle</button>
        </>
    )
}

export default UserList
