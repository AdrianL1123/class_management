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

export default function ClassEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const classes = JSON.parse(localStorage.getItem("classManagements"));
  const selectedClasses = classes.find((c) => c.id === id);

  const [name, setName] = useState(selectedClasses ? selectedClasses.name : "");
  const [description, setDescription] = useState(
    selectedClasses ? selectedClasses.description : ""
  );

  if (!selectedClasses) {
    return (
      <div>
        <Typography>Class Not Found.</Typography>
        <Link to="/class">Go back</Link>
      </div>
    );
  }
  const updateClasses = () => {
    let error = "";
    // INSTRUCTION: make sure all fields are filled
    if (name === "" || description === "") {
      error = "Please fill up all the details";
    }
    if (error !== "") {
      alert(error);
    } else {
      const newClasses = classes.map((c) => {
        if (c.id === id) {
          return { ...c, name: name, description: description };
        }
        return c;
      });
      localStorage.setItem("classManagements", JSON.stringify(newClasses));
      navigate("/class");
    }
  };
  return (
    <Container maxWidth="sm">
      <Typography variant="h3">Edit Class</Typography>
      <Card
        sx={{
          border: "2px solid #000",
          marginTop: "20px",
          padding: "20px",
        }}
      >
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                variant="outlined"
                fullWidth
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
          <Button variant="contained" fullWidth onClick={updateClasses}>
            Edit
          </Button>
        </CardActions>
        {/* call the updatePost as event handler */}
      </Card>
      <div className="text-center pt-5">
        <Link to="/class" className="btn btn-link btn-sm">
          <i className="bi bi-arrow-left"></i> Back to Class Management
        </Link>
      </div>
    </Container>
  );
}
