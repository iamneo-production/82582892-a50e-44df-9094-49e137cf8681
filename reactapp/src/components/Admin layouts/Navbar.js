import React from 'react';
import {Link} from "react-router-dom"



const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar navbar-dark" >
              <div className="container-fluid">
                         <Link className="fs-2 navbar-brand" to="/">Abacus Academy</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                       <span className="navbar-toggler-icon"></span>
                    </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto " >
                                <li className="nav-item " >
                                    <Link className="nav-link ac"  to="academy">Academy</Link>
                                </li>
                               <li className="nav-item ">
                                    <Link className="nav-link mx-5" to="course">Course</Link>
                                </li>
                                <li className="nav-item ">
                                    <Link className="nav-link" to="student">Students</Link>
                                </li>
                                
                                
                        </ul>
                        <Link className="navbar-brand "  to="/">Logout</Link>   
                   </div>
             </div>
            </nav>
        </div>
    );
};

export default Navbar;
