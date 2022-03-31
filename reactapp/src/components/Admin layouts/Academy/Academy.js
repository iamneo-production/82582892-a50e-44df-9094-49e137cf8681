import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Editicon from "../../../aserts/Editicon";
import Deleteicon from "../../../aserts/icons/Deleteicon";
const Academy = () => {
  const searchCourse = useRef();
  const [academy, setAcademy] = useState([]);
  function searchOn(event) {
    event.preventDefault();
    console.log(searchCourse.current.value);
  }

  const FetchAcademyHandler = useCallback(async () => {
    try {
      const response = await fetch(
        "https://localhost:44358/admin/getInstitutes"
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

 async function deleteAcademy (id) {
  try {
    const response = await fetch(
      `https://localhost:44358/admin/deleteInstitute/${id}`,{
        method: 'DELETE'
      }
    );
    if (!response.ok) {
      throw new Error("something went wrong");
    }
    const data = await response.json();
    console.log(data);
    FetchAcademyHandler();
  } 
  catch (error) {
    alert(error.message);
  }
 }

  return (
    <div>
      <div style={{ width: "50%" }}>
        <form className="form-inline d-flex flex-row p-2" onSubmit={searchOn}>
          <input
            ref={searchCourse}
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

      <div className="row mt-5">
        {academy.map((item) => (
          <div className="card col-3 m-5">
            <img
              className="card-img-top"
              src={item.imageurl}
              alt="CourseImage"
              width={100}
              height={200}
            />
            <div className="card-body ">
              <div className="row">
                <p className="card-text col">
                  AcademyName: {item.instituteName}
                </p>
              </div>
              <div className="row">
                <p className="card-text col" id="adminAcademyGrid1">
                  Place: {item.institueAddress}
                </p>
                <div className="col">
                  <Link
                    to = {`editAcademy/${item.instituteId}`}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    {Editicon}
                  </Link>
                  &nbsp;&nbsp;
                  <button className="btn" onClick={deleteAcademy.bind(this,[item.instituteId])}>{Deleteicon}</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link
        to="addacademy"
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
        Add Academy{" "}
      </Link>
    </div>
  );
};

export default Academy;
