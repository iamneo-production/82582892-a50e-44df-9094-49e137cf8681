import React from "react";
import { Link } from "react-router-dom";
export default class Course extends React.Component {
  state = {
    loading: true,
    person: null,
  };
  
  async componentDidMount() {
    const url = "https://localhost:44358/admin/getCourses";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data, loading: false });
    console.log(this.state.person);
  }
  setcourseIds(courseId,academyId){
    localStorage.setItem("courseId",courseId);
    localStorage.setItem("academyId",academyId);

  }
  
  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }
    if (!this.state.person) {
      return <div>didnt get a person</div>;
    }
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
        <div>
          {this.state.person.map((item,index)=><div
          key={index}
            className="container mt-4 py-4"
            style={{ width: "75%", height: "40%", backgroundColor: "gray" }}
          >
            <div className="row">
              <div className="col">
                <label>Course name :{item.courseName}</label>
              </div>
              <div className="col">
                <label>
                  Number of Students : {this.state.person.first}
                </label>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <label>Course Duration : {item.courseDuration}</label>
              </div>

              <div className="col">
                <label>
                  Course Description : {item.courseDescription}
                </label>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <label>
                    Course Available Timings : {this.state.person.first}
                  </label>
                </div>
                <div className="col">
                  <Link onClick={this.setcourseIds.bind(this,[item.courseId,item.academyId])} className="btn btn-success" to = {`enrollcourse/${item.courseId}`}
                  >
                    Enroll Course
                  </Link>
                </div>
              </div>
            </div>
          </div>)}
        </div>
      </div>
    );
  }
}
