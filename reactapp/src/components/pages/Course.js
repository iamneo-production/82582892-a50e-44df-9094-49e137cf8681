import React from "react";
import { Link } from "react-router-dom";
const Course = (props) => {
  return (
    <div>
      <div style={{ width: "100%" }}>
        <form
          style={{
            marginLeft: "35%",
            marginTop: "2%",
            width: "auto",
            fontVariant: "outlined",
          }}
        >
          <input
            style={{
              paddingLeft: "1%",
              paddingRight: "2%",
              paddingTop: "1%",
              paddingBottom: "1%",
            }}
            type="text"
            placeholder="Type here to search Academy"
          />
          <button
            id="searchButton"
            style={{
              color: "white",
              background: "purple",
              paddingLeft: "1%",
              paddingRight: "1%",
              paddingTop: "1%",
              paddingBottom: "1%",
              marginLeft: "2%",
            }}
          >
            Search
          </button>
        </form>
      </div>
      {props.data1.map((item, cou) => (
        <div>
          <div
            key={cou}
            className="container mt-4 py-4"
            style={{ width: "75%", backgroundColor: "gray" }}
          >
            <div className="row">
              <div className="col">
                <label>Course name :{item.CourseName}</label>
              </div>
              <div className="col">
                <label>Number of Students : {item.Numberofstudents}</label>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <label>Course Duration : {item.CourseDuration}</label>
              </div>

              <div className="col">
                <lable>Course Description : {item.CourseDescription}</lable>
              </div>
              <div className="row mt-3">
                <div className="col-10">
                  <label>
                    Course Available Timings : {item.CourseAvialbleTimngs}
                  </label>
                </div>
                <div className="col">
                  <Link
                    to="/enrollcourse"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-box-arrow-in-down-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.636 2.5a.5.5 0 0 0-.5-.5H2.5A1.5 1.5 0 0 0 1 3.5v10A1.5 1.5 0 0 0 2.5 15h10a1.5 1.5 0 0 0 1.5-1.5V6.864a.5.5 0 0 0-1 0V13.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M5 10.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1H6.707l8.147-8.146a.5.5 0 0 0-.708-.708L6 9.293V5.5a.5.5 0 0 0-1 0v5z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Course;
