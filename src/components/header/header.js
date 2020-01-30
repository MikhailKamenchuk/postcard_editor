import React from "react";
import Logo from '../../img/logo.png'
import "./header.css";
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className="header row">
            <Link to='/'><img className="logo" src={Logo} alt='Logo' /></Link>
            <Link to='/editor'><button className='btn btn-info'>Go to editor</button></Link>
        </header>
    );
}
export default Header;