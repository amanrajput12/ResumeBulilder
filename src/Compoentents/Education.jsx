import React, { useContext ,useState} from 'react';
import { EducationContext } from './Context/EducationContext';
import { AiFillDelete,AiFillEdit } from "react-icons/ai";
const Education = () => {
  const [edit, setEdit] = useState(false);
  const [val, setvalue] = useState('');
  // const [editval, setEditValue] = useState('');
  const data = useContext(EducationContext);
  console.log(`education`, data.educations);
  const handleVal =()=>{

  }
  const handleAdd=()=>{

  }
  const handleEditSave=()=>{

  }
  return (
    <div>
      <h1>Education</h1>
      {edit && 
      <div>
        <input value={val} onChange={handleVal} type="text" placeholder='skill' />
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleEditSave}>Edit</button>
      </div>
      }
 <button onClick={()=>setEdit(!edit)}>Edit</button>
      <ul>
        {data.educations.map((education, index) => (
          <li key={index}>
           <li> {education.institution} { edit && 
            <span>
              <AiFillEdit  style={{marginLeft:'10px'}} onClick={()=>handleEdit(index)} />
            <AiFillDelete style={{marginLeft:'20px'}} onClick={()=>handleDelete(index)}/> 
            </span>
            } </li>
           <li> {education.degree} { edit && 
            <span>
              <AiFillEdit  style={{marginLeft:'10px'}} onClick={()=>handleEdit(index)} />
            <AiFillDelete style={{marginLeft:'20px'}} onClick={()=>handleDelete(index)}/> 
            </span>
            } </li>
           <li> {education.year}  { edit && 
            <span>
              <AiFillEdit  style={{marginLeft:'10px'}} onClick={()=>handleEdit(index)} />
            <AiFillDelete style={{marginLeft:'20px'}} onClick={()=>handleDelete(index)}/> 
            </span>
            }</li>
          
          </li>
          
        ))}
      </ul>
    </div>
  );
};

export default Education;
