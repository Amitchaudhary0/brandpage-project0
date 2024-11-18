import { useState } from 'react'
import './App.css'
import MainBar from './components/MainBar'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  const [toggle, setToggle] = useState(false);
  const [newUser, setNewuser] = useState(false);

  const handelLogin=(e)=>{
    setToggle(!toggle);
    setNewuser(false);
    // console.log(newUser);
    
  }

  return (
     <>
    {newUser === true ?  <Register handelLogin={handelLogin} setNewuser={setNewuser} toggle={toggle}/>:  <Login handelLogin={handelLogin} toggle={toggle}  setNewuser={setNewuser}/>}
     {/* <Register handelLogin={handelLogin} toggle={toggle} />
     <Login handelLogin={handelLogin} toggle={toggle} /> */}
     <Navbar handelLogin={handelLogin}/>
     <MainBar/>
     </>
  )
}

export default App
