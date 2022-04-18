import React from 'react'
import {useParams } from 'react-router-dom';
import '../CSS/Info.css'


export default function Info( {dogs}) {

  const {id} = useParams();
  console.log(id);
  console.log(dogs)
  console.log(dogs[id])
  return (
    <div className='dog-Info'>
      <div>
        <img className="dog-image" src={dogs[id].img} alt={dogs[id].name} />
      </div>
            <div className='text-dog'>
            <h1 className="dog-name"> Dog name is {dogs[id].name}</h1>
            <h3 className="dog-breed"> Dog breed is {dogs[id].breed}</h3>
            <h3 className="dog-age"> Dog age is {dogs[id].age}</h3>
            <h3 className="dog-owner"> Dog owner is {dogs[id].owner.name}</h3>
            </div>
            
    </div>
  )
  
}


