import React from "react";
import { Link } from "react-router-dom";
import Review from "./Review";
export default class Enrolledcourse extends React.Component {
  state = {
    loading: true,
    person: null,
  };
  async componentDidMount() {
    const url = "https://localhost:44358/admin/Regetcourses";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ person: data, loading: false });
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
        {this.state.person.map((item,index)=>
        <div key={index}
          className="container mt-4 py-4"
          style={{
            width: "50%",
            height: "40%",
            backgroundColor: "lightgray",
            marginLeft: "5%",
          }}
        >
          <div className="row mt-3">
            <div className="col">
              <label style={{ paddingTop: "5px", paddingLeft: "15px" }}>
                Course Name : {item.courseName}{" "}
              </label>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <label style={{ paddingTop: "5px", paddingLeft: "15px" }}>
                Joined date : {item.joinDate.split('T')[0]}{" "}
              </label>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <label style={{ paddingTop: "5px", paddingLeft: "15px" }}>
                Course end date : {}
              </label>
            </div>
          </div>

          <button className="btn btn-primary pr-2">
            My Learning
          </button>

          <Link  className="btn btn-success pr-2" to = {'Review'}>
           Review
          </Link>

        </div>)}
      </div>
    );
  }
}
