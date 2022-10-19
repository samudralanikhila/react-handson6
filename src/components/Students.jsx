import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

const  Students = (props) =>{
  const navigate = useNavigate();
  const studentList = () =>{ return props.sArr.map(
    (item,index) => {
    return(
         <div key={`${index}`} className="row">
            <div>{item.name}</div>
            <div>{item.age}</div>
            <div>{item.course}</div>
            <div>{item.batch}</div>
            <div><Link to ={`/desc/${index}`}  ><button onClick={()=>{props.setI(index)}}>Edit</button></Link></div>
        </div> 
    )
    }
  )}
    return (
      <div> {console.log(props.sArr)}
        <div className='student-heading'>
        <h1>Students Details</h1>
         <button className='btn-addstudent' onClick={()=>{navigate('/students/addnew')}} >Add new student</button>
       
        </div>
        <div className='container'>
          <div className="row">
            <div>Name</div>
            <div>Age</div>
            <div>Course</div>
            <div>Batch</div>
            <div>Change</div>
          </div>
          {studentList()}
      </div>
        
      </div>
    );
 
}

export default Students;