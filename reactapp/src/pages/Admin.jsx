import React,{useState} from 'react'
import { useNavigate} from 'react-router-dom';
import { Route, Routes,useLocation } from 'react-router-dom';
import data from '../components/Admin layouts/Student/mock-data.json'
import Navbar from '../components/Admin layouts/Navbar.js';
import AddAcademy from '../components/Admin layouts/Academy/AddAcademy';
import Academy from '../components/Admin layouts/Academy/Academy';
import EditAcademy from '../components/Admin layouts/Academy/EditAcademy';
import Course from '../components/Admin layouts/Course/Course';
import EditCourse from '../components/Admin layouts/Course/EditCourse'
import AddCourse from '../components/Admin layouts/Course/AddCourse';
import Table from '../components/Admin layouts/Student/Table';
import AddStudent from '../components/Admin layouts/Student/AddStudent';
import EditStudent from '../components/Admin layouts/Student/EditStudent';
function Admin() {
   
     const [contacts , setContacts] = useState(data)
     const navigate = useNavigate()
     const location = useLocation()

 return(<div>     
      <Navbar/>
      <Routes>
      <Route path="academy" element={<Academy/>}/>
      <Route path="academy/addAcademy" element={<AddAcademy/>}/>
      <Route path="academy/editAcademy/:id" element={<EditAcademy/>}/>
      
    
      <Route path="course" element={<Course/>}/>
      <Route path='course/editCourse/:id' element={<EditCourse/>}/>
      <Route path='course/addCourse' element={<AddCourse/>}/>

      <Route path="student" element={<Table contacts={contacts} setContacts={setContacts} />}  />
      <Route path="student/addstudent" element={<AddStudent  navigate={navigate} setContacts={setContacts}/>}/>
      <Route path='student/editStudent' element={<EditStudent  location={location} navigate={navigate} setContacts={setContacts} contacts={contacts}/>}/>
      </Routes>
     
 </div>)   
 
}


export default Admin