import {React } from 'react'
import {Link} from "react-router-dom";
import './style.css'



const NAVBAR = () => {
    return (
        <header className="navbar-header">
        <div className="container">
            <div className="grid-nav">
                <h1 className="logo">My meida</h1>
                <div className="routes">
                    <ul className="route-list">
                        <li><Link to={"/Home"} className="route-url" >Home</Link></li>
                        <li><Link to="/Post">Post</Link></li>
                        <li><Link to="/commant">Comment</Link></li>
                    </ul>
                </div>
                <div className="account-icons">
                    <ul className="icons-list">
                        <li><Link to={"/Post"} className={"cart-icon"}>like</Link></li>
                        {localStorage.getItem("newUser") ?
                            <button className="logout-btn">logout</button> :
                            <li><Link to={"/login"}> login</Link></li>}</ul>
                </div>
            </div>
        </div>
    </header>
    )
}

export default NAVBAR