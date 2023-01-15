import React from 'react';
import './/TechJunkie.css';

function Header() {
  return (

    <div id="wrap">
      <div id="header">
        <h1 id="logo-text"><a href="">TheFreeCodingJourney👨‍💻 </a></h1>
        <p id="slogan">Learn All Things Coding 100% Free</p>
        <form id="quick-search" action="/" method="get">
          <p>
            <label for="qsearch">Search:</label>
            <input class="tbox" id="qsearch" type="text" name="qsearch" value="" title="Start typing and hit ENTER" />
            <input class="btn" alt="Search" type="image" name="searchsubmit" title="Search" src="'./images/search.gif'" />
          </p>
        </form>
      </div>
    </div>

  )
}

export default Header