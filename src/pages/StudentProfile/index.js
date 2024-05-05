import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Tab,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableBody,
  Container,
  Button,
} from "@mui/material";
export default function StudenProfile() {
  const navigate = useNavigate();
  //todo get data from local storage
  const stringStudents = localStorage.getItem("studentProfiles");
  //todo convert the string version into array
  let students = JSON.parse(stringStudents);
  if (!students) students = [];

  return (
    <Container style={{ maxWidth: "1000px", paddingTop: "30px" }}>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h1 className="h1">Manage Student Profiles</h1>
        <div className="text-end">
          <Link to="/studentPfAdd" className="btn btn-primary btn-sm">
            Add New Student Profile
          </Link>
        </div>
      </div>
      <Container>
        <TableContainer
          component={Paper}
          sx={{ maxWidth: "1000px", marginTop: "50px" }}
        >
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">ID</TableCell>
                <TableCell>Student Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>IC Number</TableCell>
                <TableCell>Date Of Birth</TableCell>
                <TableCell>Phone No.</TableCell>
                <TableCell>Parent/Guardian Contact Info</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((s, i) => (
                <TableRow
                  key={s.id}
                  sx={{
                    "&:last-child td, &:last-child th": {
                      border: 0,
                    },
                  }}
                >
                  <TableCell align="left">{i + 1}</TableCell>
                  <TableCell>{s.name}</TableCell>
                  <TableCell>{s.email}</TableCell>
                  <TableCell>{s.icNumber}</TableCell>
                  <TableCell>{s.dateOfBirth}</TableCell>
                  <TableCell>{s.phoneNo}</TableCell>
                  <TableCell>{s.parentGuardianInfo}</TableCell>
                  <TableCell align="right" sx={{ display: "flex", border: 0 }}>
                    <Button
                      color="success"
                      onClick={() => {
                        navigate("/studentPfEdit/" + s.id);
                      }}
                    >
                      <EditIcon />
                    </Button>
                    <Button
                      color="error"
                      onClick={() => {
                        const answer = window.confirm(
                          "Are you sure you want to delete this student profile ?"
                        );
                        if (answer) {
                          let newStudents = students.filter(
                            (item) => item.id !== s.id
                          );
                          localStorage.setItem(
                            "studentProfiles",
                            JSON.stringify(newStudents)
                          );
                          navigate("/studentPf");
                        }
                      }}
                    >
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <div className="text-center pt-5">
        <Link to="/dashboard" className="btn btn-link btn-sm">
          <i className="bi bi-arrow-left"></i> Back to Dashboard
        </Link>
      </div>
    </Container>
  );
}
