import React from "react";
import { useHistory } from "react-router-dom";

const Academy = () => {
  let history = useHistory();
  const viewCourse = () => {
    history.push(`/viewCourse/${1}`);
  };
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
              width: "35%",
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
      <br />
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;
      <div className="row">
        <div
          className="card col "
          onClick={viewCourse()}
          style={{ width: "20rem" }}
        >
          <img
            className="card-img-top"
            src="./images/pic1.jpg"
            alt=""
            width={100}
            height={200}
          />
          <div className="card-body ">
            <div className="row">
              <p className="card-text col">Abacus Center</p>
              <div className="col">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </div>
            </div>
            <div className="row">
              <p className="card-text col" id="userAcademyGrid1">
                Place:Chennai
              </p>
            </div>
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;
        <div className="card col" style={{ width: "20rem" }}>
          <img
            className="card-img-top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfMbmN_1hZXcPkR46_GAH9EfxZQwduokcsrA&usqp=CAU"
            alt=""
            width={100}
            height={200}
          />
          <div className="card-body ">
            <div className="row">
              <p className="card-text col">Abacus Academy</p>
              <div className="col">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
              </div>
            </div>
            <div className="row">
              <p className="card-text col" id="userAcademyGrid2">
                Place:Bangalore
              </p>
            </div>
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;
        <div className="card col" style={{ width: "20rem" }}>
          <img
            className="card-img-top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfMbmN_1hZXcPkR46_GAH9EfxZQwduokcsrA&usqp=CAU"
            alt=""
            width={100}
            height={200}
          />
          <div className="card-body ">
            <div className="row">
              <p className="card-text col">Abc academy</p>
              <div className="col">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
              </div>
            </div>
            <div className="row">
              <p className="card-text col" id="userAcademyGrid3">
                Place:Coimbatore
              </p>
            </div>
          </div>
        </div>
        &nbsp;&nbsp;
      </div>
    </div>
  );
};
export default Academy;
