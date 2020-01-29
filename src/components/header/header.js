import React from "react";
import Logo from '../../img/logo.png'
import "./top-bar.css";
// import {Link} from "react-router-dom";
function TopBar() {
    return (
        <header className="header">
            <img className="logo" src={Logo} alt='Logo' />
        </header>
    );
}
export default TopBar;