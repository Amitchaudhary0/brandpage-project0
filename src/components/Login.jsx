import React, { useState } from 'react'

const Login = ({ handelLogin, toggle, setNewuser}) => {
  let isValid = false;

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    isAdmin: false
  })

  const handelUserInput = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [key]: value, });
  }

  const handelSubmit = async (e) => {
    e.preventDefault();
    let buttonClicked = e.nativeEvent.submitter.id;
    //  await fetch("http://localhost:3000/",{method:"POST", headers:{"content-type":"application/json"}, body:JSON.stringify(user)});
    //  setUser({ username:"",
    //   email:"",
    //   password:"",
    //   isAdmin:false})
    if(buttonClicked === "submitbtn"){

      let a = await fetch("http://localhost:3000/");
      let data = await a.json();
      data.forEach((e) => {
        if (e.email === user.email && e.username === user.username && e.password === user.password) {
          console.log(e.email, user.email + " " + e.username, user.username + " " + e.password, user.password);
          isValid = true;
          return;
        }
      });

      if(isValid){
        console.log("You are LoggedIn...");
        handelLogin();
        setUser({
          username: "",
          email: "",
          password: "",
          isAdmin: false 
        })
      }else{
        console.log("Invalid cridintials")
        alert("Invalid cridintials");
      }
    }else{
      setNewuser(true);
    }
    
  }

  return (
    <div>
      <div className="fullwebsite" style={toggle ? { display: "block" } : { display: "none" }}>
        <div className='Login-Form'>
          <div className="btn close-btn" onClick={handelLogin}><img src="../public/close-icon.svg" alt="" /></div>
          <h1>Log In</h1>
          <div className="form">
            <form onSubmit={handelSubmit}>
              <label htmlFor="username"> <span>  Username </span>
                <input onChange={handelUserInput} type="text" name="username" id="username" value={user.username} placeholder='Enter Your Username' />
              </label>
              <label htmlFor="emailId"> <span>  E-mail </span>
                <input onChange={handelUserInput} type="email" name="email" id="emailId" value={user.email} placeholder='Enter Your E-mail' />
              </label>
              <label htmlFor="pass"> <span> Password  </span>
                <input onChange={handelUserInput} type="password" name="password" id="pass" value={user.password} placeholder='Enter Your Password' />
              </label>
              <div className='login-btn'>
              <input type="submit" name="" id="submitbtn" value={"Login"} />
              <input type="submit" name="" id="registerbtn" value={"Register"} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
