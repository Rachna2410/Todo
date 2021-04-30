import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import data from "./data.json";
import Header from './Header';
import TodoList2 from './TodoList2';
import TodoForm2 from './TodoForm2';

function App() {
  const [todoList,setTodoList] = useState(data);

  const handleToggle = (id)=>{
    let mapped = todoList.map(task=>{
      return task.id == id ? {...task,complete: !task.complete} : {...task};
    });
  setTodoList(mapped);
}
const handleFilter=()=>{
  let filtered = todoList.filter(task=>{
    return !task.complete;
  });
  setTodoList(filtered);
}
const addTask = (userInput)=>{
  let copy = [...todoList];
  copy=[...copy, {id:todoList.length + 1, task: userInput, complete:false}];
  setTodoList(copy);
}
  return (
    <div className="App">
   
    <Header/>
    <TodoList2 todoList={todoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
   <TodoForm2 addTask={addTask}/>
   
  
    </div>
  );
}
export default App;
