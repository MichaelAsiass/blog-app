import React from 'react'
import './/TechJunkie.css';

function Navbar() {
  return (
    <div id="nav">
      <ul>
        <li id="current"><a href="/">Home</a></li>
        <li><a href="/">Services</a></li>
        <li><a href="/">Support</a></li>
        <li><a href="/">About</a></li>
      </ul>
    </div>
  )
}

export default Navbar