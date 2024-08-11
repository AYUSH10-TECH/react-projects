import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {

    let [btnNameReact, setBtnRameReact] = useState("Signed In")

    let btnName = "Login";
    return (
        <div className="header">
            <div className="logo-container">
                <img 
                    className= "logo" 
                    src={LOGO_URL}>
                </img>
            </div>
            <div className="nav-items">
                <ul>
                    <li> Home</li>
                    <li> About Us</li>
                    <li> Contact Us</li>
                    <li> Cart</li>
                    <button className="login" onClick={() => {
                        btnNameReact === "Signed In" 
                        ? setBtnRameReact("Logout")
                        : setBtnRameReact("Signed In")
                        }}> {btnNameReact}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;