import React from "react";
import { Link } from "react-router-dom";

function Signup(props) {
  const { handleChange, requestMember, memberInfo } = props;

  return (
    <>
      <div className="container mt-5">
        <h2 className="mb-5 text-center">Register Member</h2>
      </div>

      <div className="container">
        <strong className="text-danger">
          {/* *DEAN will be directly added as Member <br /> */}
          *Wallet address will be taken from your current acctive account of
          MetaMask
        </strong>
        <div className="row mt-4">
          <div className="col-3 d-flex flex-column text-end">
            <label className="mb-4">Select Role:</label>
            <label className="mb-4">Select Department:</label>
            <label className="mb-4">Name:</label>
            {/* <label className="mb-4">Address:</label> */}
          </div>
          <div className="col-9 text-start">
            <div className="mb-3">
              <select
                aria-label="Default select example"
                className="text-center p-1"
                id="fruits"
                onChange={(e) => handleChange(e)}
                name="post"
                value={memberInfo.post}
              >
                <option defaultValue={true}>Select Role</option>
                <option value="ROLE1">ROLE1</option>
                <option value="ROLE2">ROLE2</option>
                <option value="ROLE3">ROLE3</option>
                <option value="ROLE4">ROLE4</option>
              </select>
            </div>
            <div className="mb-3">
              <select
                aria-label="Default select example"
                className="text-center p-1"
                onChange={(e) => handleChange(e)}
                name="dept"
                value={memberInfo.dept}
              >
                <option defaultValue={true}>Select Department</option>
                <option value="DEPT1">DEPT1</option>
                <option value="DEPT2">DEPT2</option>
                <option value="DEPT3">DEPT3</option>
              </select>
            </div>
            <div className="mb-3">
              <input
                className="p-1 text-center"
                type="text"
                placeholder="Enter Your Name"
                onChange={(e) => handleChange(e)}
                name="name"
                value={memberInfo.name}
                autoComplete="off"
              />
            </div>
            {/* <div className="mb-3">
              <input
                className="p-1 text-center"
                type="text"
                placeholder="Enter Address"
                onChange={(e) => handleChange(e)}
                name="userAddress"
                value={memberInfo.userAddress}
              />
            </div> */}
            <div>
              <Link to="/login">
                <button className="btn btn-primary" onClick={requestMember}>
                  Request Member
                </button>
              </Link>
            </div>
            <p className="mt-2">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
