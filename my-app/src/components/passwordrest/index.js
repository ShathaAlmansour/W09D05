import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const PasswordReset = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const token = location.pathname.split("/")[2];
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [err, setErr] = useState("");
  const [Erro, setErro] = useState(true);
  const [id, setId] = useState("");
  const reset = async (e) => {
    try {
      e.preventDefault();
      const result = await axios.post(`${BASE_URL}/reset/${id}`, {
        password: e.target.password.value,
        password2: e.target.password2.value,
      });
      console.log(result.data);
      if (result.data.error) {
        setErr(result.data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const check = async () => {
    try {
      const result = await axios.get(`${BASE_URL}/forgot/${token}`);
      if (result.data.success) {
        setId(result.data.success);
        setErro(false);
      }
      if (result.data.error) {
        setErr(result.data.error);
      }
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    check();
  }, []);

  return (
    <div className="home">
      {!Erro ? (
        <div className="formm">
          <h1>Enter your new password</h1>

          <form onSubmit={reset}>
            <label htmlFor="password">New Password:</label>
            <input type="password" name="password" />
            <label htmlFor="password2">Confirm New Password:</label>
            <input type="password" name="password2" />
            <button type="submit">Change Password</button>
          </form>
          <p>{err}</p>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Back
          </button>
        </div>
      ) : (
        <div className="formm">
          <h1>Error</h1>
          <p>{err}</p>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Back to home
          </button>
        </div>
      )}
    </div>
  );
};

export default PasswordReset;
