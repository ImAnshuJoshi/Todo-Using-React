import logo from './logo.svg';
import './App.css';
import Header from './Mycomponents/Header.js'
import Footer from './Mycomponents/Footer.js'
import Todos from './Mycomponents/Todos.js'
import React, { useState,useEffect } from 'react';
import AddTodo from './Mycomponents/AddTodo.js'


function App() {
  let inittodo;
  if (localStorage.getItem('todos')===null){
    inittodo=[];
  }
  else{
    inittodo=JSON.parse(localStorage.getItem('todos'));
  }

  const onDelete=(todo)=>{
    console.log('I am on Ondelete',todo);
    settodos(todos.filter((e)=>{
        return e!==todo;
    }));
    localStorage.getItem("todos");
  }

  const addTodo=(title,desc)=>{
    // console.log('I am adding this todo ',title , desc);
    let sno;
    if(todos.length==0){
       sno=1;
    }
    else{
     sno=todos[todos.length-1].sno+1;
    }
    const myTodo={
      sno:sno,
      title:title,
      desc:desc
    }
    settodos([...todos,myTodo]);
    console.log(myTodo);
  }

  const [todos, settodos] = useState(inittodo); 

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);

  return (
    <>
    <Header searchBar={true}/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    {/* <Footer/> */}
    </>
  );
}

export default App;
