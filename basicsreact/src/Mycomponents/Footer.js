import React from 'react'

export default function Footer() {
  let footerStyle={
      position:"relative",
      top:"10vh",
      width:"100%"
  }
  return (
    <footer className="bg-dark text-white" style={footerStyle}>
      <p className='text-center'>Copyright &copy; MyTodolist.com</p>
    </footer>
  )
}
