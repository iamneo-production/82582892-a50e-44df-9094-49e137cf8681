import React,{useRef,useState} from "react";
import { useNavigate } from "react-router-dom";

function EditAcademy(props) {
  const navigate = useNavigate();
  const [Err_msg, setErr_msg] = useState(false);
  const [msg, setmsg] = useState("");
  var phoneno = /^\d{10}$/;
  const academyName = useRef();
  const contactNumber = useRef();
  const imageUrl = useRef();
  const emailId = useRef();
  const academyLocation = useRef();
  const academyDescription = useRef();
  let formData = {};
  var errors = ["Please fill all the input fields"];

  async function putEditAcademy() {
    try {
      const response = await fetch("https://localhost:44358/admin/editInstitue/{id}", {
        method: "PUT",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      alert(data.message);
      if (response.ok) navigate("/admin/academy");
      else return;
    } catch {
      return false;
    }
  }

  const submit = (event) => {
    event.preventDefault();
    formData.instituteName = academyName.current.value;
    formData.mobile = contactNumber.current.value;
    formData.imageUrl = imageUrl.current.value;
    formData.email = emailId.current.value;
    formData.institueAddress = academyLocation.current.value;
    formData.instituteDescription = academyDescription.current.value;
    setErr_msg(false);
    if (
      !(
        formData.instituteName &&
        formData.mobile &&
        formData.imageUrl &&
        formData.email &&
        formData.institueAddress &&
        formData.instituteDescription
      )
    ) {
      setmsg(errors[0]);
      setErr_msg(true);
      return;
    }

    // if (!regularExpression.test(formData.password)) {
    //   setmsg(errors[1]);
    //   setErr_msg(true);
    //   return;
    // }
    // if (formData.password !== confirm_pass) {
    //   setmsg(errors[2]);
    //   setErr_msg(true);
    //   return;
    // }
    if (!formData.mobile.match(phoneno)) {
      setmsg(errors[1]);
      setErr_msg(true);
      return;
    }

    putEditAcademy();
  };

  return (
    <div style={{ backgroundColor: "gray", height: "100vh" }}>
      <div
        className="container mt-4 py-4"
        style={{ width: "75%", backgroundColor: "gray" }}
      >
        <h2 className="Add">Edit Academy </h2>
        <div className="row">
          <div className="col">
            <input
              ref={academyName}
              type="text"
              placeholder="Enter Academy name"
              id="academyName"
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
              ref={contactNumber}
              type="text"
              placeholder="Enter the contact number"
              id="contactNumber"
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
              ref={imageUrl}
              type="text"
              placeholder="Enter the academy Image url"
              id="imageUrl"
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
              ref={emailId}
              type="text"
              placeholder="Enter the academy email"
              id="emailId"
              style={{
                paddingLeft: "2%",
                paddingRight: "20%",
                paddingTop: "3%",
                paddingBottom: "3%",
                marginTop: "10%",
              }}
            />
          </div>
          <div className="row mt-3">
            <div className="col">
              <input
                ref={academyLocation}
                type="text"
                placeholder="Enter Academy Location"
                id="academyLocation"
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
                ref={academyDescription}
                type="text"
                placeholder="Enter Academy description  "
                id="academyDescription"
                style={{
                  paddingLeft: "2%",
                  paddingRight: "40%",
                  paddingTop: "2%",
                  paddingBottom: "20%",
                  maginTop: "10%",
                  marginLeft: "60%",
                  marginBottom: "20%",
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
                >
                  Edit Academy
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditAcademy;
