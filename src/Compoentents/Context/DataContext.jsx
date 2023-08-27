import React, { createContext, useState } from 'react'
import { SkillContext } from './SkillContext'
const DataContext = createContext()

const Data ={
    name:"Aman Rajput",
    title:"Front end Developer",
   
    education:[{
      institution:"Sd College of Engineering",
      degree:"Btech",
      year:'2020'
    }],
    experience:[{
      company:"Ineuron",
      position:"sde",
    }]
  }
const DataProvider = ({children}) => {
    const [dataval,setDataval] = useState({...Data})

 
    

  return (
    <DataContext.Provider value={dataval}>
        {children}
    </DataContext.Provider>
  )
}

export  {DataProvider,DataContext}