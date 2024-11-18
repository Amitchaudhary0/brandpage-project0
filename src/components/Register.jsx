import React, {useState}from 'react'

const Register = ({ handelLogin, toggle, setNewuser}) => {

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        phoneno: "",
        isAdmin: false
      })
    
      const handelUserInput = (e) => {
        let key = e.target.name;
        let value = e.target.value;
        setUser({ ...user, [key]: value, });
      }


      const handelRegister = async (e) => {
        e.preventDefault();
          let a = await fetch("http://localhost:3000/",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(user)});
        setNewuser(false);
        }


  return (
    <div>
      <div className="fullwebsite" style={toggle ? { display: "block" } : { display: "none" }}>
        <div className='Login-Form'>
          <div className="btn close-btn" onClick={handelLogin}><img src="../public/close-icon.svg" alt="" /></div>
          <h1>Register</h1>
          <div className="form">
            <form onSubmit={handelRegister}>
              <label htmlFor="username"> <span>  Username </span>
                <input onChange={handelUserInput} type="text" name="username" id="username" value={user.username} placeholder='Enter Your Username' />
              </label>
              <label htmlFor="emailId"> <span>  E-mail </span>
                <input onChange={handelUserInput} type="email" name="email" id="emailId" value={user.email} placeholder='Enter Your E-mail' />
              </label>
              <label htmlFor="phoneno"> <span>  Phone Number </span>
                <input onChange={handelUserInput} type="number" name="phoneno" id="phoneno" min={1000000000} max={9999999999} value={user.phoneno} placeholder='Enter Your Phone Number' />
              </label>
              <label htmlFor="pass"> <span> Password  </span>
                <input onChange={handelUserInput} type="password" name="password" id="pass" value={user.password} placeholder='Enter Your Password' />
              </label>
              <div className='login-btn'>
              {/* <input type="submit" name="" id="submitbtn" value={"login"} /> */}
              <input type="submit" name="" id="registerbtn" value={"Submit"} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
