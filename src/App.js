import './App.css';
import {useState} from "react";
import UserList from './components/userlist/UserList';
import Header from './components/header/Header'
import Fouter from './components/fouter/Fouter';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    {id:1,todo:"Ödevi Yap",active:false}
    ]);
  

  return (
    <section className="todopp">
      <Header></Header>
      {todo}
      <UserList todos={todos} setTodos={setTodos}></UserList>
      <Fouter todos={todos} setTodos={setTodos}></Fouter>
    </section>
  );
}

export default App;
