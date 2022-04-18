import React from 'react'
import { Link } from "react-router-dom";
import Info from './Info';
import '../CSS/register.css'

function Owner( {dogs}) {
  
  return (

      dogs.map((dog, index) => {
        return (
          <div className="Owner">

            
            <Link to={{ 
              
          pathname :`/Info/${index}`

          

          } } id="link-container" >
        
        
        <img src={dog.img} alt="Picture of a dog" className="dog-img" />  
                <p className="dog-name">{dog.name}</p>
                
        </Link>
          
      </div>
        )
      })
  )
}

export default Owner