import React from "react";
import { Link } from "react-router-dom";
function Logout() {
  return (
    <div>
    {alert("Logged out successfully")}
    <Link to="/login"></Link>
    </div>
  );
}
export default Logout;
