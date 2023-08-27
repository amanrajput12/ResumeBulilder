import React, { createContext, useState } from "react";

const SkillContext =createContext()
const skill=["Html","Css","js"]
const SkillProvider = ({ children }) => {
  const [skills, setSkills] = useState(skill);
  console.log(`skills ${Array.isArray(skills)}`);
  

  return (
    <SkillContext.Provider value={ {skills ,setSkills}}>
      {children}
    </SkillContext.Provider>
  );
};

export { SkillProvider, SkillContext };
