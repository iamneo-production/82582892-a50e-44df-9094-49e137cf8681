import { Navigate, Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Login from "./pages/Login";
import User from "./pages/User";
// import Course from "./pages/Course";
// import EnrollCourse from "./pages/EnrollCourse";



function App() {
  return(
<div>
  <Routes>
    <Route path='/'element={<Navigate to="/login"/>}/>
    
    <Route path="/login" element={<Login/>}/>
    <Route path='/signup'  element={<Auth/>}/>
    <Route path='/user/*' element={<User/>}/>
    <Route path="/admin/*" element={<Admin/>}/>
   
  </Routes>
</div>);
}
export default App;

