import { Link, useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
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
export default function Class() {
  const navigate = useNavigate();
  const stringClasses = localStorage.getItem("classManagements");
  let classes = JSON.parse(stringClasses);
  if (!classes) classes = [];

  return (
    <Container style={{ maxWidth: "700px", paddingTop: "30px" }}>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h1 className="h1">Manage Classes</h1>
        <div className="text-end">
          <Link to="/classAdd" className="btn btn-primary btn-sm">
            Add New Classes
          </Link>
        </div>
      </div>
      <Container>
        <TableContainer
          component={Paper}
          sx={{ maxWidth: "700px", marginTop: "50px" }}
        >
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">ID</TableCell>
                <TableCell align="center">Class Name</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {classes.map((c, i) => (
                <TableRow key={c.id}>
                  <TableCell align="left">{i + 1}</TableCell>
                  <TableCell align="center">{c.name}</TableCell>
                  <TableCell align="center">{c.description}</TableCell>
                  <TableCell align="center">
                    {" "}
                    <Button
                      color="success"
                      onClick={() => {
                        navigate("/classEdit/" + c.id);
                      }}
                    >
                      <EditIcon />
                    </Button>
                    <Button
                      color="error"
                      onClick={() => {
                        const answer = window.confirm(
                          "Are you sure you want to delete this Class ?"
                        );
                        if (answer) {
                          let newClasses = classes.filter(
                            (item) => item.id !== c.id
                          );
                          localStorage.setItem(
                            "classManagements",
                            JSON.stringify(newClasses)
                          );
                          navigate("/class");
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
