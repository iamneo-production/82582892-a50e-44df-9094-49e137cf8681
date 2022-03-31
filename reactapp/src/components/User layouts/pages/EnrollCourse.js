import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function EnrollCourse() {
  const navigate = useNavigate();
  const [studentdata,setStudentData]=useState({
    firstName: "",
    lastName: "",
    gender: "",
    fathername: "",
    phoneNumber1: "",
    phoneNumber2: "",
    motherName: "",
    houseNo: "",
    streetName: "",
    areaName: "",
    pincode: "",
    state: "",
    nationality: "",
    emailId: "",
    age: " ",
  })

  const changeFirstNameHandler = (event) => {
    setStudentData({...studentdata, firstName: event.target.value });
  };
  const changeLastNameHandler = (event) => {
    setStudentData({...studentdata, lastName: event.target.value });
  };
  const changeGenderHandler = (event) => {
    setStudentData({...studentdata, gender: event.target.value });
  };
  const changeFatherNameHandler = (event) => {
    setStudentData({...studentdata, fathername: event.target.value });
  };
  const changePhoneNumber1Handler = (event) => {
    setStudentData({...studentdata, phoneNumber1: event.target.value });
  };
  const changePhoneNumber2Handler = (event) => {
    setStudentData({...studentdata, phoneNumber2: event.target.value });
  };
  const changeMotherNameHandler = (event) => {
    setStudentData({...studentdata, motherName: event.target.value });
  };
  const changeHouseNoHandler = (event) => {
    setStudentData({...studentdata, houseNo: event.target.value });
  };
  const changeStreetNameHandler = (event) => {
    setStudentData({...studentdata, streetName: event.target.value });
  };
  const changeAreaNameHandler = (event) => {
    setStudentData({...studentdata, areaName: event.target.value });
  };
  const changePincodeHandler = (event) => {
    setStudentData({...studentdata, pincode: event.target.value });
  };

  const changeStateHandler = (event) => {
    setStudentData({...studentdata, state: event.target.value });
  };
  const changeNationalityHandler = (event) => {
    setStudentData({...studentdata, nationality: event.target.value });
  };

  const changeEmailIdHandler = (event) => {
    setStudentData({...studentdata, emailId: event.target.value });
  };

  const changeAgeHandler = (event) => {
    setStudentData({...studentdata, age: event.target.value });
  };

 async function EnrollCourse(event){
    event.preventDefault();
    console.log(studentdata);

    const response = await fetch(
      "https://localhost:44358/admin/users/CheckUser",
      {
        method: "POST",
        body: JSON.stringify({ email: studentdata.emailId }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
   
    
    const Userdata = await response.json();
    console.log(Userdata);
    // Check Student
    if (Userdata.check) {
      try {
        const response = await fetch(
          "https://localhost:44358/admin/CheckStudent",
          {
            method: "POST",
            body: { email: studentdata.emailId },
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        console.log("123");
        const Studentdata = await response.json();

        // Edit Existing Student data
        if (Studentdata.checkStudent) {
          var formdata = {
            studentId: Studentdata.id,
            courseId: localStorage.getItem("courseId"),
            academyId: localStorage.getItem("academyId"),
            joinDate: Date.Now,
          };
          try {
            const response = await fetch(
              "https://localhost:44358/admin/editStudent/",
              {
                method: "PUT",
                body: { studentdata: studentdata },
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
              }
            );
          } catch {
            return false;
          }

          // register Course
          try {
            const response = await fetch(
              "https://localhost:44358/admin/registercourse/",
              {
                method: "POST",
                body: { registerCourse: formdata },
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
              }
            );
            const data = await response.json();
          } catch {
            return false;
          }
        } else {
          /// Doubt

          try {
            const response = await fetch(
              "https://localhost:44358/admin/addStudent",
              {
                method: "POST",
                body: { student:studentdata },
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
              }
            );
          } catch {
            return false;
          }

          const Studentdata = await response.json();

          var formdata = {
            studentId: Studentdata.id,
            courseId: localStorage.getItem("courseId"),
            academyId: localStorage.getItem("academyId"),
            joinDate: Date.Now,
          };

          try {
            const response = await fetch(
              "https://localhost:44358/admin/registercourse/",
              {
                method: "POST",
                body: { registerCourse: formdata },
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
              }
            );
            const data = await response.json();
          } catch {
            return false;
          }
        }
      } catch {
        return false;
      }
    }

    //   try {
    //     const response = await fetch("https://localhost:44358/admin/addCourse", {
    //       method: "POST",
    //       body: { formdata: FormData },
    //       headers: {
    //         "Content-Type": "application/json",
    //         Accept: "application/json",
    //       },
    //     });
    //     const data = await response.json();
    //     alert(data.message);
    //     this.state = data;
    //   } catch {
    //     return false;
    //   }
    alert("Successfully Enrolled");
    navigate('/user/enrolledcourse')
  }


  return (
    <div className="container">
    <div className="main">
      <form name="studentDetails">
        <div className="row"></div>
        <div className="row">
          <div className="col-md-4">
            <div className="mb-3">
              <input
                name="firstName"
                placeholder="enter your first name"
                className="form-control"
                
                onChange={changeFirstNameHandler}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="mb-3">
              <input
                name="lastName"
                placeholder="enter your last name"
                className="form-control"
                
                onChange={changeLastNameHandler}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="mb-3">
              <input
                name="gender"
                placeholder="enter male or female"
                className="form-control"
               
                onChange={changeGenderHandler}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="mb-5">
              <input
                name="fathername"
                placeholder="enter your father name"
                className="form-control"
                
                onChange={changeFatherNameHandler}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="mb-3">
              <input
                name="phoneNumber1"
                placeholder="enter phone number"
                className="form-control"
               
                onChange={changePhoneNumber1Handler}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="mb-3">
              <input
                name="phoneNumber2"
                placeholder="enter alternate number"
                className="form-control"
            
                onChange={changePhoneNumber2Handler}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="row">
              <div className="mb-5">
                <input
                  id="motherName"
                  placeholder="enter your mother name"
                  className="form-control"
                 
                  onChange={changeMotherNameHandler}
                />
              </div>
            </div>

            <div className="row">
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="enter email id"
                  className="form-control"
                 
                  onChange={changeEmailIdHandler}
                />
              </div>
            </div>
            <div className="row">
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="enter your age"
                  className="form-control"
                  
                  onChange={changeAgeHandler}
                />
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="container">
              <div className="address">
                <div className="row">
                  <label className="form-label">Address Information</label>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="houseNo"
                    className="col-sm-3 col-form-label col-form-label-sm"
                  >
                    House No:{" "}
                  </label>
                  <div className="col-sm-5">
                    <input
                      type="text"
                      id="houseNo"
                      className="form-control form-control-sm"
                     
                      onChange={changeHouseNoHandler}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="StreetName"
                    className="col-sm-3 col-form-label col-form-label-sm"
                  >
                    Street Name:{" "}
                  </label>
                  <div className="col-sm-5">
                    <input
                      type="text"
                      id="streetNo"
                      className="form-control form-control-sm"
                     
                      onChange={changeStreetNameHandler}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col mb-3">
                    <label htmlFor="areaName" className="form-label">
                      Area Name :{" "}
                    </label>
                    <input
                      type="text"
                      id="areaName"
                      className="form-control"
                      
                      onChange={changeAreaNameHandler}
                    />
                  </div>
                  <div className="col mb-3">
                    <label htmlFor="pincode" className="form-label">
                      Pincode :{" "}
                    </label>
                    <input
                      type="text"
                      id="pincode"
                      className="form-control"
                     
                      onChange={changePincodeHandler}
                    />
                  </div>
                </div>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="state" className="form-label">
                      State :{" "}
                    </label>
                    <input
                      type="text"
                      id="state"
                      className="form-control"
                      
                      onChange={changeStateHandler}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="nationality" className="form-label">
                      Nationality:{" "}
                    </label>
                    <input
                      type="text"
                      id="nationality"
                      className="form-control"
                      
                      onChange={changeNationalityHandler}
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={EnrollCourse}
                    style={{
                      position: "fixed",
                      bottom: "9%",
                      right: "15%",
                      color: "black",
                      backgroundColor: "green",
                      paddingTop: "0.3%",
                      paddingBottom: "0.3%",
                      textDecoration: "none",
                    }}
                  >
                    Enroll Course
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  )
}

export default EnrollCourse
