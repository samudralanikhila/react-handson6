import './App.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Students from './components/Students';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import Edit from './components/Edit';
import Ads from './components/Ads';
import {useState} from 'react';

function App() {
  // let [{name, age, course, batch}, {setName, setAge, setCourse, setBatch}] = useState(''); 
  // let [id, setId] = useState(4);
  let id = 4;
  let [name, setName] = useState('');
  let [age, setAge] = useState('');
  let [course, setCourse] = useState('');
  let [batch, setBatch] = useState('');

  //edit id
  let [i,setI] = useState(0);


  let [sArr, setsArr] = useState([{id:0, name:'S.nikhila', age:'24', course:'MERN', batch:'aug'},
  ]);

  const handleUpdateName = (e,i) =>{
    setName(e.target.value);
    const updatedSArr = [...sArr];
    let currentArr = updatedSArr[i];
    currentArr = {id:id+1, name: e.target.value, age: currentArr.age, course: currentArr.course, batch: currentArr.batch}
    updatedSArr[i] = currentArr;
    setsArr(updatedSArr);
    console.log(sArr[i]);
  }
  const handleUpdateAge = (e,i) =>{
    setAge(e.target.value);
    const updatedSArr = [...sArr];
    let currentArr = updatedSArr[i];
    currentArr = {id:id+1, name: currentArr.name, age: e.target.value , course: currentArr.course, batch: currentArr.batch}
    updatedSArr[i] = currentArr;
    setsArr(updatedSArr);
    console.log(sArr[i]);

  }
  const handleUpdateCourse = (e,i) =>{
    setCourse(e.target.value);
    const updatedSArr = [...sArr];
    let currentArr = updatedSArr[i];
    currentArr = {id:id+1, name: currentArr.name, age: currentArr.age, course: e.target.value, batch: currentArr.batch}
    updatedSArr[i] = currentArr;
    setsArr(updatedSArr);
    console.log(sArr[i]);

  }
  const handleUpdateBatch = (e,i) =>{
    setBatch(e.target.value);
    const updatedSArr = [...sArr];
    let currentArr = updatedSArr[i];
    currentArr = {id:id+1, name: currentArr.name, age: currentArr.age, course: currentArr.course, batch: e.target.value }
    updatedSArr[i] = currentArr;
    setsArr( updatedSArr);
    console.log(sArr[i]);
  }
 
  return (
    <div className="App"> 
      <BrowserRouter>
          <div>
            <ul className="navbar">
              <li>
                <Link to='/' className='text-normal'>Home</Link>
              </li>
              <li>
              <Link to='/students' className='text-normal'>Students</Link>
              </li>
              <li>
              <Link to='/contactUs' className='text-normal'>Contact Us</Link>
              </li>
            </ul>
          </div>
          <Routes>
              <Route path='/' element={<Home />} ></Route>
              <Route path='/students' element={<Students sArr={sArr} setI={setI}  />} ></Route>
              <Route path='/desc/:id' element={<Edit sArr={sArr} i={i}  handleUpdateName={handleUpdateName} handleUpdateAge={handleUpdateAge} handleUpdateCourse={handleUpdateCourse} handleUpdateBatch={handleUpdateBatch} />} ></Route>
              <Route path='/contactUs' element={<ContactUs />} ></Route>
              <Route path='/students/addnew' element={<Ads sArr={sArr} id={id} name={name} age={age} course={course} batch={batch} setName={setName} setAge={setAge} setCourse={setCourse} setBatch={setBatch} setsArr={setsArr}  />} ></Route>

          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;