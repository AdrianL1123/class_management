import { Link } from "react-router-dom";

export default function Home() {
  // Load all the classRoom from the local storage
  const classRooms = JSON.parse(localStorage.getItem("classRooms")) || [];

  return (
    <div>
      <div className="container mx-auto my-5" style={{ maxWidth: "500pxs" }}>
        <h1 className="h1 mb-4 text-center">
          Class Attendance Management System
        </h1>
        {classRooms.map((p) => {
          return (
            <div className="card mb-2" key={p.id}>
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-content">{p.email}</p>
                <div className="text-end">
                  <Link to="/post" className="btn btn-primary btn-sm">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
        <div className="mt-4 d-flex justify-content-center gap-3">
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </div>
    </div>
  );
}
