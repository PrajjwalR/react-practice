import { LOGO_URL } from "../utils/constant";
import { useState } from "react";

const Header = () => {
    let [btnName, setBtnName] = useState("Login");
    
    return(
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL} alt="logo" />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
                <button className="login-btn" onClick={()=>{
                    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                }}>{btnName}</button>
            </div>
        </div>
    )
}

export default Header;