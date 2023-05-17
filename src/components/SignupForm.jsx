import React from "react";
import { MDBBtn, MDBCol, MDBInput } from "mdb-react-ui-kit";
function SignupForm({ changeFunction, signupFunction }) {
  return (
    <MDBCol
      md="10"
      lg="6"
      className="order-2 order-lg-1 d-flex flex-column align-items-center"
    >
      <h2 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</h2>

      <div className="d-flex flex-row align-items-center mb-4 ">
        <MDBInput
          label="Your Name"
          name="userName"
          type="text"
          className="w-100"
          onChange={changeFunction}
        />
      </div>

      <div className="d-flex flex-row align-items-center mb-4">
        <MDBInput
          label="Your Email"
          name="userEmail"
          type="email"
          onChange={changeFunction}
        />
      </div>

      <div className="d-flex flex-row align-items-center mb-4">
        <MDBInput
          label="Password"
          name="password"
          type="password"
          onChange={changeFunction}
        />
      </div>

      <div className="d-flex flex-row align-items-center mb-4">
        <MDBInput
          label="Repeat your password"
          name="repeatPassword"
          type="password"
          onChange={changeFunction}
        />
      </div>

      <MDBBtn className="mb-4" size="lg" onClick={signupFunction}>
        Register
      </MDBBtn>
    </MDBCol>
  );
}

export default SignupForm;
