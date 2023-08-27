import { createContext, useState } from "react";

const EducationContext = createContext()
const  education =[{
    institution:"Sd College of Engineering",
    degree:"Btech",
    year:'2020'
  }]
const EducationProvider =({children})=>{
    const [educations,setEducations]=useState(education)
    return(
        <EducationContext.Provider value={{educations,setEducations}}>
            {children}
        </EducationContext.Provider>
    )
}
export {EducationContext,EducationProvider}