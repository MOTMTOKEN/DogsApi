import React from 'react'
import {useParams } from 'react-router-dom';


export default function Info( {dogs}) {

  const {id} = useParams();
  console.log(id);
  console.log(dogs)
  console.log(dogs[id])
  return (
    <div>

      
      
      <h1 className="dog-name"> Dog name is {dogs[id].name}</h1>
            <h3 className="dog-breed"> Dog breed is {dogs[id].breed}</h3>
            <img className="dog-image" src={dogs[id].img} alt={dogs[id].name} />
    </div>
  )
  
}


