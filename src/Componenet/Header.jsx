import React  from "react";
import './Header.css'

const Header =()=>{
    return(
        <nav className="App-navbar">
        <ul>
          <li><a href="#home">Maryam</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    )
}
export default Header