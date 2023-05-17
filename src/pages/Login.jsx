import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { instance } from "../config/BaseUrl";
import LoginForm from "../components/LoginForm";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { UserContext } from "../store/userContext";
import Navbar from "../components/Navbar";

function Login() {
  const [err, setErr] = useState();
  const navigate = useNavigate();
  const { token, setToken } = useContext(UserContext);
  const [userDetails, setUserDetails] = useState({
    userEmail: "",
    password: "",
  });
  const changeFunction = ({ currentTarget: input }) => {
    setUserDetails({
      ...userDetails,
      [input.name]: input.value,
    });
  };
  const loginFunction = async () => {
    if (!userDetails.userEmail && !userDetails.password) {
      setErr("Please fill the fields");
      return;
    } else {
      setErr("");
    }
    try {
      let result = await instance.post("/user/signin", userDetails);
      localStorage.setItem("userToken", result.data.token);
      setToken(result.data.token);
      navigate("/dashboard");
    } catch (err) {
      setErr(err.response.data?.errMsg);
    }
  };
  return (
    <MDBContainer fluid>
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
          {err && (
            <div class="alert alert-danger" role="alert">
              {err}
            </div>
          )}
          <Navbar />
          <MDBRow>
            <LoginForm
              changeFunction={changeFunction}
              loginFunction={loginFunction}
            />
            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Login;
