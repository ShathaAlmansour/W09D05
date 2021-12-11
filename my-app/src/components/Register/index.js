import React from 'react'
import axios from "axios";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import './style.css'
import {Link} from "react-router-dom";

const BASE_URL = process.env.REACT_APP_BASE_URL
const Register = () => {
  
  
  const navigate = useNavigate();

  const [username, setUserName] = useState("");
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line
  const [role, setRole] = useState("61a7682c2f32038287f22c4e");

  const getData = async () => {
    const items = await axios.get(`${BASE_URL}/allusers`);
    // console.log(items.data);
    setUsers(items.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const register = async (vil) => {
    vil.preventDefault();
    let check = false;
    users.map((item) => {
      if (item.email == email || item.username == username) {
        check = true;
      }
    });
    if (check) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: " email or username alerady exists",
      });
    } else {
      const res = await axios.post(
        `${BASE_URL}/resgister`,
        {
          email,
          username,
          password,
        }
        
      );
    }
  };
  const login = (vil) => {
    vil.preventDefault();
    navigate("/");
  };
    return (
        <section className="section-login vvv">
        <div className="login-box">
          <form  className={"form"}>
            <div className="input-field">
              <p>user Name</p>
              <input type="text" name="username" placeholder="Yuor UserName"
                     onChange={(e) => setUserName(e.target.value)}/>
            </div>
            <div className="input-field">
              <p>Email</p>
              <input type="text" name="email" placeholder="Your Email"
                     onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="input-field">
              <p>Password</p>
              <input type="password" name="password" placeholder="Your Password"
                     onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <input type="submit" value="register" onClick={register} className={"btn"}/>
            <p><Link to="/login" className={"register"}>Already have an account ?</Link></p>
          </form>
        </div>
      </section>
    )
}

export default Register