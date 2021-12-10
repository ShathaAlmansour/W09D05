import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Regestier from "./components/Register";
import Home from "./components/Home";


function App() {
  return (
    <>
     <Navbar/>
      <Routes>
        
        <Route path="/login" element={<Login/>} />
        <Route path="/Navbar" element={<Navbar/>} />
        <Route path="/Regestier" element={<Regestier />} />
        <Route path="/Post" element={<Post/>} />
        <Route exact path="/" element={<Home />} />
      
      </Routes>
      </>
  );
}

export default App;