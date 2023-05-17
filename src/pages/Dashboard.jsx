import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../store/userContext";

function Dashboard() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("userToken");
    setToken("");
    navigate("/login");
  };
  const { token, setToken } = useContext(UserContext);
  return (
    <div
      className="container-fluid"
      style={{ width: "100vw", height: "100vh", background: "#9EBFFF" }}
    >
      <div class="row">
        <div className="col-md-10 d-flex justify-content-center">
          <h1>Hello welcome</h1>
        </div>
        <div class="col-md-2">
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={handleLogout}
          >
            Logout
          </span>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
