import './App.css';
import {useState,useEffect} from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { db } from './firebase_config';
import firebase from "firebase";
import TodoListItem from "./Components/TodoListItem.js";

function App() {
  const [todos,setTodos]=useState([]);
  const [todoInput,setTodoInput]=useState("");

  useEffect(() => {
    getTodo();
  }, []);

  useEffect(() => {
    getTodo();
  }, [todoInput]);

  const addTodo = (e) =>{
    e.preventDefault();
    db.collection("todo").add({
      inprogress : true,
      timestamp : firebase.firestore.FieldValue.serverTimestamp(),
      todo : todoInput,
    });
    console.log(todoInput);
    setTodoInput("");
  }

  const getTodo = () =>{
    db.collection("todo").onSnapshot(querySnapshop=>{
      setTodos(
        querySnapshop.docs.map(doc=>(
          {
            id:doc.id,
            todo:doc.data().todo,
            inprogress:doc.data().inprogress,
          }
        ))
      );
    })
    console.log(todos);
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="main">
        <h1><span>Abhedya Ayush's</span><span style={{color:"blue"}}> Todo App</span></h1>
        <form onSubmit={addTodo}>
          <TextField id="standard-basic" color="primary" 
           label="Write a Todo" 
           value={todoInput}
           style={{}}
           onChange={e=>{setTodoInput(e.target.value)}}/>
          <Button variant="contained" color="primary" 
            size="small" style={{float:"right",marginTop:"14px"}}
            value={todoInput}
            type="submit"
            >
                Add Todo
          </Button>
        </form>
        <div style={{marginTop:"25px"}}>
          {todos.map(todo=>(
            <TodoListItem todo={todo.todo} inprogress={todo.inprogress} id={todo.id} size="small" style={{padding:"3px"}}/>)
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
