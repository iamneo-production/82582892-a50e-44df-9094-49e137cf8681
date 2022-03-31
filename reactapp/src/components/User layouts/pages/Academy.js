import React,{useCallback,useState,useEffect} from "react";
import { useNavigate,Link } from "react-router-dom";

const Academy = () => {
  const navigate = useNavigate();
  const [academy, setAcademy] = useState([]);
  
  

  const FetchAcademyHandler = useCallback(async () => {
    try {
      const response = await fetch(
        "https://localhost:44358/user/getInstitutes"
      );
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const data = await response.json();
      console.log(data);
      setAcademy(data);
    } catch (error) {
      alert(error.message);
    }
  }, []);
  useEffect(() => {
    FetchAcademyHandler();
  }, [FetchAcademyHandler]);
  const viewCourse = () => {
    navigate(`/viewCourse/${1}`);
  };
  return (
    <div>
      <div style={{ width: "50%" }}>
      <form className="form-inline d-flex flex-row p-2" >
          <input
            
            className="form-control mr-sm-2"
            type="search"
            placeholder="Type to search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    
    
      <div className="row mt-4">
       {academy.map((item)=> <div className="card col-3 m-3 d-flex justify-content-around" style={{ width: "20rem" }}>
          <img
            className="card-img-top"
            src={item.imageurl}
            alt="CourseImage"
            width={100}
            height={200}
          />
          <div className="card-body ">
            <div className="row">
              <p className="card-text col">AcademyName: {item.instituteName}</p>
            
            </div>
            <div className="row">
              <p className="card-text col" id="userAcademyGrid1">
              Place: {item.institueAddress}
              </p>
            </div>
            <div className="row my-1">
             <Link to="/user/course"className="btn btn-primary" style={{boxShadow:"none"}}>Go to Courses </Link>
            </div>
          </div>
        </div>)}
      
      </div>
    </div>
  );
};
export default Academy;
