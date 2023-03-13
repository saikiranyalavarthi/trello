import React from 'react'
import Nav from './Nav'
import{BrowserRouter as Router,Routes}from 'react-router-dom';
import Home from './Home';
import Main from './Main';


// import Workspace from './Workspace';




const App = () => {
  return (
    <div>
    <Router>
    <Nav/>
    <Home/>
    <Main/>
   

      <Routes>
   
      </Routes>
  
    </Router>
       </div>
  )
}

export default App
