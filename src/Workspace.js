import React from 'react'
import './work.css'
const Workspace = () => {
  return (
    <div className="card"><h2>Let's build a Workspace</h2><span className="cross"><i class="fa fa-times" aria-hidden="true"></i></span>
    <p>Boost your productivity by making it easier for 
        everyone to access boards in one location.</p>
        <div className="work">Workspace name</div><span>
           </span><input type="text" placeholder="Taco's Co"/>
        <div className="line">This is the name of your company, team or organization.</div>
       <p className="workspace"
        >workspace Type</p>
        <input type="text" className="second" placeholder="choose..."/>
        <p className="wo"
        >workspace decription  <span className="op">optional</span></p>
        <textarea name="" id="text" cols="30" rows="10" placeholder="our teans everthing orginiges here."></textarea>
        <div className="get">Get your members on board with a few words about your Workspace.</div>
        <button className="btn">contunie</button>
    </div>
  )
}

export default Workspace
