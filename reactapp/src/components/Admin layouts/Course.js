import React ,{useState,useRef,useCallback,useEffect}from "react";
import { Link, useParams } from "react-router-dom";
import Editicon from "../../../aserts/Editicon";
import Deleteicon from "../../../aserts/icons/Deleteicon";

const Course = (props) => {
  const searchCourse = useRef();
  const [data, setData] = useState([]);
  const id= useParams()
  function searchOn(event) {
    event.preventDefault();
    console.log(searchCourse.current.value);
  }

  const FetchDataHandler = useCallback(async () => {
    console.log(id);
    try {
      const response = await fetch(
        `https://localhost:44358/admin/getCourses`
      );
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (error) {
      alert(error.message);
    }
  }, []);
  useEffect(() => {
    FetchDataHandler();
  }, [FetchDataHandler]);
 

  return (
    <div>
      <div style={{ width: "50%" }}>
      <form className="form-inline d-flex flex-row p-2" onSubmit={searchOn}>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
      </div>

      {data.map((item,i) => (
        <div key={i}>
          <div
            
            className="container mt-4 py-4"
            style={{ width: "75%", backgroundColor: "gray" }}
          >
            <div className="row">
              <div className="col">
                <label>Course name :{item.courseName}</label>
              </div>
              <div className="col">
                <label>Number of Students : {item.Numberofstudents}</label>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <label>Course Duration : {item.courseDuration}</label>
              </div>

              <div className="col">
                <label>Course Description : {item.courseDescription}</label>
              </div>
              <div className="row mt-3">
                <div className="col-10">
                  <label>
                    Course Available Timings : {item.courseAvialbleTimngs}
                  </label>
                </div>
                <div className="col">
                  <Link
                    to={`editCourse/${item.courseId}`}
                    style={{ color: "black", textDecoration: "none" }}
                    id="editCourse"
                  >
                   {Editicon}
                  </Link>
                  <button className="btn" onClick={() => props.onDelete(item)}>
                   {Deleteicon}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Link
        to="addCourse"
        style={{
          position: "fixed",
          bottom: "5%",
          right: "2%",
          color: "black",
          backgroundColor: "gray",
          paddingTop: "0.3%",
          paddingBottom: "0.3%",
          textDecoration: "none",
        }}
        id="addCourse"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-right-circle"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
          />
        </svg>{" "}
        Add Course{" "}
      </Link>
    </div>
  );
};

export default Course;
