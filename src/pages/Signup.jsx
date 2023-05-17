import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { instance } from "../config/BaseUrl";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import SignupForm from "../components/SignupForm";
import Navbar from "../components/Navbar";

function Signup() {
  const [userDetails, setUserDetails] = useState({
    userName: "",
    userEmail: "",
    password: "",
    repeatPassword: "",
  });
  const [err, setErr] = useState();
  const navigate = useNavigate();
  const changeFunction = ({ currentTarget: input }) => {
    setUserDetails({
      ...userDetails,
      [input.name]: input.value,
    });
  };
  const signupFunction = async () => {
    if (
      !userDetails.userName.trim() ||
      !userDetails.userEmail.trim() ||
      !userDetails.password.trim() ||
      !userDetails.repeatPassword.trim()
    ) {
      setErr("Please fill all field");
      return;
    } else {
      setErr("");
    }
    if (userDetails.password !== userDetails.repeatPassword) {
      setErr("Password not matching");
      return;
    } else {
      setErr("");
    }
    try {
      let result = await instance.post("/user/addUser", userDetails);
      navigate("/login");
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
            <SignupForm
              changeFunction={changeFunction}
              signupFunction={signupFunction}
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

export default Signup;
