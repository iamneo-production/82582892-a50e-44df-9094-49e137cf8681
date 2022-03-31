import React, { Component } from "react";

class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      age: "",
    };

    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeGenderHandler = this.changeGenderHandler.bind(this);
    this.changeFatherNameHandler = this.changeFatherNameHandler.bind(this);
    this.changePhoneNumber1Handler = this.changePhoneNumber1Handler.bind(this);
    this.changePhoneNumber2Handler = this.changePhoneNumber2Handler.bind(this);
    this.changeMotherNameHandler = this.changeMotherNameHandler.bind(this);
    this.changeHouseNoHandler = this.changeHouseNoHandler.bind(this);
    this.changeStreetNameHandler = this.changeStreetNameHandler.bind(this);
    this.changeAreaNameHandler = this.changeAreaNameHandler.bind(this);
    this.changePincodeHandler = this.changePincodeHandler.bind(this);
    this.changeStateHandler = this.changeStateHandler.bind(this);
    this.changeNationalityHandler = this.changeNationalityHandler.bind(this);
    this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
    this.changeAgeHandler = this.changeAgeHandler.bind(this);
    this.saveStudent = this.saveStudent.bind(this);
  }

  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };
  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };
  changeGenderHandler = (event) => {
    this.setState({ gender: event.target.value });
  };
  changeFatherNameHandler = (event) => {
    this.setState({ fatherName: event.target.value });
  };
  changePhoneNumber1Handler = (event) => {
    this.setState({ phoneNumber1: event.target.value });
  };
  changePhoneNumber2Handler = (event) => {
    this.setState({ phoneNumber2: event.target.value });
  };
  changeMotherNameHandler = (event) => {
    this.setState({ motherName: event.target.value });
  };
  changeHouseNoHandler = (event) => {
    this.setState({ houseNo: event.target.value });
  };
  changeStreetNameHandler = (event) => {
    this.setState({ streetName: event.target.value });
  };
  changeAreaNameHandler = (event) => {
    this.setState({ areaName: event.target.value });
  };
  changePincodeHandler = (event) => {
    this.setState({ pincode: event.target.value });
  };

  changeStateHandler = (event) => {
    this.setState({ state: event.target.value });
  };
  changeNationalityHandler = (event) => {
    this.setState({ nationality: event.target.value });
  };

  changeEmailIdHandler = (event) => {
    this.setState({ emailId: event.target.value });
  };

  changeAgeHandler = (event) => {
    this.setState({ age: event.target.value });
  };

  saveStudent = (e) => {
    e.preventDefault();
    let student = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      gender: this.state.gender,
      fatherName: this.state.fatherName,
      phoneNumber1: this.state.phoneNumber1,
      phoneNumber2: this.state.phoneNumber2,
      motherName: this.state.motherName,
      houseNo: this.state.houseNo,
      streetName: this.state.streetName,
      areaName: this.state.areaName,
      pinCode: this.state.pinCode,
      state: this.state.state,
      emailId: this.state.emailId,
      age: this.state.age,
    };
    console.log("Student=>" + JSON.stringify(student));
    this.props.setContacts((prevState) => {
      console.log([...prevState, student]);
      return [...prevState, student];
    });
    this.props.navigate("student");
  };
  render() {
    return (
      <div className="container">
        <div className="main">
          <form name="studentDetails"></form>
          <div className="row"></div>
          <div className="row">
            <div className="col-md-4">
              <div className="mb-3">
                <input
                  name="firstName"
                  placeholder="enter your first name"
                  className="form-control"
                  value={this.state.firstName}
                  onChange={this.changeFirstNameHandler}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <input
                  name="lastName"
                  placeholder="enter your last name"
                  className="form-control"
                  value={this.state.lastName}
                  onChange={this.changeLastNameHandler}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <input
                  name="gender"
                  placeholder="enter male or female"
                  className="form-control"
                  value={this.state.gender}
                  onChange={this.changeGenderHandler}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="mb-5">
                <input
                  name="fatherName"
                  placeholder="enter your father name"
                  className="form-control"
                  value={this.state.fatherName}
                  onChange={this.changeFatherNameHandler}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <input
                  name="phoneNumber1"
                  placeholder="enter phone number"
                  className="form-control"
                  value={this.state.phoneNumber1}
                  onChange={this.changePhoneNumber1Handler}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3">
                <input
                  name="phoneNumber2"
                  placeholder="enter alternate number"
                  className="form-control"
                  value={this.state.phoneNumber2}
                  onChange={this.changePhoneNumber2Handler}
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
                    value={this.state.motherName}
                    onChange={this.changeMotherNameHandler}
                  />
                </div>
              </div>

              <div className="row">
                <div className="mb-5">
                  <input
                    type="text"
                    placeholder="enter email id"
                    className="form-control"
                    value={this.state.emailId}
                    onChange={this.changeEmailIdHandler}
                  />
                </div>
              </div>
              <div className="row">
                <div className="mb-5">
                  <input
                    type="text"
                    placeholder="enter your age"
                    className="form-control"
                    value={this.state.age}
                    onChange={this.changeAgeHandler}
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
                        value={this.state.HouseNo}
                        onChange={this.changeHouseNoHandler}
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
                        value={this.state.StreetNo}
                        onChange={this.changeStreetNoHandler}
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
                        value={this.state.areaName}
                        onChange={this.changeAreaNameHandler}
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
                        value={this.state.Pincode}
                        onChange={this.changePincodeHandler}
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
                        value={this.state.state}
                        onChange={this.changeStateHandler}
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
                        value={this.state.nationality}
                        onChange={this.changeNationalityHandler}
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={this.saveStudent}
                    >
                      Add Student
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddStudent;
