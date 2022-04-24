import React from 'react'
import TodoItem from './TodoItem'
// import todo from '../App.js'


export default function Todos(props) {
  return (
    <div className='container'>
      <h3 className="text-center">Todos work!</h3>
      {/* <TodoItem todo={props.todos[0]}/> */}
      {props.todos.length===0?"No Work Pending":
      
        props.todos.map((todo)=>{
          return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
        })
      }
    </div>
  )
}
