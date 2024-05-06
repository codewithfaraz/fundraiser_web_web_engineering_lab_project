import { useEffect, useState } from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableBody,
} from "@mui/material";

const p = [];

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const username = localStorage.getItem("username");
      let url = `http://127.0.0.1:8000/project/getprojects/${username}`;
      const response = await fetch(url);
      const data = await response.json();
      const dataFromDB = data.projects;
      dataFromDB.map((item) => {
        p.push({
          title: item.title,
          category: item.category,
          amount: item.amount,
        });
      });
      setProjects(p);
    }

    fetchData();

    // Cleanup function (if needed)
    return () => {
      // Perform cleanup here if necessary
    };
  }, []);

  return (
    <>
      <h1>Your Project Here</h1>
      <TableContainer
        component={Paper}
        sx={{ height: "300px", overflowY: "scroll" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableCell sx={{ fontWeight: "bolder" }}>TITLE</TableCell>
            <TableCell align="right" sx={{ fontWeight: "bolder" }}>
              CATEGORY
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: "bolder" }}>
              AMOUNT
            </TableCell>
          </TableHead>
          <TableBody>
            {projects.map((row, index) => (
              <TableRow
                key={index} // Use index as key if data does not have a unique identifier
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right">{row.category}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
