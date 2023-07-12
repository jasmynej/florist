import logo from "../images/flower-basket.png"
import {NavLink} from "react-router-dom";
import './layout.css';
function DesktopNav({activePage}){
    return (
        <header id="desktop-nav" className="w-screen flex p-1">
            <div className="flex items-center w-full justify-between">
                <img src={logo} alt="bloom and grow logo" className="w-16"/>
                <div className="flex w-1/2 justify-between mr-1">
                    <NavLink to="/" className="nav-item">
                        <p>Home</p>
                    </NavLink>
                   <NavLink to="/about"  className="nav-item">
                       <p>About Us</p>
                   </NavLink>
                    <NavLink to="/services"  className="nav-item">
                        <p>Services</p>
                    </NavLink>
                    <NavLink to="/contact"  className="nav-item">
                        <p>Contact</p>
                    </NavLink>
                </div>
            </div>
        </header>
    )
}

export default DesktopNav;