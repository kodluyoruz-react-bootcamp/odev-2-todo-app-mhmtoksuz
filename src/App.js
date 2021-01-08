import './App.css';
import {useState} from "react";
import UserList from './components/userlist/UserList';
import Header from './components/header/Header'

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    {id:1,todo:"Ödevi Yap",active:true}
    ]);
  

  return (
    <div className="App">
      <Header></Header>
      {todo}
      <UserList todos={todos} setTodos={setTodos}></UserList>
    </div>
  );
}

export default App;
