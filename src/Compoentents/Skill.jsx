import React, { useContext, useState } from 'react';
import { SkillContext } from './Context/SkillContext';
import { AiFillDelete,AiFillEdit } from "react-icons/ai";

const Skill = () => {
  const [edit, setEdit] = useState(false);
  const [val, setvalue] = useState('');
  const [editval, setEditValue] = useState('');
 
  const skillContext = useContext(SkillContext);
   console.log(`Skill`, skillContext); 
const handleVal=(e)=>{
  setvalue(e.target.value)
  console.log(val);
}
  const handleAdd=(e)=>{
    skillContext.setSkills([...skillContext.skills,val])
    setvalue('')
  }
  const handleDelete=(index)=>{ 
    const updateSkill= [...skillContext.skills]
   
    const valrem= updateSkill.splice(index,1)
    // console.log(`update after splice ${valrem}`);
    skillContext.setSkills(updateSkill)

  }
const handleEdit=(index)=>{
  setvalue(skillContext.skills[index])
  setEditValue(index)
}

  const handleEditSave=()=>{
    const updateSkill= [...skillContext.skills]
    

  updateSkill[editval]=val
  skillContext.setSkills(updateSkill)
  setvalue('')


  }
  return (
    <div>
      <h1>Skills</h1>
      {edit && 
      <div>
        <input value={val} onChange={handleVal} type="text" placeholder='skill' />
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleEditSave}>Edit</button>
      </div>
      }
      <button onClick={()=>setEdit(!edit)}>Edit</button>
<ul>
        {skillContext.skills.map((skill, index) => (
          <li key={index}>{skill} { edit && 
            <span>
              <AiFillEdit  style={{marginLeft:'10px'}} onClick={()=>handleEdit(index)} />
            <AiFillDelete style={{marginLeft:'20px'}} onClick={()=>handleDelete(index)}/> 
            </span>
            }</li>
        ))}
      </ul>   
    </div>
  );
};

export default Skill;


