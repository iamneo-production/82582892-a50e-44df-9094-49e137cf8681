import React from "react";
import "bootstrap/dist/css/bootstrap.css";
function EnrollCourse(props) {
  return (
    <div style={{ backgroundColor: "gray", height: "100vh" }}>
      <div className="row">
        <div className="col">
          <input
            type="text"
            placeholder="enter your first name"
            id="firstName"
            style={{
              paddingLeft: "2%",
              paddingRight: "20%",
              paddingTop: "3%",
              paddingBottom: "3%",
              marginTop: "10%",
              marginLeft: "4%",
            }}
          />
        </div>
        <div className="col">
          <input
            type="text"
            placeholder="enter your last name"
            id="lastName"
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
            type="text"
            placeholder="enter male or female"
            id="malefemale"
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
      <div className="row">
        <div className="col">
          <input
            type="text"
            placeholder="enter your father name"
            id="fatherName"
            style={{
              paddingLeft: "2%",
              paddingRight: "20%",
              paddingTop: "3%",
              paddingBottom: "3%",
              marginTop: "10%",
              marginLeft: "4%",
            }}
          />
        </div>
        <div className="col">
          <input
            type="text"
            placeholder="enter phone number"
            id="phoneNumber1"
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
            type="text"
            placeholder="enter alternate number"
            id="phoneNumber2"
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
      <div className="row">
        <div className="col">
          <input
            type="text"
            placeholder="enter your mother name"
            id="motherName"
            style={{
              paddingLeft: "2%",
              paddingRight: "20%",
              paddingTop: "3%",
              paddingBottom: "3%",
              marginTop: "10%",
              marginLeft: "4%",
            }}
          />
        </div>
        <div className="col">
          <input
            type="text"
            placeholder="enter email Id"
            id="emailId"
            style={{
              paddingLeft: "2%",
              paddingRight: "20%",
              paddingTop: "3%",
              paddingBottom: "3%",
              marginTop: "10%",
              marginLeft: "1%",
            }}
          />
        </div>
        <div className="col">
          <input
            type="text"
            placeholder="enter your age"
            id="age"
            style={{
              paddingLeft: "2%",
              paddingRight: "20%",
              paddingTop: "3%",
              paddingBottom: "3%",
              marginTop: "10%",
              marginLeft: "1%",
            }}
          />
        </div>
      </div>
      <div className="col">
        <div className="container">
          <div className="address">
            <div className="row">
              <label
                className="form-label"
                style={{ padding: "10px", fontWeight: "bold" }}
              >
                Address Information
              </label>
            </div>
            <div className="row">
              <div className="col">
                <label>House No:</label>
                <input
                  type="text"
                  id="houseNo"
                  style={{
                    paddingLeft: "3%",
                    paddingRight: "5%",
                    paddingTop: "0.5%",
                    paddingBottom: "0.6%",
                    marginTop: "1",
                    marginLeft: "6%",
                  }}
                />
              </div>
              <div className="col">
                <label>State:</label>
                <input
                  type="text"
                  id="state"
                  style={{
                    paddingLeft: "3%",
                    paddingRight: "5%",
                    paddingTop: "0.5%",
                    paddingBottom: "0.6%",
                    marginTop: "1",
                    marginLeft: "10%",
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label>Street Name:</label>
                <input
                  type="text"
                  id="streetName"
                  style={{
                    paddingLeft: "3%",
                    paddingRight: "5%",
                    paddingTop: "0.5%",
                    paddingBottom: "0.6%",
                    marginTop: "2%",
                    marginLeft: "3%",
                  }}
                />
              </div>
              <div className="col">
                <label>Pincode:</label>
                <input
                  type="text"
                  id="pincode"
                  style={{
                    paddingLeft: "3%",
                    paddingRight: "5%",
                    paddingTop: "0.5%",
                    paddingBottom: "0.6%",
                    marginTop: "1.5%",
                    marginLeft: "6%",
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label>Area Name:</label>
                <input
                  type="text"
                  id="areaName"
                  style={{
                    paddingLeft: "3%",
                    paddingRight: "5%",
                    paddingTop: "0.5%",
                    paddingBottom: "0.6%",
                    marginTop: "2%",
                    marginLeft: "5%",
                  }}
                />
              </div>
              <div className="col">
                <label>Nationality:</label>
                <input
                  type="text"
                  id="nationality"
                  style={{
                    paddingLeft: "3%",
                    paddingRight: "5%",
                    paddingTop: "0.5%",
                    paddingBottom: "0.6%",
                    marginTop: "2%",
                    marginLeft: "3%",
                  }}
                />
              </div>
            </div>
            <div className="col">
              <button
                style={{
                  position: "fixed",
                  bottom: "5%",
                  right: "18%",
                  color: "black",
                  backgroundColor: "green",
                  paddingTop: "0.3%",
                  paddingBottom: "0.3%",
                  textDecoration: "none",
                }}
              >
                Enroll now
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnrollCourse;
