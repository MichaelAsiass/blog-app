import React from 'react'
import './/TechJunkie.css';

function SideBar() {
  return (
    <div id="sidebar">
      <h3>More Content</h3>
      <ul class="sidemenu">
        <li><a href="/">Blog1</a></li>
        <li><a href="/">Blog 2 </a></li>
        <li><a href="/">Blog 3</a></li>
        <li><a href="/">Blog 4</a></li>
        <li><a href="/">Blog 5</a></li>
      </ul>
      <h3>Free Resources</h3>
      <ul class="sidemenu">
        <li><a href="">Resources1</a></li>
        <li><a href="">Resources2</a></li>
        <li><a href="">Resources3</a></li>
        <li><a href="">Resources4</a></li>
      </ul>
      <h3>Free Sites</h3>
      <ul class="sidemenu">
        <li><a href="">Site1 <br />
          <span>Site1</span></a></li>
        <li><a href="/">Site2<br />
          <span>Site2</span></a></li>
        <li><a href="/">Site3<br />
          <span>Site3</span></a></li>
        <li><a href="/">Site4 <br />
          <span>Site4</span></a> </li>
        <li><a href="/">Site5 <br />
          <span>Site5</span></a></li>
        <li><a href="/">Site6 <br />
          <span>Site6</span></a></li>
      </ul>
      <h3>Search Box</h3>
      <form class="searchform" action="http://all-free-download.com/free-website-templates/" method="get">
        <p>
          <input name="search_query" class="textbox" type="text" />
          <input name="search" class="button" value="Search" type="submit" />
        </p>
      </form>
      <h3>Support Us ❤️ </h3>
      <p>If you are interested in supporting my work and would like to contribute, you are welcome to make a small
        donation through the donate link on my website - it will be a great help and will surely be appreciated.</p>
    </div>
  )
}

export default SideBar