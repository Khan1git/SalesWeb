import React from 'react'
import './css/navbar.css'
// import { Link } from "react-router-dom"

const Navbar = () => {



  return (
    <div>
      <nav>
        <div className="logo">
          Sales
          <span>
            Mate
          </span>
        </div>
        <input type="checkbox" id="click" />
        <label htmlfor="click" className="menu-btn">
          <i className="fas fa-bars">=</i>
        </label>
        <ul>
          <li><a className="" href="/">Home</a></li>
          <li><a href="/sales">Shop</a></li>
          <li><a href="/products">Pricing</a></li>
          <li><a href="/invoice">Blog</a></li>
          <button><a href="/contact">Contact</a></button>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
