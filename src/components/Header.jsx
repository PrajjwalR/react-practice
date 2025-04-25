import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    let [btnName, setBtnName] = useState("Login");
    
    return(
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL} alt="logo" />
            </div>
            <div className='nav-items'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li><Link to="/">Cart</Link></li>
                </ul>
                <button className="login-btn" onClick={()=>{
                    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                }}>{btnName}</button>
            </div>
        </div>
    )
}

export default Header;