import { Link, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  CardActions,
} from "@mui/material";

export default function StudentProfileEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  //todo 1. load all the posts data from local storage and convert it to array
  const students = JSON.parse(localStorage.getItem("studentProfiles"));
  //todo 2. find the selected post using .find()
  const selectedStudents = students.find((s) => s.id === id);

  const [name, setName] = useState(
    selectedStudents ? selectedStudents.name : ""
  );
  const [email, setEmail] = useState(
    selectedStudents ? selectedStudents.email : ""
  );
  const [icNumber, setIcNumber] = useState(
    selectedStudents ? selectedStudents.icNumber : ""
  );
  const [dateOfBirth, setDateOfBirth] = useState(
    selectedStudents ? selectedStudents.dateOfBirth : ""
  );
  const [phoneNo, setPhoneNo] = useState(
    selectedStudents ? selectedStudents.phoneNo : ""
  );
  const [parentGuardianInfo, setParentGuardianInfo] = useState(
    selectedStudents ? selectedStudents.parentGuardianInfo : ""
  );
  const [address, setAddress] = useState(
    selectedStudents ? selectedStudents.address : ""
  );
  if (!selectedStudents) {
    return (
      <div>
        <Typography>Student Not Found.</Typography>
        <Link to="/studentPf">Go back</Link>
      </div>
    );
  }
  const updateUsers = () => {
    let error = "";
    // INSTRUCTION: make sure all fields are filled
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
      const newStudents = students.map((s) => {
        if (s.id === id) {
          return { ...s, name: name, email: email };
        }
        return s;
      });
      localStorage.setItem("studentProfiles", JSON.stringify(newStudents));
      navigate("/studentPf");
    }
  };
  return (
    <Container maxWidth="sm">
      <Typography variant="h3">Edit User</Typography>
      <Card
        sx={{
          border: "2px solid #000",
          marginTop: "20px",
          padding: "20px",
        }}
      >
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="IC Number"
                variant="outlined"
                fullWidth
                value={icNumber}
                onChange={(e) => setIcNumber(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Date Of Birth"
                variant="outlined"
                fullWidth
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Parent / Guardian Info"
                variant="outlined"
                fullWidth
                value={parentGuardianInfo}
                onChange={(e) => setParentGuardianInfo(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address"
                variant="outlined"
                fullWidth
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions
          sx={{
            paddingLeft: "15px",
            paddingRight: "15px",
          }}
        >
          <Button variant="contained" fullWidth onClick={updateUsers}>
            Edit
          </Button>
        </CardActions>
        {/* call the updatePost as event handler */}
      </Card>
      <div className="text-center pt-5">
        <Link to="/studentPf" className="btn btn-link btn-sm">
          <i className="bi bi-arrow-left"></i> Back to Student Profiles
        </Link>
      </div>
    </Container>
  );
}
