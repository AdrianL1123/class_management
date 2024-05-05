import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function StudentProfileAdd() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [icNumber, setIcNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [parentGuardianInfo, setParentGuardianInfo] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    let error = "";
    if (
      name === "" ||
      email === "" ||
      icNumber === "" ||
      dateOfBirth === "" ||
      phoneNo === "" ||
      parentGuardianInfo === "" ||
      address === ""
    ) {
      error = "Please fill up all the details";
    }
    if (error !== "") {
      alert(error);
    } else {
      let stringUsers = localStorage.getItem("studentProfiles");
      let users = JSON.parse(stringUsers);
      if (!users) users = [];
      users.push({
        id: nanoid(),
        name: name,
        email: email,
        icNumber: icNumber,
        dateOfBirth: dateOfBirth,
        address: address,
        phoneNo: phoneNo,
        parentGuardianInfo: parentGuardianInfo,
      });
      let convertedUsers = JSON.stringify(users);
      localStorage.setItem("studentProfiles", convertedUsers);
      navigate("/studentPf");
    }
  };
  return (
    <div className="container mx-auto my-5" style={{ maxWidth: "700px" }}>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h1 className="h1">Add New User</h1>
      </div>
      <div className="card mb-2 p-4">
        {/* call the event handing function - handleSubmit */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <div className="row">
              <div className="col">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col">
                <label for="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="row pt-3">
              <div className="col">
                <label htmlFor="icNumber" className="form-label">
                  IC Number
                </label>
                <input
                  type="icNumber"
                  className="form-control"
                  id="icNumber"
                  value={icNumber}
                  onChange={(e) => setIcNumber(e.target.value)}
                />
              </div>
              <div className="col">
                <label htmlFor="date" className="form-label">
                  Date Of Birth
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                />
              </div>
            </div>
            <div className="row pt-3">
              <div className="col">
                <label htmlFor="phone" className="form-label">
                  Phone No.
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                />
              </div>
              <div className="col">
                <label htmlFor="text" className="form-label">
                  Parent/Guardian Phone No.
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="text"
                  value={parentGuardianInfo}
                  onChange={(e) => setParentGuardianInfo(e.target.value)}
                />
              </div>
            </div>
            <div className="row pt-3">
              <div className="col">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  className="form-control"
                  rows="3"
                  onChange={(e) => setAddress(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="text-center">
        <Link to="/studentPf" className="btn btn-link btn-sm">
          <i className="bi bi-arrow-left"></i> Back to Profiles
        </Link>
      </div>
    </div>
  );
}
