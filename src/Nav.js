import React from 'react'
import './nav.css'
import {Link} from "react-router-dom"

const Nav = () => {
  return (
    <div>
      <nav>
        <ul><li><i class="fa fa-th" aria-hidden="true" id="fa"></i></li><li>Trello </li><li>
          <Link style={{color:"white",textDecoration:"none"}}>workspaces</Link></li>
        <li>services</li> <li>contact</li><li>invite</li><span><input type="text" /><button>search</button></span></ul>

      </nav>

    </div>
  )
}

export default Nav
