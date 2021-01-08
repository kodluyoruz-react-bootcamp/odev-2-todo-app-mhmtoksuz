import {useState} from 'react'

function Form({newTodoHandler}) {
    const [todo, setTodo] = useState("");
    const submitHandler = (e)=>{
        e.preventDefault();
        newTodoHandler(todo);
        setTodo("");
      };

    const inputHandler = (e)=> {
        setTodo(e.target.value);
    };
    return (
        <form onSubmit={submitHandler}>
            <input className="new-todo" value={todo} onChange={inputHandler} placeholder="What needs to be done?" autoFocus></input>
        </form>
    )
}

export default Form;
