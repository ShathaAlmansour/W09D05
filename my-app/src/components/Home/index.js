import React from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from 'react-google-login'
import axios from "axios";
import './style.css'
const BASE_URL = process.env.REACT_APP_BASE_URL;

const Home = () => {
  const navigate = useNavigate();

  const responseGoogle=async(response)=>{
    console.log(response.profileObj);
    const result = await axios.post(`${BASE_URL}/login`, {
      email: "yourEmail@gmail.com",
      password: "yourPassword123",
    }, {withCredentials: true});
    navigate('/posts')
  }

  const postss =()=>{
    navigate('/post')
  }

  return (
    <div className="home">
      <div className="homeContainer">
     <b><h1 className="wel"> Welcome to your website </h1></b>
        <div className="btns">
          <button className="pulse">
            <Link className="s" style={{ textDecoration: "none" }} to="login">
              Login
            </Link>
          </button>
          <button className="pulse">
            <Link className="s" style={{ textDecoration: "none" }} to="Regestier">
              Regstier
            </Link>
          </button>
          <GoogleLogin 
            clientId="834336498641-nqe16c7o3tit8osa5aj8mfl21rulj74r.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            // onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          /><br/>
       <button className="pulse" style={{ textDecoration: "none" , width:"90%" }} onClick={postss}> Viwe Your Posts </button>
        </div>
      </div>
    </div>
  );
};

export default Home;