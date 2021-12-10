import React from 'react'
import './style.css'
import {Link} from "react-router-dom";


const Register = () => {
    return (
        <section className="section-login vvv">
        <div className="login-box">
          <form  className={"form"}>
            <div className="input-field">
              <p>User Name</p>
              <input type="text" name="username" placeholder="User Name"
                     onChange={(e) => (e.target.value)}/>
            </div>
            <div className="input-field">
              <p>Email</p>
              <input type="text" name="email" placeholder="Your Email"
                     onChange={(e) => (e.target.value)}/>
            </div>
            <div className="input-field">
              <p>Password</p>
              <input type="password" name="password" placeholder="Your Password"
                     onChange={(e) => (e.target.value)}/>
            </div>
            <input type="submit" value="Login" className={"btn"}/>
            <p><Link to="/login" className={"register"}>Already have an account?</Link></p>
          </form>
        </div>
      </section>
    )
}

export default Register