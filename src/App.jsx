import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./pages/Dashboard";
import { UserContext } from "./store/userContext";

function App() {
  const [token, setToken] = useState();
  useEffect(() => {
    setToken(localStorage.getItem("userToken"));
  });
  return (
    <UserContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <Routes>
          {!token && (
            <>
              <Route path="/" element={<Signup />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route
                path="*"
                element={<Navigate to="/login"></Navigate>}
              ></Route>
            </>
          )}
          {token && (
            <>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route
                path="*"
                element={<Navigate to="/dashboard"></Navigate>}
              ></Route>
            </>
          )}
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
