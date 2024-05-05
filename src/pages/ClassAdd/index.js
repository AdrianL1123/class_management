import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function ClassAdd() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    let error = "";
    if (name === "" || description === "") {
      error = "Please fill up all the details";
    }
    if (error !== "") {
      alert(error);
    } else {
      let stringUsers = localStorage.getItem("classManagements");
      let users = JSON.parse(stringUsers);
      if (!users) users = [];
      users.push({
        id: nanoid(),
        name: name,
        description: description,
      });
      let convertedUsers = JSON.stringify(users);
      localStorage.setItem("classManagements", convertedUsers);
      navigate("/class");
    }
  };
  return (
    <div className="container mx-auto my-5" style={{ maxWidth: "700px" }}>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h1 className="h1">Add New Class</h1>
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
            </div>
            <div className="row pt-3">
              <div className="col">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="form-control"
                  rows="3"
                  onChange={(e) => setDescription(e.target.value)}
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
