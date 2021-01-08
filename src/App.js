import './App.css';
import {useState} from "react";
import UserList from './components/userlist/UserList';
import Header from './components/header/Header'
import Fouter from './components/fouter/Fouter';
import Form from './components/form/Form';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    {id:1,todo:"Ödevi Yap",active:true},
    {id:2,todo:"React Çalış",active:false},
    {id:3,todo:"Ders tekrarı yap",active:false},

  ]);

  const addNewTodo = (todo) => {
    const updatedTodos = todos.concat({
      id: todos.length +1 ,
      todo:todo,
      active: false
    });
    setTodos(updatedTodos);
  };

  return (
    <section className="todopp">
      <Header></Header>
      {todo}
      <Form newTodoHandler={addNewTodo}/>
      <UserList todos={todos} setTodos={setTodos}></UserList>
      <Fouter todos={todos} setTodos={setTodos}></Fouter>
    </section>
  );
}

export default App;
