import React from 'react'
import './App.css'

const Home = () => {
  return (
    <div>
     <div className="list">
<p>Boards </p> 
        <p>Templates</p>
        <p>Home</p> 
    </div>
    <div className="line">Workspaces <span> +</span></div>
    <div className="dropdown">
        <button className="dropbtn">Trello workspaces <i class="fa fa-caret-down" aria-hidden="true"></i></button>
        <div className="dropdown-content">
          <a href="#">Boards</a>
          <a href="#">Highlights</a>
          <a href="#">Members </a>
          <a href="#">views</a>
          <a href="#">settings</a>
           </div>
      </div>

      </div>
  )
}

export default Home
