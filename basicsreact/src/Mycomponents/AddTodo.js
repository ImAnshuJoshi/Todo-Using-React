import React, { useState } from 'react'

export default function AddTodo({addTodo}) {
    const [title,settitle]=useState("");
    const [desc,setdesc]=useState("");
    const submit= (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert('Please enter all the inhtmlFormation');
        }
        else{
        addTodo(title,desc);
        settitle('');
        setdesc('');
    }
}
  return (
    <div className="container my-1000">
        <h3>Add Your work</h3>
        <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Todo title</label>
    <input type="text" value={title} onChange={(e)=>settitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Todo Desc</label>
    <input type="description" value={desc} onChange={(e)=>setdesc(e.target.value)} className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
