import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    let [btnNameReact, setBtnRameReact] = useState("Signed In")
    console.log(' Header renderd')

    // no empty array, it is called on every render
    //if dependency array empty, it is called on initial render(just once)
    //if dependency array is [something], => called everytime something is updated
    useEffect(() => {
        console.log('useEffect caled')
    }, []);

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
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to = "/about"> About Us</Link></li>
                    <li> 
                        <Link to = "/contact">Contact Us</Link></li>
                    <li><a href = "/contact">Cart</a></li>
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