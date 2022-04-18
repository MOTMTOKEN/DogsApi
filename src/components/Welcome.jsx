import React from 'react'
import { Outlet, Link } from "react-router-dom";



function Welcome() {
    
  return (
    <div >
         
       <Link to="/Owner" > <h1 className="welcome" > Welcome</h1> </Link>

       <h2 className="intro">Click the link above to see all the dogs and dog owners!</h2>
        
    </div>
  )
}

export default Welcome