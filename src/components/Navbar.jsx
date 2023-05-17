import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Link
        to="/login"
        style={{
          textDecoration: "none",
          display: "block",
          float: "left",
          padding: "5px",
        }}
      >
        Login
      </Link>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          display: "block",
          float: "left",
          padding: "5px",
        }}
      >
        Signup
      </Link>
    </>
  );
}

export default Navbar;
