import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/levels">Levels</Link>
      </li>
      <li>
        <Link to="/courses/123">Courses</Link>
      </li>
      <li>
        <Link to="/course/123/234">Course</Link>
      </li>
    </ul>
  );
}
export default Navbar;
