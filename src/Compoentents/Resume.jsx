import React, { useContext } from 'react';
import Skill from './Skill';

import { SkillProvider } from './Context/SkillContext';
import UserDetail from './UserDetail';
import Education from './Education';
import Experience from './Experience';
import { EducationProvider } from './Context/EducationContext';

const Resume = () => {
  

  // console.log(`val ${contextValue}`);

  return (
    <div>
      <h1>hello</h1>
      <SkillProvider>
      <Skill/>
      </SkillProvider>
      <EducationProvider>
    <Education/>
    </EducationProvider>


      {/* <DataProvider> */}
      {/* <UserDetail/> */}
    {/* <SkillProvider> */}
      {/* <Skill /> */}
      {/* </SkillProvider> */}
    {/* <Experience/> */}
      {/* </DataProvider> */}
    </div>
  );
};

export default Resume;
