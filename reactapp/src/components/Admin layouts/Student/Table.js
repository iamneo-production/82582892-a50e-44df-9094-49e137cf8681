import React, { useState } from "react";
import classes from "./Table.module.css";
import data from "./mock-data.json";
import { nanoid } from "nanoid";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
function Table(props) {
  {
    /*const [contacts , setContacts] = useState(data);seeting the contacts or adding using this function*/
  }
  const navigate = useNavigate();
  const delHandler = (sid) => {
    props.setContacts(props.contacts.filter((contact) => contact.sid != sid));
  };
  const editHandler = (sid) => {
    navigate("/admin/student/editStudent/", {
      state: {
        sid: sid,
      },
    });
  };

  return (
    <>
      <div className={classes["app-container"]}>
        {console.log(props.contacts)}
        <div className="input-group mb-3">
          <input
            type="search"
            className="form-control"
            placeholder="type here to search"
          ></input>
          <button className="btn btn-success" type="submit">
            Search
          </button>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Student name</th>
                <th>Enrolled Course</th>
                <th>Mobile number</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {props.contacts.map((contact) => (
                <tr key={contact.id}>
                  <td>{contact.sid}</td>
                  <td>{contact.firstName}</td>
                  <td>{contact.ecourse}</td>
                  <td>{contact.phoneNumber1}</td>

                  <td>
                    {" "}
                    <svg
                      onClick={() => editHandler(contact.sid)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="25"
                      fill="currentColor"
                      className="bi bi-pencil-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path
                        fill-rule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                      />
                    </svg>
                    <svg
                      onClick={() => delHandler(contact.sid)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="25"
                      fill="currentColor"
                      className="bi bi-trash3"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                    </svg>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button
            className="btn btn-primary me-md-2"
            onClick={() => navigate("/admin/student/addstudent")}
            type="button"
          >
            Add Student
          </button>
        </div>
      </div>
    </>
  );
}
export default Table;
