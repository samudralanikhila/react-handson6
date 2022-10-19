import React from 'react';
import { useNavigate} from 'react-router-dom'

const Ads = (props) => {
    const navigate = useNavigate();
    const add = () => {
        const updatedSArr = [...props.sArr];
          let currentArr = updatedSArr[props.sArr.length];
          currentArr = {id: props.id+1, name: props.name, age: props.age, course: props.course, batch: props.batch }
          updatedSArr[props.sArr.length] = currentArr;
          props.setsArr(updatedSArr);
        navigate('/students');
    }
    return (
        <>
            <div className='edit-container'>
                <div className='edit-row'>
                    <input type="text" autoComplete='true' placeholder='Name' onChange={(e) => props.setName(e.target.value)} />
                    <input type="number" autoComplete='true' placeholder='Age' onChange={(e) => props.setAge(e.target.value)} />
                </div>
                <div className='edit-row'>
                    <input type="text" autoComplete='true' placeholder='Course' onChange={(e) => props.setCourse(e.target.value)} />
                    <input type="text" autoComplete='true' placeholder='Batch' onChange={(e) => props.setBatch(e.target.value)} />
                </div>
            </div>
            <button className='btn-pos' onClick={()=>{navigate('/students')}}  >Cancel</button>
            <button className='btn-pos' onClick={add} >Add</button>

        </>
     );
}

export default Ads