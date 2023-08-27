import React, { useContext } from 'react'
import { DataContext } from './Context/DataContext'
const Experience = () => {
    const data =useContext(DataContext)
    // console.log(`experience`,data.experience);
  return (
    <div>
        <h1>Experience</h1>
        <ul >
        {data.experience.map((experience, index) => (
          <li  key={index}>
            <h4>{experience.company}</h4>
            <h5> {experience.position} </h5>
         <h6>   {experience.duration} </h6>

          </li>
        ))}
      </ul>
    </div>
  )
}

export default Experience