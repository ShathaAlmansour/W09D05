import React from 'react';
import './style.css'
import {Link} from "react-router-dom";


const Login = () => {
    return (
        <section className="section-login vvv">
            <div className="login-box">
                <form  className={"form"}>
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
                    <p><Link to="/Regestier" className={"register"}>Don't have an account ?</Link></p>
                </form>
            </div>
        </section>
    )
}

export default Login