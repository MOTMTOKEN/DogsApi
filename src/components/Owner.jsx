import React from 'react'
import { Link } from "react-router-dom";
import Info from './Info';

function Owner( {dogs}) {
  
  return (

      dogs.map((dog, index) => {
        return (
          <div className="Owner">

            
            <Link to={{ 
              
          pathname :`/Info/${index}`

          

          } }  >
        <h1> {dog.owner.name}  {dog.owner.lastName} </h1> 
        <h3> Owners number is; {dog.owner.phoneNumber} </h3>
        </Link>
          
      </div>
        )
      })
  )
}

export default Owner