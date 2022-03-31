import { useRef,useState } from "react";
import { useNavigate } from "react-router-dom";

function EditCourse(props) {
  const navigate = useNavigate();
  const [Err_msg, setErr_msg] = useState(false);
  const [msg, setmsg] = useState("");
  const courseId = useRef();
  const editCourseName = useRef();
  const editCourseDescription = useRef();
  const editCourseDuration = useRef();
  let formData = {};
  var errors = ["Please fill all the input fields"];

  async function putEditCourse() {
    try {
      const response = await fetch(
        "https://localhost:44358/admin/editCourse/courseId",
        {
          method: "PUT",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const data = await response.json();
      //alert(data.message);
      console.log(data);
      if (response.ok) navigate("/admin/course");
      else return;
    } catch {
      return false;
    }
  }
  const submit = (event) => {
    event.preventDefault();
    formData.courseName = editCourseName.current.value;
    formData.courseDescription = editCourseDescription.current.value;
    formData.courseDuration = editCourseDuration.current.value;
    //formData. = .current.value;

    setErr_msg(false);
    if (
      !(
        (
          formData.courseName &&
          formData.courseDescription &&
          formData.courseDuration
        )
        //formData.email
      )
    ) {
      setmsg(errors[0]);
      setErr_msg(true);
      return;
    }
    putEditCourse();
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
              ref={editCourseName}
              id="editCourseName"
              type="text"
              placeholder="Enter the Course Name"
              style={{
                paddingLeft: "2%",
                paddingRight: "20%",
                paddingTop: "3%",
                paddingBottom: "3%",
                marginTop: "10%",
              }}
            />
          </div>
          <div className="col">
            <input
              id="editCourseEnrolled"
              type="text"
              placeholder="Enter no of students enrolled for the course"
              style={{
                paddingLeft: "2%",
                paddingRight: "20%",
                paddingTop: "3%",
                paddingBottom: "3%",
                marginTop: "10%",
              }}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <input
              ref={editCourseDuration}
              id="editCourseDuration"
              type="text"
              placeholder="Enter the Course duration"
              style={{
                paddingLeft: "2%",
                paddingRight: "20%",
                paddingTop: "3%",
                paddingBottom: "3%",
                marginTop: "10%",
              }}
            />
          </div>
          <div className="col">
            <input
              ref={editCourseDescription}
              id="editCourseDescription"
              type="text"
              placeholder="Enter the Course description"
              style={{
                paddingLeft: "2%",
                paddingRight: "40%",
                paddingTop: "2%",
                paddingBottom: "20%",
                marginTop: "10%",
              }}
            />
          </div>
          <div className="row mt-3">
            <div className="col">
              <input
                type="text"
                id="editCourseTiming"
                placeholder="Enter the Course timing"
                style={{
                  paddingLeft: "2%",
                  paddingRight: "20%",
                  paddingTop: "3%",
                  paddingBottom: "3%",
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
                  id="updateCourse"
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
                >
                  Update Course
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCourse;
