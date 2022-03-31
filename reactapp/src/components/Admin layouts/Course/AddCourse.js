import React, { useRef,useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCourse(props) {
  const navigate = useNavigate();
  const [Err_msg, setErr_msg] = useState(false);
  const [msg, setmsg] = useState("");
  //const courseId = useRef();
  const courseName = useRef();
  const courseDescription = useRef();
  const courseDuration = useRef();
  let formData = {};
  var errors = ["Please fill all the input fields"];

  async function postAddCourse() {
    try {
      const response = await fetch("https://localhost:44358/admin/addCourse", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      alert(data.message);
      if (response.ok) navigate("/admin/course");
      else return;
    } catch {
      return false;
    }
  }
  const submit = (event) => {
    event.preventDefault();
    formData.courseName = courseName.current.value;
    formData.courseDescription = courseDescription.current.value;
    formData.courseDuration = courseDuration.current.value;
    //formData. = .current.value;

    setErr_msg(false);
    if (
      !(
        formData.courseName &&
        formData.courseDescription &&
        formData.courseDuration
        //formData.email
        
      )
    ) {
      setmsg(errors[0]);
      setErr_msg(true);
      return;
    }
        postAddCourse();
  };

  return (
    <div style={{ backgroundColor: "gray", height: "100vh" }}>
      <div
        className="container mt-4 py-4"
        style={{ width: "75%", backgroundColor: "gray" }}
      >
        <div className="row">
          <div className="col">
            <input
              ref={courseName}
              id="courseName"
              type="text"
              placeholder="Enter the Course Name"
              style={{
                paddingLeft: "2%",
                paddingRight: "20%",
                paddingTop: "3%",
                paddingBottom: "3%",
                marginTop: "10%",
                width: "60%",
              }}
            />
          </div>
          <div className="col">
            <input

              id="courseEnrolled"
              type="number"
              placeholder="Enter no of students enrolled for the course"
              style={{
                paddingLeft: "2%",
                paddingRight: "20%",
                paddingTop: "3%",
                paddingBottom: "3%",
                marginTop: "10%",
                width: "90%",
              }}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col" id="courseDuration">
            <input
              ref={courseDuration}
              id="courseDuration"
              type="text"
              placeholder="Enter the Course duration"
              style={{
                paddingLeft: "2%",
                paddingRight: "20%",
                paddingTop: "3%",
                paddingBottom: "3%",
                marginTop: "10%",
                width: "65%",
              }}
            />
          </div>
          <div className="col" id="courseDescription">
            <input
              ref={courseDescription}
              id="courseDescription"
              name="objectToSearch"
              type="text"
              placeholder="Enter the Course description"
              style={{
                paddingLeft: "2%",
                paddingRight: "40%",
                paddingTop: "2%",
                paddingBottom: "20%",
                marginTop: "10%",
                width: "90%",
              }}
            />
          </div>
          <div className="row mt-3">
            <div className="col" id="courseTiming">
              <input
                id="courseTiming"
                type="text"
                placeholder="Enter the Course timing"
                style={{
                  paddingLeft: "2%",
                  paddingRight: "20%",
                  paddingTop: "3%",
                  paddingBottom: "3%",
                  width: "40%",
                }}
              />
            </div>
            {Err_msg && (
              <div className="alert alert-danger alert-dismissible fade show m-3">
                <strong>Error!</strong> {msg}
              </div>
            )}
            <div className="col">
              <form onSubmit={submit}>
                <button
                  style={{
                    position: "fixed",
                    bottom: "5%",
                    right: "2%",
                    color: "black",
                    backgroundColor: "green",
                    paddingTop: "0.3%",
                    paddingBottom: "0.3%",
                    textDecoration: "none",
                  }}
                  id="addCourse"
                >
                  Add Course
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCourse;
