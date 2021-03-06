import React, { useState } from "react";
import axios from "axios";
import "./style.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Post from "../../components/Post";

const Login = () => {
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [err, setErr] = useState("");
  const login = async (e) => {
    try {
      e.preventDefault();
      const result = await axios.post(
        `${BASE_URL}/login`,
        {
          email: e.target.email.value,
          password: e.target.password.value,
        },
        { withCredentials: true }
      );
      if (result.data.err) {
        setErr(result.data.err);
      } else if (result.data.success) {
        console.log("helllllo");
        navigate("/posts");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fff">
      <div className="formm">
        <h1>Login</h1>

        <form onSubmit={login}>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" />
          <button type="submit">Login</button>
        </form>
        <p>{err}</p>
        <p
          className="forgot"
          onClick={() => {
            navigate("/forgot");
          }}
        >
          Forget Password?
        </p>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Login;
