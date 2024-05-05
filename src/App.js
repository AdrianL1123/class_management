import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AttendanceTracking from "./pages/AttendanceTracking";
import Class from "./pages/Class";
import ClassAdd from "./pages/ClassAdd";
import ClassEdit from "./pages/ClassEdit";
import Dashboard from "./pages/Dashboard";
import StudentProfile from "./pages/StudentProfile";
import StudentProfileAdd from "./pages/StudentProfileAdd";
import StudentProfileEdit from "./pages/StudentProfileEdit";

import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />
        {/* Home */}

        <Route path="/attendanceT" element={<AttendanceTracking />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Dashboard */}

        {/* Student Profile */}
        <Route path="/studentPf" element={<StudentProfile />} />
        <Route path="/studentPfAdd" element={<StudentProfileAdd />} />
        <Route path="/studentPfEdit" element={<StudentProfileEdit />} />
        <Route path="/studentPfEdit/:id" element={<StudentProfileEdit />} />
        {/* Student Profile */}

        {/* class mangement */}
        <Route path="/class" element={<Class />} />
        <Route path="/classAdd" element={<ClassAdd />} />
        <Route path="/classEdit" element={<ClassEdit />} />
        <Route path="/classEdit/:id" element={<ClassEdit />} />
        {/* class mangement */}
      </Routes>
    </BrowserRouter>
  );
}
